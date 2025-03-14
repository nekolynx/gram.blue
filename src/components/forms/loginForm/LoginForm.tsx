"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Input from "@/components/inputs/input/Input";
import Label from "@/components/inputs/label/Label";
import { useRouter } from "next/navigation";
import Button from "@/components/actions/button/Button";
import Image from "next/image";
import { PiSignInBold } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { BiSolidLockAlt } from "react-icons/bi";
import LoadingSpinner from "@/components/status/loadingSpinner/LoadingSpinner";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function BskyLogo(props: Props) {
  const { className, style } = props;
  return (<svg fill="none" viewBox="0 0 64 57" height="inherit" className={className} style={style} ><path fill="#0085ff" d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"></path></svg>)
}

export default function LoginForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (session?.user.bskySession && !formSubmitted) {
      setIsRedirecting(true);
      const id = setTimeout(() => {
        router.push("/dashboard/home");
      }, 1000);

      return () => clearTimeout(id);
    }
  }, [router, session?.user.bskySession, formSubmitted]);

  const handleSignIn = async () => {
    setLoading(true);

    const result = await signIn("bluesky", {
      handle: handle,
      password: password,
      redirect: false,
      callbackUrl: "/dashboard/home",
    });

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }

    if (result?.ok) {
      setFormSubmitted(true);
      router.push("/dashboard/home");
    }
  };

  if (isRedirecting) {
    return (
      <section className="bg-skin-base border border-skin-base shadow-2xl shadow-primary-light/30 max-w-xs rounded-2xl p-5 mt-[50px]">
        <Image
          src="/icon.png"
          alt="gram.blue logo"
          width={70}
          height={70}
          className="mx-auto mb-3"
          style={{marginTop: "-70px"}}
        />
        <h1 className="text-skin-base mb-1 text-center text-xl font-semibold">
          Welcome Back
        </h1>

        <p className="text-skin-secondary mb-3 text-center text-sm font-medium">
          Already logged in, redirecting...
        </p>
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section className="bg-skin-base border border-skin-base max-w-xs rounded-2xl p-5 shadow-2xl shadow-primary-light/30 mt-[50px]">
      <Image
        src="/icon.png"
        alt="gram.blue logo"
        width={70}
        height={70}
        className="mx-auto mb-3"
        style={{marginTop: "-70px"}}
      />
      <h1 className="text-skin-base text-center mb-1 text-xl font-semibold">Welcome</h1>
      <form
        className="mt-5 font-medium"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        <span>
          <Input
            required
            style={{fontSize:"16px"}}
            type="text"
            name="handle"
            icon={<MdAlternateEmail />}
            placeholder="handle.bsky.social"
            value={handle}
            onChange={(e) => {
              setError("");
              setHandle(e.target.value);
            }}
          />
        </span>
        <span className="mt-3 block">
          <Input
            required
            style={{fontSize:"16px"}}
            type="password"
            name="password"
            icon={<BiSolidLockAlt />}
            placeholder="password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
          />
        </span>
        {error && (
          <small className="text-status-danger mt-1 block font-medium">
            {error}
          </small>
        )}
        <p className="text-skin-secondary mb-3 mt-2 text-sm leading-1 px-1 font-medium">
          We recommend using an{" "}
          <Link
            href="https://bsky.app/settings/app-passwords"
            target="_blank"
            className="text-skin-link-base hover:text-skin-link-hover"
          >
            app password
          </Link>.
        </p>
        <Button
          type="submit"
          className={`text-skin-inverted bg-skin-inverted hover:bg-skin-inverted ml-auto mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-3 font-semibold disabled:cursor-not-allowed ${
            loading && "animate-pulse animate-duration-1000"
          }`}
          disabled={loading}
          aria-disabled={loading}
        >
          <PiSignInBold className="text-lg" />
          {loading && "Logging in..."}
          {!loading && "Log in"}
        </Button>
      </form>
      <hr className="border-black/20 my-6 px-3" />
      <p className="my-3 text-center">Don't have an account?</p>
      <Link
        type="button"
        className="text-skin-base bg-skin-muted/70 hover:bg-skin-inverted ml-auto mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-3 font-semibold"
          href="https://bsky.app/"
        >
          <div className="leading-[1.1] py-1">
            <span className="text-center mx-auto">Create an Account</span>
            <span className="justify-center text-sm flex flex-row text-[#0085ff] items-center">on&nbsp;<BskyLogo style={{height: "0.75rem"}}/>&nbsp;Bluesky</span>
          </div>
      </Link>
    </section>
  );
}
