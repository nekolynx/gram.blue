interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function IconExplore(props: Props) {
  const { className, style } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} style={style} fill="currentColor" height="1em" width="1em" >
    <path d="M90.07,80.03l-14.64-14.64c4.77-6.76,7.57-14.99,7.57-23.89C83,18.58,64.42,0,41.5,0S0,18.58,0,41.5s18.58,41.5,41.5,41.5c6.76,0,13.13-1.62,18.77-4.49l15.66,15.66c1.95,1.95,4.51,2.93,7.07,2.93s5.12-.98,7.07-2.93c3.91-3.91,3.9-10.24,0-14.14ZM20,41.5c0-11.86,9.64-21.5,21.5-21.5s21.5,9.64,21.5,21.5-9.64,21.5-21.5,21.5-21.5-9.64-21.5-21.5Z"/>
    </svg>
  )
}
