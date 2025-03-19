export function Skeleton() {
    return <div className="bg-[#ddd] h-[33vw] max-h-[12rem]" />
}

export default function Loading() {
    return (
        <div className="grid gap-1 no-scrollbar animate-pulse" style={{gridTemplateColumns: "33% 33% 33%"}}>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
        </div>
    )
}
