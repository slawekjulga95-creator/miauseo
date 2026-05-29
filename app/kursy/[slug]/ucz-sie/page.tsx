import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LessonPlayer from "@/components/kursy/LessonPlayer";

type Props = { params: Promise<{ slug: string }> };

export default async function UczSiePage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/logowanie?next=/kursy/${slug}/ucz-sie`);

  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("id, title, slug")
    .eq("slug", slug)
    .single();

  if (courseError || !course) {
    return <div className="p-10 text-red-500">Błąd kursu: {courseError?.message ?? "nie znaleziono"}</div>;
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id)
    .order("order");

  if (lessonsError) {
    return <div className="p-10 text-red-500">Błąd lekcji: {lessonsError.message}</div>;
  }

  const { data: purchase, error: purchaseError } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (purchaseError) {
    return <div className="p-10 text-red-500">Błąd zakupu: {purchaseError.message}</div>;
  }

  if (!purchase) {
    return <div className="p-10 text-red-500">Brak dostępu — brak wpisu w purchases dla user: {user.id}</div>;
  }

  if (!lessons || lessons.length === 0) {
    return <div className="p-10 text-yellow-500">Kurs nie ma jeszcze lekcji.</div>;
  }

  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", user.id);

  const completedIds = new Set(progress?.map((p: { lesson_id: string }) => p.lesson_id) ?? []);
  const firstIncomplete = lessons.find((l: { id: string }) => !completedIds.has(l.id)) ?? lessons[0];

  return (
    <LessonPlayer
      course={course}
      lessons={lessons}
      currentLesson={firstIncomplete}
      completedIds={Array.from(completedIds) as string[]}
      userId={user.id}
    />
  );
}
