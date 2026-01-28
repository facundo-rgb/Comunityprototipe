import svgPaths from "./svg-i3sbnjcs3w";

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p1735d3f0} fill="var(--fill-0, #ADB6BA)" id="icon" stroke="var(--stroke-0, #ADB6BA)" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative shrink-0" data-name="Search Bar">
      <Search />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#adb6ba] text-[16px] tracking-[0.1px]">Buscar canales, challenges, eventos, personas...</p>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Search Container">
      <SearchBar />
    </div>
  );
}

export default function SearchTextField() {
  return (
    <div className="bg-[#142129] content-stretch flex flex-col items-start relative rounded-[8px] size-full" data-name="Search-text-field">
      <SearchContainer />
    </div>
  );
}