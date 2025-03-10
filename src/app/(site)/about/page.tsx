/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto mt-0 p-5 md:mt-16">
      <div className="absolute top-0 left-0 right-0 bg-primary homepageBanner" style={{height: "280px", zIndex: "-1"}}></div>
      <header className="mx-auto flex max-w-xl items-center justify-between animate-fade">
        <div className="flex items-center gap-3 p-3">
          <Image src="/icon.png" alt="gram.blue icon" width={48} height={48}/>
          <Image
            src="/gramblueText.svg"
            alt="gram.blue"
            width={150}
            height={28}
          />
        </div>{" "}
        <Link
          href="/"
          className="font-medium homeBannerButton"
        >
          Home
        </Link>
      </header>
      <section id="homeAbout" className="mx-auto mt-16 max-w-xl p-6 rounded-xl">
        <h1 className="text-skin-base mb-6 max-w-lg text-4xl font-medium">
          About
        </h1>
          <p className="text-skin-base mb-3">
          <strong>gram.blue</strong> is a web client for <Link href="https://blueskyweb.xyz/" className="underline underline-offset-2">Bluesky</Link> designed to look like pre-2016 Instagram. 
          It has no affiliation with Meta and its products and does not use their database and servers.
          </p>
          <p className="text-skin-base mb-3">
          This project is forked from{" "}
          <Link
            href="https://useouranos.app/"
            className="underline underline-offset-2"
          >Ouranos</Link>{" "}
          (source:{" "}
          <Link
            href="https://github.com/pdelfan/ouranos"
            className="underline underline-offset-2"
          >GitHub</Link>
          ). Basically, <Link
            href="https://pouriade.com"
            className="underline underline-offset-2"
          >
            Pouria
          </Link>{" "}
          did all the hard work and I just messed around with it.
          </p>
        <p className="text-skin-base">
          This app is built using{" "}
          <Link
            href="https://nextjs.org/"
            className="underline underline-offset-2"
          >
            Next.js
          </Link>
          . Similar to the official Bluesky app, it uses the{" "}
          <Link
            href="https://blueskyweb.xyz/"
            className="underline underline-offset-2"
          >
            AT Protocol
          </Link>
          , a decentralized networking technology for social media. This is
          similar to Twitter apps such as Twitterrific or Tweetbot that used
          Twitter's API in the past.
        </p>

        <h2 className="text-skin-base mb-6 mt-12 text-2xl font-medium">
          Frequently Asked Questions
        </h2>

        <h3 className="text-skin-base mb-1 text-lg font-semibold">
          Is anything stored on your servers?
        </h3>
        <p className="text-skin-base">
          Nothing from Bluesky is stored, every request goes through the
          official Bluesky servers. When you log in, your session is stored
          using cookies on your web browser. Any extra feature that exists (or
          will be added) stores information{" "}
          <Link
            href="https://javascript.info/localstorage"
            className="underline underline-offset-2"
          >
            locally
          </Link>{" "}
          on your web browser.
        </p>

        <p className="text-skin-base mt-3">
          Note: When you visit the site,{" "}
          <Link
            href="https://vercel.com/analytics"
            className="underline underline-offset-2"
          >
            Vercel Analytics
          </Link>{" "}
          is used to gather anonymized information to help me get a general idea
          and provide better support. These include number of visitors, top
          visited pages, countries, operating systems, and web browsers. No
          cookies and nothing personal is collected that can be linked back to
          you. If you are using an ad blocker, tracking is likely disabled.
        </p>

        <h3 className="text-skin-base mb-1 mt-6 text-lg font-semibold">
          Why do you recommend using an app password to log in?
        </h3>
        <p className="text-skin-base">
          App passwords allow you to log in and use the app, but restrict
          third-party clients (ex. gram.blue, Ouranos) from certain functionalities such as
          account deletion or generating additional app passwords.
        </p>
        <h3 className="text-skin-base mb-1 mt-6 text-lg font-semibold">
          How can I provide feedback?
        </h3>
        <p className="text-skin-base">
          Contact me on <Link href="https://bsky.app/profile/phone.zomgclan.com" className="underline underline-offset-2">BlueSky</Link> I guess ¯\_(ツ)_/¯. 
          My repository is kind of a mess; I don't recommend looking at it, but if you must you can find it on <Link href="https://github.com/nekolynx/gram.blue" className="underline underline-offset-2">GitHub</Link>.
        </p>

        <h3 className="text-skin-base mb-1 mt-6 text-lg font-semibold">
          Can I support the project?
        </h3>
        <p className="text-skin-base mt-3">
          I don't plan on profiting off this little hobby project, especially since I'm remixing someone else's hard work. Go support my other projects like <Link href="https://store.steampowered.com/app/2076950/Waifu_Klondike_Solitaire/" className="underline underline-offset-2">Waifu Klondike Solitaire</Link>.
        </p>
      </section>
      <footer className="text-skin-tertiary mt-16 text-center text-sm font-medium">
        Built off of OURANOS · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
