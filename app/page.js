import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen flex-col">
      <p>This is the homepage</p>
      <Link href="/dashboard" className="text-blue-400 underline">
        Go to dashboard
      </Link>
    </main>
  );
}
