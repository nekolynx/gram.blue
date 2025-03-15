function PlaceholderIcons() {
  return (
    <>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"/>
        </svg>
      </span>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"/>
        </svg>
      </span>
      <span className="flex items-center justify-center gap-1 font-medium text-[#ddd]">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
      <div className="bg-[#ddd] w-full h-[35vh]"/>
      <div className="py-3 mx-3 border border-t-0 border-x-0 border-skin-base text-[2em]">
        <div className="flex gap-2 items-center">
          <PlaceholderIcons/>
          <span className="grow"/>
          <span className="flex items-center justify-center gap-1 text-[#ddd] ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
