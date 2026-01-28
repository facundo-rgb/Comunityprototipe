import svgPaths from "./svg-qm2i8hi8l7";

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p1735d3f0} id="icon" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

export default function IconButton() {
  return (
    <div className="bg-[#1c303b] relative rounded-[96px] size-full" data-name="Icon Button">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Search />
      </div>
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[96px]" />
    </div>
  );
}