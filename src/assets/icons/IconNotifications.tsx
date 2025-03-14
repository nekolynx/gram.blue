interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function IconNotifications(props: Props) {
  const { className, style } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 95.96" className={className} style={style} fill="currentColor" height="1em" width="1em" >
    <path d="M57.13,79.59c24.24-2.77,42.87-19.44,42.87-39.59C100,17.91,77.61,0,50,0S0,17.91,0,40c0,35.64,38.68,52.65,60.58,55.93,2.4.36,3.86-2.53,2.15-4.25-3-3.01-5.39-5.67-7.27-8.1-1.18-1.53-.24-3.78,1.68-4ZM50.19,62.69l-20.35-20.35c-5.12-5.12-5.12-13.41,0-18.53,5.12-5.12,13.41-5.12,18.53,0l1.82,1.82,1.44-1.44c5.12-5.12,13.42-5.12,18.53,0,5.12,5.12,5.12,13.41,0,18.53l-19.98,19.98Z"/>
    </svg>
  )
}
