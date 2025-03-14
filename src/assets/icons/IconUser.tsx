interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function IconUser(props: Props) {
  const { className, style } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} style={style} fill="currentColor" height="1em" width="1em" >
    <path d="M70,50H30C13.43,50,0,63.43,0,80h0c0,11.05,8.95,20,20,20h60c11.05,0,20-8.95,20-20h0c0-16.57-13.43-30-30-30ZM49,48c13.25,0,24-10.75,24-24S62.25,0,49,0s-24,10.75-24,24,10.75,24,24,24Z"/>
    </svg>
  )
}
