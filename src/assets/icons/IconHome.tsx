interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function IconHome(props: Props) {
  const { className, style } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 100.03" className={className} style={style} fill="currentColor" height="1em" width="1em" >
    <path d="M60.3,18.53c-1.82-1.65-4.77-1.65-6.59,0L15.83,52.84c-3.5,3.17-5.46,7.47-5.46,11.95v31.02c0,2.33,2.09,4.22,4.66,4.22h26.97v-25c0-8.28,6.72-15,15-15s15,6.72,15,15v25h26.97c2.58,0,4.66-1.89,4.66-4.22v-31.02c0-4.48-1.97-8.78-5.46-11.95L60.3,18.53ZM111.7,42.58L70.45,5.21c-7.67-6.95-19.23-6.95-26.9,0L2.3,42.58c-2.87,2.6-3.08,7.02-.49,9.89,2.6,2.87,7.02,3.08,9.89.49L52.95,15.58c2.31-2.09,5.79-2.09,8.1,0l41.25,37.37c1.34,1.21,3.02,1.81,4.7,1.81,1.91,0,3.81-.78,5.19-2.3,2.6-2.87,2.38-7.29-.49-9.89Z"/>
    </svg>
  )
}
