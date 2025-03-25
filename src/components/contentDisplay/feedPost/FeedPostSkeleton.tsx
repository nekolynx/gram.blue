function PlaceholderIcons() {
  return (
    <>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"/>
        </svg>
      </span>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3H14C18.4183 3 22 6.58172 22 11C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3ZM12 17H14C17.3137 17 20 14.3137 20 11C20 7.68629 17.3137 5 14 5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17Z"/>
        </svg>
      </span>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3V7zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3v6z"/>
        </svg>
      </span>
    </>
  )
}

export function Skeleton() {
  return (
    <div className="flex flex-col animate-pulse mt-1 mb-4">
      <div className="p-2 gap-2 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#ddd] h-[30px] w-[30px] rounded-full" />
          <div className="bg-[#ddd] h-[14pt] w-[148pt] rounded" />
        </div>
        <div className="bg-[#ddd] h-5 w-[30px] rounded" />
      </div>
      <div className="bg-[#ddd] w-full min-h-[80svw] md:min-h-[28.8rem] h-full"/>
      <div className="py-3 mx-3 border border-t-0 border-x-0 border-skin-base text-[2em]">
        <div className="flex gap-2 items-center">
          <PlaceholderIcons/>
          <span className="grow"/>
          <span className="flex items-center justify-center gap-1 text-[#ddd] ">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex grow flex-col">
          <div className="flex gap-2">
            <div className="bg-[#ddd] mt-2 h-4 w-2/5 rounded" />
          </div>
          <div className="bg-[#ddd] mt-2 h-4 w-[90%] rounded" />
          <div className="bg-[#ddd] mt-2 h-4 w-[95%] rounded" />
          <div className="bg-[#ddd] mt-2 h-4 w-[88%] rounded" />
          <div className="bg-[#ddd] mt-2 h-4 w-[185px] rounded" />
        </div>
      </div>
    </div>
  );
}

export default function FeedPostSkeleton() {
  return (
    <div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
