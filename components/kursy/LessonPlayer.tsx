"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Lesson = { id: string; title: string; order: number; video_url: string; duration_min: number; is_free_preview: boolean };
type Course = { id: string; title: string; slug: string };

type Props = {
  course: Course;
  lessons: Lesson[];
  currentLesson: Lesson;
  completedIds: string[];
  userId: string;
};

export default function LessonPlayer({ course, lessons, currentLesson, completedIds, userId }: Props) {
  const supabase = createClient();
  const [active, setActive] = useState<Lesson>(currentLesson);
  const [completed, setCompleted] = useState<Set<string>>(new Set(completedIds));

  const markComplete = async (lessonId: string) => {
    if (completed.has(lessonId)) return;
    await supabase.from("lesson_progress").upsert({ user_id: userId, lesson_id: lessonId });
    setCompleted((prev) => new Set([...prev, lessonId]));
  };

  const progress = Math.round((completed.size / lessons.length) * 100);

  return (
    <div className="fixed inset-0 z-[100] bg-ink text-white flex flex-col overflow-hidden">

      {/* Top bar */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link href="/konto" className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Moje kursy
        </Link>
        <h1 className="text-sm font-semibold text-white/80 hidden sm:block truncate max-w-xs">{course.title}</h1>
        <div className="flex items-center gap-3">
          <div className="text-xs text-white/50">{completed.size}/{lessons.length} lekcji</div>
          <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-brand rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">

        {/* Video area */}
        <main className="flex-1 flex flex-col">
          <div className="aspect-video bg-black w-full">
            {active.video_url ? (
              <iframe
                src={active.video_url}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay; fullscreen"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                Wideo wkrótce dostępne
              </div>
            )}
          </div>

          <div className="p-6 lg:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">
                  Lekcja {active.order}
                </p>
                <h2 className="text-xl font-bold text-white">{active.title}</h2>
                {active.duration_min > 0 && (
                  <p className="text-sm text-white/50 mt-1">{active.duration_min} min</p>
                )}
              </div>
              <button
                onClick={() => markComplete(active.id)}
                className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-colors ${
                  completed.has(active.id)
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-brand hover:bg-brand-dark text-white"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {completed.has(active.id) ? "Ukończona" : "Oznacz jako ukończoną"}
              </button>
            </div>
          </div>
        </main>

        {/* Sidebar — lista lekcji */}
        <aside className="lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <p className="text-xs font-bold tracking-widest uppercase text-white/40">Program kursu</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActive(lesson)}
                className={`w-full text-left px-5 py-4 border-b border-white/5 flex items-start gap-3 transition-colors hover:bg-white/5 ${
                  active.id === lesson.id ? "bg-white/10" : ""
                }`}
              >
                <div className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
                  completed.has(lesson.id)
                    ? "bg-green-500 border-green-500"
                    : active.id === lesson.id
                    ? "border-brand"
                    : "border-white/20"
                }`}>
                  {completed.has(lesson.id) && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold leading-snug ${active.id === lesson.id ? "text-white" : "text-white/70"}`}>
                    {lesson.order}. {lesson.title}
                  </p>
                  {lesson.duration_min > 0 && (
                    <p className="text-xs text-white/30 mt-0.5">{lesson.duration_min} min</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}
