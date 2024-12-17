import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen ">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <Link href="/onscroll-typography">Onscroll Typography</Link>
          <Link href="/introductory">GSAP ScrollTrigger</Link>
          <Link href="/infinite-scroll">Horizontal Infinite Scroll</Link>
          <Link href="/accordion">Accordion</Link>
        </div>
      </div>
    </section>
  );
}
