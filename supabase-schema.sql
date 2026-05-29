-- Kursy
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  thumbnail text,
  price_pln integer not null default 0,
  lesson_count integer default 0,
  is_published boolean default false,
  created_at timestamptz default now()
);

-- Lekcje
create table lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade not null,
  title text not null,
  "order" integer not null default 1,
  video_url text,
  duration_min integer default 0,
  is_free_preview boolean default false,
  created_at timestamptz default now()
);

-- Zakupy
create table purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  course_id uuid references courses(id) on delete set null,
  all_access boolean default false,
  stripe_payment_id text,
  created_at timestamptz default now()
);

-- Postęp lekcji
create table lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  lesson_id uuid references lessons(id) on delete cascade not null,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- RLS (Row Level Security)
alter table courses enable row level security;
alter table lessons enable row level security;
alter table purchases enable row level security;
alter table lesson_progress enable row level security;

-- Kursy i lekcje widoczne dla wszystkich (publiczne)
create policy "Kursy publiczne" on courses for select using (is_published = true);
create policy "Lekcje publiczne" on lessons for select using (true);

-- Zakupy — tylko swoje
create policy "Własne zakupy" on purchases for select using (auth.uid() = user_id);
create policy "Dodaj zakup" on purchases for insert with check (auth.uid() = user_id);

-- Postęp — tylko swój
create policy "Własny postęp" on lesson_progress for select using (auth.uid() = user_id);
create policy "Dodaj postęp" on lesson_progress for insert with check (auth.uid() = user_id);
create policy "Upsert postęp" on lesson_progress for update using (auth.uid() = user_id);
