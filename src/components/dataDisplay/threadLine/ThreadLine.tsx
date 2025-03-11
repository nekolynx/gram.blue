interface Props {
  className?: string;
}

export default function Threadline(props: Props) {
  const { className } = props;
  return (
    <div
      className={`border-skin-base absolute top-6 z-10 h-full border ${className}`}
      style={{left: "1.25rem"}}
    />
  );
}
