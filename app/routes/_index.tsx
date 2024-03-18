import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const url = `${process.env.API_URL}/message`;
  const res = await fetch(url);
  const message = await res.text();
  return { message, url };
}

export default function Home() {
  const { message, url } = useLoaderData<typeof loader>();
  return (
    <main>
      {message}
      <h6>{url}</h6>
    </main>
  );
}
