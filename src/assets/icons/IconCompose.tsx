interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function IconCompose(props: Props) {
  const { className, style } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} style={style} fill="currentColor" height="1em" width="1em" >
    <path fill="currentColor" d="M81.75,0H18.25C8.17,0,0,8.17,0,18.25v63.49C0,91.83,8.17,100,18.25,100h63.49c10.08,0,18.25-8.17,18.25-18.25V18.25c0-10.08-8.17-18.25-18.25-18.25ZM50,83c-18.23,0-33-14.77-33-33S31.77,17,50,17s33,14.77,33,33-14.77,33-33,33ZM84,23c-3.87,0-7-3.13-7-7s3.13-7,7-7,7,3.13,7,7-3.13,7-7,7ZM50,25c-13.81,0-25,11.19-25,25s11.19,25,25,25,25-11.19,25-25-11.19-25-25-25Z"/>
    </svg>
  )
}
