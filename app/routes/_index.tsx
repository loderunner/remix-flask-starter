import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const res = await fetch(`${process.env.API_URL}/message`);
  const message = await res.text();
  return { message };
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>();
  return <main>{message}</main>;
}
