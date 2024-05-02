"use client";
import ExampleClient from "@/components/client";
import ExampleServer from "@/components/example-server";

export default function Home() {
  console.log("Where do I render?");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello JI</h2>

      <ExampleClient />
      <ExampleServer />
    </main>
  );
}
