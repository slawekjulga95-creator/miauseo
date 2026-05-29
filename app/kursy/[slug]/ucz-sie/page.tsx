import { redirect, notFound } from "next/navigation";
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
    .select("*, lessons(*)")
    .eq("slug", slug)
    .single();

  if (!course) notFound();

  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .or(`course_id.eq.${course.id},all_access.eq.true`)
    .maybeSingle();

  if (!purchase) redirect(`/kursy/${slug}`);

  const lessons = (course.lessons ?? []).sort((a: { order: number }, b: { order: number }) => a.order - b.order);
  if (lessons.length === 0) notFound();

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
