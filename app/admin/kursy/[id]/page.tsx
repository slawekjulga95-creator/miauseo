"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Course = { id: string; title: string; slug: string; description: string; price_pln: number; thumbnail: string; is_published: boolean };
type Lesson = { id: string; title: string; order: number; video_url: string; duration_min: number };

export default function EditCoursePage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();
  const id = params.id as string;

  const [course, setCourse] = useState<Course | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [newLesson, setNewLesson] = useState({ title: "", video_url: "", duration_min: "" });
  const [addingLesson, setAddingLesson] = useState(false);

  const input = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  useEffect(() => {
    const load = async () => {
      const { data: c } = await supabase.from("courses").select("*").eq("id", id).single();
      const { data: l } = await supabase.from("lessons").select("*").eq("course_id", id).order("order");
      if (c) setCourse(c);
      if (l) setLessons(l);
    };
    load();
  }, [id]);

  const saveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setLoading(true);
    await supabase.from("courses").update({
      title: course.title, slug: course.slug, description: course.description,
      price_pln: course.price_pln, thumbnail: course.thumbnail, is_published: course.is_published,
    }).eq("id", id);
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addLesson = async () => {
    if (!newLesson.title) return;
    setAddingLesson(true);
    const { data } = await supabase.from("lessons").insert({
      course_id: id,
      title: newLesson.title,
      video_url: newLesson.video_url || null,
      duration_min: parseInt(newLesson.duration_min) || 0,
      order: lessons.length + 1,
    }).select().single();
    if (data) setLessons([...lessons, data]);
    setNewLesson({ title: "", video_url: "", duration_min: "" });
    setAddingLesson(false);
  };

  const deleteLesson = async (lessonId: string) => {
    await supabase.from("lessons").delete().eq("id", lessonId);
    setLessons(lessons.filter((l) => l.id !== lessonId));
  };

  if (!course) return <div className="p-8 text-zinc-400">Ładowanie...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/kursy" className="text-zinc-400 hover:text-ink transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </Link>
        <h1 className="text-2xl font-bold text-ink">Edycja kursu</h1>
      </div>

      {/* Dane kursu */}
      <form onSubmit={saveCourse} className="bg-white rounded-2xl border border-border p-8 space-y-5 mb-8">
        <h2 className="font-bold text-ink text-lg">Dane kursu</h2>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Tytuł *</label>
          <input required value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} className={input} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Slug</label>
            <input value={course.slug} onChange={(e) => setCourse({ ...course, slug: e.target.value })} className={input} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Cena (zł)</label>
            <input type="number" value={course.price_pln} onChange={(e) => setCourse({ ...course, price_pln: parseInt(e.target.value) })} className={input} />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Opis</label>
          <textarea rows={3} value={course.description || ""} onChange={(e) => setCourse({ ...course, description: e.target.value })} className={`${input} resize-none`} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Miniatura (URL)</label>
          <input value={course.thumbnail || ""} onChange={(e) => setCourse({ ...course, thumbnail: e.target.value })} className={input} />
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={course.is_published} onChange={(e) => setCourse({ ...course, is_published: e.target.checked })} className="accent-brand w-4 h-4" />
          <span className="text-sm font-semibold text-ink">Opublikowany</span>
        </label>
        <button type="submit" disabled={loading}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-colors ${saved ? "bg-green-500 text-white" : "bg-brand hover:bg-brand-dark text-white"} disabled:opacity-60`}>
          {saved ? "Zapisano ✓" : loading ? "Zapisywanie..." : "Zapisz zmiany"}
        </button>
      </form>

      {/* Lekcje */}
      <div className="bg-white rounded-2xl border border-border p-8">
        <h2 className="font-bold text-ink text-lg mb-6">Lekcje ({lessons.length})</h2>

        <div className="space-y-3 mb-6">
          {lessons.map((lesson, i) => (
            <div key={lesson.id} className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-border">
              <span className="text-xs font-bold text-zinc-400 w-6">{i + 1}.</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink truncate">{lesson.title}</p>
                {lesson.video_url && <p className="text-xs text-zinc-400 truncate">{lesson.video_url}</p>}
              </div>
              {lesson.duration_min > 0 && <span className="text-xs text-zinc-400">{lesson.duration_min} min</span>}
              <button onClick={() => deleteLesson(lesson.id)} className="text-red-400 hover:text-red-600 transition-colors text-xs font-semibold">Usuń</button>
            </div>
          ))}
        </div>

        {/* Dodaj lekcję */}
        <div className="border-t border-border pt-6">
          <p className="text-sm font-bold text-ink mb-4">Dodaj lekcję</p>
          <div className="space-y-3">
            <input placeholder="Tytuł lekcji *" value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })} className={input} />
            <input placeholder="URL wideo (np. https://player.vimeo.com/video/...)" value={newLesson.video_url}
              onChange={(e) => setNewLesson({ ...newLesson, video_url: e.target.value })} className={input} />
            <input type="number" placeholder="Czas trwania (minuty)" value={newLesson.duration_min}
              onChange={(e) => setNewLesson({ ...newLesson, duration_min: e.target.value })} className={input} />
            <button onClick={addLesson} disabled={addingLesson || !newLesson.title}
              className="bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors disabled:opacity-60">
              {addingLesson ? "Dodawanie..." : "+ Dodaj lekcję"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
