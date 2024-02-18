import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
      <h1 className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-bold text-3xl text-center leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] header">
        <span>Read,</span> <span>Annotate,</span> <span>Transform.</span>
      </h1>
      <p className="max-w-[750px] text-center text-lg pb-6 text-muted-foreground sm:text-xl p-slide-in hero-message">
        Discover a new way to experience reading with Tome Weaver. Join a
        community of passionate readers, share your favorite books, and unlock a
        world of literary adventures.
      </p>
      <Button asChild>
        <Link href="/signup">Get started</Link>
      </Button>
    </section>
  );
}
