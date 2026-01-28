import svgPaths from "./svg-xl3odapd6j";
import imgRectangle12 from "figma:asset/49bafa788857e03c1c4a804ca22243ab36908418.png";
import imgRectangle13 from "figma:asset/59a3c910b032c48f6e4638809aabe3bd528b077c.png";
import imgImage from "figma:asset/d808d7dac9f82041d8f2b6629bf156893dd04de1.png";
import imgImage1 from "figma:asset/03e15512fdf9b9b0966f370308948b9c78b7f664.png";
import imgImage2 from "figma:asset/5827136dfd8901965edd52014283cf3e9872221b.png";
import imgImage3 from "figma:asset/9266c907525f9ffe4144f28d6da4de597ed79867.png";
import imgImage4 from "figma:asset/392e9d9241aa62661f263ffab539522e97037492.png";
import imgImage5 from "figma:asset/9c309ced70bd1dd456d696b31344ee32b4834ac2.png";
import imgImage6 from "figma:asset/03a8d9b98d0f357116da4eda6a0e6db96ea785f2.png";
import imgImage7 from "figma:asset/b65742754402630cf47177b649d48fef82cfaae4.png";
import imgImage8 from "figma:asset/13431357d1165da766da7aa7b26000f250cd4814.png";
import imgImage9 from "figma:asset/8d68028ba9275468111cc71b6f1d2741144dff4a.png";
import imgImage10 from "figma:asset/677315403e6d4bb8a2fb22428729f9de55bfc3f0.png";
import imgImage11 from "figma:asset/5f9a64269371f744e621d4bafb7e926153d07722.png";

function NavigationItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Navigation Item">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16.667px] text-center text-white">🍌</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#a7c1cd] text-[20px]">Nano banana</p>
    </div>
  );
}

function NavigationItem1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center not-italic relative shrink-0" data-name="Navigation Item">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] relative shrink-0 text-[#a7c1cd] text-[20px]">Subir</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] relative shrink-0 text-[20px] text-white">Mi galería</p>
      <NavigationItem />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p29ddc400} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Icon Button">
      <Close />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Navigation">
      <NavigationItem1 />
      <IconButton />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 148, 148, 1)", "--stroke-0": "rgba(36, 63, 76, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="check">
            <path d={svgPaths.p6337c00} fill="var(--fill-0, #0C9494)" />
            <path d={svgPaths.p6337c00} stroke="var(--stroke-0, #243F4C)" strokeWidth="0.833333" />
            <path d={svgPaths.p3d2fc800} fill="var(--fill-0, white)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[152px] relative shrink-0 w-[270px]" data-name="Image">
      <div className="absolute h-[152px] left-0 rounded-[8px] top-0 w-[270px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle12} />
      </div>
      <Check />
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(12, 148, 148, 1)", "--stroke-0": "rgba(36, 63, 76, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="check">
            <path d={svgPaths.p6337c00} fill="var(--fill-0, #0C9494)" />
            <path d={svgPaths.p6337c00} stroke="var(--stroke-0, #243F4C)" strokeWidth="0.833333" />
            <path d={svgPaths.p3d2fc800} fill="var(--fill-0, white)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[152px] relative shrink-0 w-[270px]" data-name="Image">
      <div className="absolute h-[152px] left-0 rounded-[8px] top-0 w-[270px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle13} />
      </div>
      <Check1 />
    </div>
  );
}

function GalleryRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery Row">
      <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
        <Image />
        <Image1 />
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage} />
          </div>
        </div>
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryRow1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery Row">
      <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage2} />
          </div>
        </div>
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage3} />
          </div>
        </div>
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage4} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage5} />
          </div>
        </div>
        <div className="aspect-[4/4] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage6} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery Row">
      <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage7} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage8} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage9} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage10} />
          </div>
        </div>
        <div className="aspect-[4/4] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryRow3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery Row">
      <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage3} />
          </div>
        </div>
        <div className="aspect-[4/4] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage6} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage2} />
          </div>
        </div>
        <div className="h-[152px] relative rounded-[8px] shrink-0 w-[270px]" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage4} />
          </div>
        </div>
        <div className="aspect-[114.00000762939453/152] relative rounded-[8px] self-stretch shrink-0" data-name="Image">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryRow4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gallery Row">
      <div className="content-stretch flex gap-[24px] items-start px-[24px] relative w-full">
        <div className="bg-[#d9d9d9] h-[152px] shrink-0 w-[270px]" data-name="Rounded Rectangle" />
        <div className="aspect-[4/4] bg-[#d9d9d9] self-stretch shrink-0" data-name="Rounded Rectangle" />
        <div className="flex items-center justify-center relative self-stretch shrink-0 w-[114px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="aspect-[4/3] bg-[#d9d9d9] size-full" data-name="Rounded Rectangle" />
          </div>
        </div>
        <div className="bg-[#d9d9d9] h-[152px] shrink-0 w-[270px]" data-name="Rounded Rectangle" />
        <div className="flex items-center justify-center relative self-stretch shrink-0 w-[114px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="aspect-[4/3] bg-[#d9d9d9] size-full" data-name="Rounded Rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NeutralButtons() {
  return (
    <div className="bg-white content-stretch flex items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Neutral Buttons">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#182831] text-[20px]">Añadir</p>
    </div>
  );
}

function SelectionDetails() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1101px]" data-name="Selection Details">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">2/4 seleccionadas</p>
      <NeutralButtons />
    </div>
  );
}

function SelectionInfo() {
  return (
    <div className="absolute bg-[#182831] bottom-0 left-0" data-name="Selection Info">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[24px] py-[32px] relative rounded-[inherit]">
        <SelectionDetails />
      </div>
      <div aria-hidden="true" className="absolute border-[#243f4c] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function PublicarUploadmedia() {
  return (
    <div className="bg-[#182831] content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[24px] relative rounded-[16px] size-full" data-name="Publicar-uploadmedia">
      <Header />
      <GalleryRow />
      <GalleryRow1 />
      <GalleryRow2 />
      <GalleryRow3 />
      <GalleryRow4 />
      <SelectionInfo />
    </div>
  );
}