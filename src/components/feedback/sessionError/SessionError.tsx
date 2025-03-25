import Link from "next/link";
import { TbPlugConnectedX } from "react-icons/tb";
import { IoRefreshCircle } from "react-icons/io5";
import { PiSmileyXEyes } from "react-icons/pi";

interface Props{
    message: string;
}

export default function SessionError(props: Props) {
  const { message } = props;

  return (
    <div className="m-auto my-10 max-w-[20rem] shadow-xl shadow-status-danger/15 text-status-danger bg-skin-base flex flex-col items-center rounded-2xl px-7 py-8 font-medium text-center">
        <TbPlugConnectedX size={"2rem"}/>
        <PiSmileyXEyes size={"3rem"}/>
        <strong className="text-lg mb-0 mt-3 text-skin-base">Session Error</strong>
        <span className="text-skin-base">{message}</span>
        <Link href="../login" className="hover:cursor rounded-full bg-black/25 text-white px-2 py-2 pr-4 mt-6 flex items-center shadow-md shadow-black/10 font-bold"><IoRefreshCircle size="20pt"/>&nbsp;Reload</Link>
    </div>
  );
}