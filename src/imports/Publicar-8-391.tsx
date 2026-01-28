import svgPaths from "./svg-z6vmdfxmct";
import imgEllipse1 from "figma:asset/fef4a8699a084a22736f9d5115f239fcb0c52797.png";

function UserInfo() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-name="User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse1} width="40" />
      </div>
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a7c1cd] text-[20px]">¿En qué estas trabajando, Gustavo?</p>
    </div>
  );
}

function Photo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="photo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photo">
          <path d={svgPaths.pc13400} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ContentInfo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-center left-1/2 top-1/2 w-[327px]" data-name="Content Info">
      <Photo />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.1px]">Comparte trabajos, progreso, actualizaciones...</p>
      <p className="css-4hzbpn font-['Monument_Grotesk:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#a7c1cd] text-[0px] text-[14px] text-center tracking-[0.1px] w-[332px]">
        <span className="leading-[20px]">{`Arrastra un archivo o `}</span>
        <span className="decoration-solid leading-[20px] underline">explora en tu ordenador</span>
      </p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#1c303b] h-[144px] relative rounded-[8px] shrink-0 w-full" data-name="Content Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ContentInfo />
      </div>
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[20px] left-[75px] top-[10px] w-px" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g id="Component 2">
          <path d="M0.5 0V20" id="Vector 226" stroke="var(--stroke-0, #A7C1CD)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[40px] px-[16px] relative w-full">
          <UserInfo />
          <ContentContainer />
          <Component />
        </div>
      </div>
    </div>
  );
}

function Photo1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="photo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="photo">
          <path d={svgPaths.p16f8e100} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Emoji() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[6.667px] relative shrink-0 size-[20px]" data-name="Emoji">
      <p className="css-4hzbpn font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16.667px] text-center text-white w-full">🍌</p>
    </div>
  );
}

function EmojiContainer() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Emoji Container">
      <Photo1 />
      <Emoji />
    </div>
  );
}

function TopicContainer() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-center relative shrink-0" data-name="Topic Container">
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(167, 193, 205, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 12" stroke="var(--stroke-0, #A7C1CD)" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.1px]"># Seleccionar tema</p>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Footer Container">
      <EmojiContainer />
      <TopicContainer />
    </div>
  );
}

function NeutralButtons() {
  return (
    <div className="bg-white content-stretch flex items-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="Neutral Buttons">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#182831] text-[16px] tracking-[0.1px]">Publicar</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
          <FooterContainer />
          <NeutralButtons />
        </div>
      </div>
    </div>
  );
}

export default function Publicar() {
  return (
    <div className="bg-[#243f4c] content-stretch flex flex-col gap-[16px] items-start py-[16px] relative rounded-[16px] size-full" data-name="Publicar">
      <div aria-hidden="true" className="absolute border border-[#2a5266] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
      <Footer />
    </div>
  );
}