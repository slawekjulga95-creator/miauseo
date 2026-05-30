import { redirect } from "next/navigation";
import { terms } from "../terms";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return terms.map(t => ({ slug: t.slug }));
}

export default async function TermRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
