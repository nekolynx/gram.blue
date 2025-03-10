export default function EndOfFeed() {
  return (
    <section className="border-b-skin-base md:border-x-skin-base flex flex-1 justify-center border-b p-3 md:rounded-b-2xl md:border-x relative overflow-hidden" style={{minHeight: "32px"}}>
      <span className="text-xs bg-skin-base px-2 py-1 rounded-full">Nothing else here...</span>
      <img src="/images/squiggle-x3.png" width="32px" className="absolute" style={{bottom: "-3px",right: "calc(50% - 96px)"}}/>
    </section>
  );
}
