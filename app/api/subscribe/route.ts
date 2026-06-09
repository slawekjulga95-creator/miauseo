import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Nieprawidłowy adres e-mail." }, { status: 400 });
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      groups: [process.env.MAILERLITE_GROUP_ID],
    }),
  });

  const body = await res.json().catch(() => ({}));
  console.log("[subscribe] status:", res.status, "body:", JSON.stringify(body));

  if (res.status === 200 || res.status === 201 || res.status === 409) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Coś poszło nie tak. Spróbuj ponownie." }, { status: 500 });
}
