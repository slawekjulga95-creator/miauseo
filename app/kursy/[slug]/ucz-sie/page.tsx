import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LessonPlayer from "@/components/kursy/LessonPlayer";

type Props = { params: Promise<{ slug: string }> };

export default async function UczSiePage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/logowanie?next=/kursy/${slug}/ucz-sie`);

  const { data: course } = await supabase
    .from("courses")
    .select("id, title, slug")
    .eq("slug", slug)
    .single();

  if (!course) return <div className="p-10">Nie znaleziono kursu.</div>;

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course.id)
    .order("order");

  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!purchase) redirect(`/kursy/${slug}`);

  if (!lessons || lessons.length === 0) {
    return <div className="p-10">Kurs nie ma jeszcze lekcji.</div>;
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
