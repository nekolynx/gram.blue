export default function ProfileHeaderSkeleton() {
    return (
        <section className="overflow-hidden md:rounded-t-2xl animate-pulse">
            <header className="flex justify-between">
                <div className="p-4 pr-0">
                    <div className="h-[75px] w-[75px] bg-[#ddd] rounded-full border-4 border-transparent object-cover opacity-30 contrast-75 m-1"/>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-y-1 flex-row-reverse w-full p-4 pl-0">
                        <span className="flex flex-col font-bold text-lg items-center min-w-[53pt]">
                            <span className="bg-[#ddd] h-[1rem] w-[66%] rounded-full inline-block mt-[4pt] mb-[7pt]"/>
                            <span className="bg-[#ddd] h-[0.75rem] w-[88%] rounded-full inline-block"/>
                        </span>
                        <span className="flex flex-col font-bold text-lg items-center min-w-[53pt]">
                            <span className="bg-[#ddd] h-[1rem] w-[66%] rounded-full inline-block mt-[4pt] mb-[7pt]"/>
                            <span className="bg-[#ddd] h-[0.75rem] w-[90%] rounded-full inline-block"/>
                        </span>
                        <span className="flex flex-col font-bold text-lg items-center min-w-[53pt]">
                            <span className="bg-[#ddd] h-[1rem] w-[66%] rounded-full inline-block mt-[4pt] mb-[7pt]"/>
                            <span className="bg-[#ddd] h-[0.75rem] w-[70%] rounded-full inline-block"/>
                        </span>
                    </div>
                <div className="w-full pr-4 flex gap-1 justify-end">
                    <div className="flex items-center justify-center gap-1 disabled:cursor-not-allowed w-full rounded-full px-4 py-2 text-sm font-medium bg-[#ddd] text-skin-inverted hover:brightness-95">&nbsp;</div>
                    <div className="flex items-center justify-center gap-1 disabled:cursor-not-allowed text-skin-secondary bg-skin-tertiary flex items-center justify-center gap-1 rounded-full p-2 text-sm font-medium hover:brightness-95 disabled:cursor-not-allowed"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-skin-icon-base text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></div>
                </div>
              </div>
            </header>
            <div className="mx-3 mb-3 mt-1">
                <div className="flex flex-wrap items-center gap-x-2">
                    <h1>
                    <span className="w-[12rem] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                    </h1>
                </div>
                <h2>
                <span className="w-[10rem] h-[1rem] mt-[4pt] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                </h2>

                <div className="mt-3 ">
                    <span className="w-[90%] h-[1rem] my-[1pt] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                    <span className="w-[10%] h-[1rem] my-[1pt] bg-[#ddd] rounded-xl inline-block mr-[4pt]">&nbsp;</span>
                    <span className="w-[60%] h-[1rem] my-[1pt] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                    <span className="w-[40%] h-[1rem] my-[1pt] bg-[#ddd] rounded-xl inline-block mr-[4pt]">&nbsp;</span>
                    <span className="w-[30%] h-[1rem] my-[1pt] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                </div>

                <div className="my-2">
                    <div className="flex items-center gap-1">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-skin-tertiary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
                            <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"/>
                        </svg>
                        <span className="w-[12rem] h-[1rem] bg-[#ddd] rounded-xl inline-block">&nbsp;</span>
                    </div>
                </div>

              
            </div>

            <div className="flex flex-nowrap overflow-x-auto border border-x-0">
                <div className="border-b-3 inline-block shrink-0 p-3 font-semibold first:ml-3 last:mr-3 text-skin-secondary border-transparent">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM11 13H4V19H11V13ZM20 13H13V19H20V13ZM11 5H4V11H11V5ZM20 5H13V11H20V5Z"/>
                    </svg>
                </div>
                
                <div className="border-b-3 inline-block shrink-0 p-3 font-semibold first:ml-3 last:mr-3 border-primary text-skin-link-base">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11V5H5V11H19ZM19 13H5V19H19V13ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"/>
                    </svg>
                </div>
                
                <div className="border-b-3 inline-block shrink-0 p-3 font-semibold first:ml-3 last:mr-3 text-skin-secondary border-transparent">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z"/>
                        <path d="M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z"/>
                    </svg>
                </div>
                
                <div className="border-b-3 inline-block shrink-0 p-3 font-semibold first:ml-3 last:mr-3 text-skin-secondary border-transparent">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z"/>
                    </svg>
                </div>
            </div>

          </section>
    )
}