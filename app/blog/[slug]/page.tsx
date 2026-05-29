import { redirect } from "next/navigation";
import { getPublishedPosts } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
