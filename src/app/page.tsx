import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto mt-0 p-5 md:mt-16">
      <section className="flex flex-wrap flex-row flex-wrap max-w-3xl mx-auto">
      <div className="md:max-w-md mx-auto">
        <header className="flex items-center justify-between">
          <div className="absolute top-0 left-0 right-0 bg-primary homepageBanner" style={{height: "280px", zIndex: "-1"}}></div>
          <div className="flex items-center gap-3 p-3 animate-fade">
            <Image src="/icon.png" alt="gram.blue icon" width={48} height={48}/>
            <Image
              src="/gramblueText.svg"
              alt="gram.blue"
              width={140}
              height={28}
              className="max-[314px]:hidden"
            />
          </div>
          <Link
            href="/about"
            className="font-medium homeBannerButton"
          >
            About
          </Link>
        </header>
        <section id="homeAbout" className="mt-16 p-6 rounded-xl">
          <h1 className="animate-fade animate-delay-150 text-primary max-w-lg text-2xl font-semibold leading-1.1">
            Browse Bluesky with your nostalgia goggles on!
          </h1>
          
          <ul className="animate-fade animate-delay-165 text-skin-secondary mt-5 text-lg font-light">
            <li>Available in 2 styles (2012 & 2015)</li>
            <li>Enhanced features</li>
            <li>Open-source</li>
          </ul>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="https://bsky.app"
              target="_blank"
              className="text-skin-base bg-skin-muted/70 hover:bg-skin-muted rounded-full px-5 py-3 font-medium animate-fade-down"
            >
              Sign up on Bluesky
            </Link>
            <Link
              href="/login"
              className="text-skin-inverted bg-skin-inverted hover:bg-skin-inverted-muted rounded-full px-5 py-3 font-medium animate-fade-down"
            >
              Log in
            </Link>
          </div>
        </section>
        </div>
        <div className="animate-fade-up animate-delay-300 mx-auto mt-8 max-w-fit min-[808px]:order-first">
          <Image
            src="/images/iPhone-5c-side.png"
            alt="iPhone 5c"
            width={320}
            height={655}
            priority
          />
        </div>
      </section>
      <footer className="animate-fade-up animate-delay-500 text-skin-tertiary mt-16 text-center text-sm font-medium">
        Built off of OURANOS · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
