import { AiFillMeh } from "react-icons/ai";

interface Props {
    width: number | undefined;
    height: number | undefined;
  }
  
  export default function CensoredEmbed(props: Props) {
    const { width, height } = props;
    return(
        <div className="relative bg-[#ddd] censored">
            <canvas width={width} height={height} className="w-full border border-x-0 invisible"/>
            <div className="w-full h-full absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"><AiFillMeh size="10rem" color="#ccc"/></div>
        </div>
    )

  }