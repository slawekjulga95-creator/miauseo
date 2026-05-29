import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

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

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", course?.id ?? "")
    .order("order");

  const { data: purchase } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Debug</h1>
      <p>User: {user.email}</p>
      <p>Slug: {slug}</p>
      <p>Course: {course ? course.title : `BRAK (${courseError?.message})`}</p>
      <p>Lekcje: {lessons?.length ?? 0}</p>
      <p>Purchase: {purchase ? "TAK" : "BRAK"}</p>
    </div>
  );
}
