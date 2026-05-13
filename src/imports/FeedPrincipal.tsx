import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import SearchOverlay from "@/app/components/SearchOverlay";
import CarroucelDeCanalesSugeridos from "./CarroucelDeCanalesSugeridos";
import AccionesSugeridasPanel from "./PanelDeAccionesSugeridas";
import Publicar from "./Publicar";
import CanalTagLink from "./CanalTagLink";
import svgPaths from "./svg-bw3m2buwpf";
import imgImg from "figma:asset/ab8a7bbe5006c0bec60daafc1443188c78ad4a38.png";
import imgEllipse1 from "figma:asset/fef4a8699a084a22736f9d5115f239fcb0c52797.png";
import imgEllipse4 from "figma:asset/d4e6e7f5fff5e184c72dfc232cd59f8f2f84129a.png";
import imgEllipse3 from "figma:asset/99a9bcb78d7ad81616acf70ef636fa18e350771b.png";
import imgEllipse2 from "figma:asset/942a2637ed853c6facc4d40de3c412857e540994.png";
import imgEllipse5 from "figma:asset/b533a098dd7cca8f93a8cbe39215102f933b4276.png";
import imgEllipse6 from "figma:asset/a453903139ca5d04c8e3351141fdc833a70a50cc.png";
import imgEllipse7 from "figma:asset/dd04c8918c4627be221de20d699737d0182fe126.png";
import imgEllipse8 from "figma:asset/c94e2a88e6d76d70793338583fac4ace9fd7478c.png";
import imgEllipse9 from "figma:asset/f503bdecfcc3d12f615f1972d087cd18b35c759b.png";
import imgEllipse10 from "figma:asset/5d001cfa010c278054fde08bbf04552872138b22.png";
import imgEllipse11 from "figma:asset/6f58d2fde067eb9e2187a614a7b5db843eabadbf.png";

function Capa() {
  return (
    <div className="absolute inset-[0.01%_0_0_0]" data-name="Capa_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91.2984 23.9977">
        <g id="Capa_1-2">
          <path d={svgPaths.p3a844880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14fd4ff0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p395e7bf0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p25c06b00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3ac0a335} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pfc56700} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p10d05380} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p9feef90} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p27d28c00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p26a04200} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1236c80} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1a7e6900} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p2ac484f0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p66bcc80} fill="var(--fill-0, white)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[91.296px]" data-name="Logo">
      <Capa />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path d={svgPaths.p20a05600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function NavBarCategories() {
  return (
    <div className="content-stretch flex gap-[4px] h-[36px] items-center p-[8px] relative shrink-0" data-name="Nav Bar Categories">
      <Home />
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Home</p>
    </div>
  );
}

function Bookmark() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bookmark">
          <path d={svgPaths.p2e6cb00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function NavBarCategories1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Nav Bar Categories">
      <Bookmark />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Mi lista</p>
    </div>
  );
}

function CalendarMonth() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="calendar_month">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar_month">
          <mask height="20" id="mask0_1_3695" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3695)">
            <path d={svgPaths.p16ae5000} fill="var(--fill-0, white)" id="calendar_month_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavBarCategories2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Nav Bar Categories">
      <CalendarMonth />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Calendario</p>
    </div>
  );
}

function GmailGroups() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gmail-groups">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3651)" id="gmail-groups">
          <path d={svgPaths.p20ca0100} fill="var(--fill-0, white)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_3651">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavBarCategories3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Nav Bar Categories">
      <GmailGroups />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Comunidad</p>
    </div>
  );
}

function Categories() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Categories">
      <NavBarCategories />
      <NavBarCategories1 />
      <NavBarCategories2 />
      <NavBarCategories3 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Left">
      <Logo />
      <Categories />
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="notifications">
          <path d={svgPaths.p377a5180} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function NavBarCategories4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Nav Bar Categories">
      <Notifications />
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 absolute bottom-0 h-[48px] left-[calc(50%-0.5px)] w-[51.84px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg} />
        </div>
      </div>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User Profile">
      <Frame />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Right">
      <NavBarCategories4 />
      <UserProfile />
    </div>
  );
}

export function NavBar() {
  return (
    <div className="fixed content-stretch flex items-center justify-between left-0 right-0 z-50 px-[40px] py-[8px] top-0 border-b border-white/[0.06] bg-[#182831]/85 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md" data-name="NavBar">
      <Left />
      <Right />
    </div>
  );
}

function Frame38() {
  return <div className="absolute h-[40px] left-[144px] top-[78px] w-[95px]" />;
}

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

function IconButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button 
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-[#1c303b] relative rounded-[96px] shrink-0 cursor-pointer overflow-hidden h-[40px] flex items-center border-none p-0 appearance-none focus:outline-none z-10" 
      data-name="Icon Button"
    >
      <motion.div 
        className="content-stretch flex items-center px-[8px] relative rounded-[inherit] whitespace-nowrap"
        variants={{
          initial: { width: 40 },
          hover: { width: "auto" }
        }}
        transition={{ 
          type: "tween", 
          duration: 0.25, 
          ease: "circOut" 
        }}
      >
        <div className="shrink-0 flex items-center justify-center size-[24px]">
          <Search />
        </div>
        <motion.span
          variants={{
            initial: { opacity: 0, x: -5, width: 0, marginLeft: 0 },
            hover: { opacity: 1, x: 0, width: "auto", marginLeft: 8 }
          }}
          transition={{ duration: 0.2 }}
          className="text-white font-['Monument_Grotesk:Medium',sans-serif] text-[16px] overflow-hidden pr-[12px]"
        >
          Buscar
        </motion.span>
      </motion.div>
      {/* Decorative border */}
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[96px]" />
    </motion.button>
  );
}

function CanalSelected() {
  return (
    <div className="bg-[#142129] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Canal selected">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Principal</p>
    </div>
  );
}

function Frame12() {
  return <div className="absolute bg-gradient-to-l from-[#182831] h-[40px] right-0 to-[rgba(24,40,49,0)] top-0 w-[24px]" />;
}

function SelectorDeCanales({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Selector de canales">
      <IconButton onClick={onSearchClick} />
      <CanalSelected />
      <CanalTagLink name="LearningHeroesCoffe" />
      <CanalTagLink name="inteligencia-artificial" />
      <CanalTagLink name="IAhero10" />
      <CanalTagLink name="CafeCrypto" />
      <CanalTagLink name="ArteIA" />
      <CanalTagLink name="Web3" />
      <CanalTagLink name="Design" />
      <Frame12 />
    </div>
  );
}

function Frame39({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start relative shrink-0 w-full">
      <SelectorDeCanales onSearchClick={onSearchClick} />
      <Publicar />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard-arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard-arrow-down">
          <path d={svgPaths.p345be780} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[16px] text-white tracking-[0.1px]">
        <span className="leading-[20px] text-[#a7c1cd]">#</span>
        <span className="leading-[20px]"> </span>
        <span className="leading-[20px] text-[#cfd9de]">canales sugeridos</span>
      </p>
      <KeyboardArrowDown />
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-forward">
          <path d={svgPaths.p28d07880} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">
        <span className="leading-[20px] text-[#cfd9de]">#</span>
        <span className="leading-[20px]">{` Inteligencia artificial`}</span>
      </p>
      <ArrowForward />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal de IA, el más grande e increíble de habla hispana</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame3 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame4 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 1">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/4cc80f97669ed65efddf14644ad61d2b939bbcfe" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" />
      <Frame8 />
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function ArrowForward1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-forward">
          <path d={svgPaths.p28d07880} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cfd9de] text-[16px] tracking-[0.1px]"># Arte con IA</p>
      <ArrowForward1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]">
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Crea imágenes impresionantes con el poder de la IA como un Heroe</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">4.1K</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame19 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">1.2K</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame21 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse5} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse6} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse7} width="24" />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 2">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/46c7421773009678780c46260e9cbffe5ae36810" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" />
      <Frame17 />
      <Frame18 />
      <Frame25 />
    </div>
  );
}

function ArrowForward2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-forward">
          <path d={svgPaths.p28d07880} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">
        <span className="leading-[20px] text-[#cfd9de]">#</span>
        <span className="leading-[20px]">{` Criptomonedas`}</span>
      </p>
      <ArrowForward2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]">
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal Crypto el mas grande e increíble de habla hispana!</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame29 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Contribuidores</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
      <Frame31 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Posts</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse5} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse6} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse7} width="24" />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Card2() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 3">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/46c7421773009678780c46260e9cbffe5ae36810" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" />
      <Frame27 />
      <Frame28 />
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return <div className="absolute bg-gradient-to-l from-[#182831] h-[184px] right-0 to-[rgba(24,40,49,0)] top-0 w-[24px]" />;
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 overflow-clip top-0 w-[672px]">
      <Card />
      <Card1 />
      <Card2 />
      <Frame36 />
    </div>
  );
}

function ArrowForward3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-forward">
          <path d={svgPaths.p1da7a880} fill="var(--fill-0, #182831)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[-16px] rounded-[96px] top-[74px]" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[96px] shadow-[0px_22px_6px_0px_rgba(0,0,0,0),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_8px_5px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.09),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <ArrowForward3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[184px] relative shrink-0 w-full">
      <Frame11 />
      <IconButton1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Component 14">
      <Frame14 />
      <Frame13 />
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse8} width="40" />
      </div>
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Claudia Pascual</p>
    </div>
  );
}

function UserInfo2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User Info">
      <UserInfo1 />
    </div>
  );
}

function MoreHoriz() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="more-horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="more-horiz">
          <path d={svgPaths.p18665dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function FollowButton() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Follow Button">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Seguir</p>
      <MoreHoriz />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[32px] px-[24px] relative w-full">
          <UserInfo2 />
          <FollowButton />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[26px] min-h-px min-w-px relative text-[18px] text-white tracking-[0.5px]">Hola a todos estoy muy contento de participar en esta hermosa comunidad hoy en nuestra clase de video con IA hicimos esto en #Flora</p>
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(233,236,237,0.32)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">#Generacion-de-video</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(233,236,237,0.32)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">#Flora</p>
    </div>
  );
}

function CanalTag() {
  return (
    <div className="relative shrink-0 w-full" data-name="Canal-tag">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
          <Tag />
          <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">,</p>
          <Tag1 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative w-full">
          <div className="aspect-[328/184] relative rounded-xl shrink-0 w-full overflow-hidden shadow-inner ring-1 ring-white/[0.08]" data-name="Post Image">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTU5NDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              className="absolute inset-0 object-cover size-full"
              alt="Post IA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="comment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="comment">
          <path d={svgPaths.p20c28e00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Comment />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">4</p>
    </div>
  );
}

function Comentario() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Comentario">
      <Container1 />
    </div>
  );
}

function Repeat() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="repeat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="repeat">
          <mask height="24" id="mask0_1_3666" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3666)">
            <path d={svgPaths.p13474e00} fill="var(--fill-0, white)" id="repeat_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Repeat />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">1</p>
    </div>
  );
}

function Repost() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Repost">
      <Container2 />
    </div>
  );
}

function Favorite() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="favorite">
          <path d={svgPaths.p258ef280} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Favorite />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">20</p>
    </div>
  );
}

function MeGusta() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Me gusta">
      <Container3 />
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[333px]" data-name="Action Group">
      <Comentario />
      <Repost />
      <MeGusta />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="share">
          <path d={svgPaths.p1d9c6270} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Share />
    </div>
  );
}

function Compartir() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Compartir">
      <Container4 />
    </div>
  );
}

function Bookmark1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bookmark">
          <path d={svgPaths.p2b7f0c80} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Bookmark1 />
    </div>
  );
}

function Guardar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Guardar">
      <Container5 />
    </div>
  );
}

function ActionGroup1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[71px]" data-name="Action Group">
      <Compartir />
      <Guardar />
    </div>
  );
}

function PostActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <ActionGroup />
          <ActionGroup1 />
        </div>
      </div>
    </div>
  );
}

function CommentInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Comment Info">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Leandro Diaz</p>
      <ul className="block css-g0mm18 font-['Figtree:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#a7c1cd] text-[14px] tracking-[0.5px]">
        <li className="css-4hzbpn ms-[21px]">
          <span className="leading-[20px]">1d</span>
        </li>
      </ul>
    </div>
  );
}

function CommentUserInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Comment User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse9} width="40" />
      </div>
      <CommentInfo />
    </div>
  );
}

function CommentUserInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Comment User Info">
      <CommentUserInfo />
    </div>
  );
}

function CommentText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[56px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[26px] min-h-px min-w-px relative text-[18px] text-white tracking-[0.5px]">¡Se ve sensacional buen trabajo! mamaaaa mia</p>
        </div>
      </div>
    </div>
  );
}

function Comment1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Comment">
      <CommentUserInfo1 />
      <CommentText />
    </div>
  );
}

function Comment2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="comment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="comment">
          <path d={svgPaths.p185e5900} fill="var(--fill-0, #CFD9DE)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Comment2 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cfd9de] text-[16px] tracking-[0.1px]">4</p>
    </div>
  );
}

function Repeat1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="repeat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="repeat">
          <mask height="20" id="mask0_1_3647" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_3647)">
            <path d={svgPaths.p1f62a300} fill="var(--fill-0, #CFD9DE)" id="repeat_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Repeat1 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cfd9de] text-[16px] tracking-[0.1px]">1</p>
    </div>
  );
}

function Favorite1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="favorite">
          <path d={svgPaths.p3f835e00} fill="var(--fill-0, #CFD9DE)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Favorite1 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cfd9de] text-[16px] tracking-[0.1px]">20</p>
    </div>
  );
}

function ActionGroup2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Action Group">
      <Action />
      <Action1 />
      <Action2 />
    </div>
  );
}

function Bookmark2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bookmark">
          <path d={svgPaths.p2e6cb00} fill="var(--fill-0, #CFD9DE)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Share1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="share">
          <path d={svgPaths.p2a87f7f0} fill="var(--fill-0, #CFD9DE)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ActionGroup3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[71px]" data-name="Action Group">
      <Bookmark2 />
      <Share1 />
    </div>
  );
}

function CommentActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[52px] py-[8px] relative w-full">
          <ActionGroup2 />
          <ActionGroup3 />
        </div>
      </div>
    </div>
  );
}

function Comments() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comments">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative w-full">
        <Comment1 />
        <CommentActions />
      </div>
    </div>
  );
}

function ShowMoreComments() {
  return (
    <div className="relative shrink-0 w-full" data-name="Show More Comments">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[26px] min-h-px min-w-px relative text-[18px] text-[#9dd0ff] tracking-[0.5px] transition-colors hover:text-[#c5e4ff] cursor-default">Mostrar 3 comentarios más</p>
        </div>
      </div>
    </div>
  );
}

function Post({ index }: { index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      className="content-stretch flex flex-col gap-6 items-start border-b border-white/[0.06] pb-8 pt-1 relative shrink-0 w-full last:border-b-0" 
      data-name="Post"
    >
      <Header />
      <Frame43 />
      <CanalTag />
      <Frame44 />
      <PostActions />
      <Comments />
      <ShowMoreComments />
    </motion.div>
  );
}

function UserInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse10} width="40" />
      </div>
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Daniela Paz</p>
    </div>
  );
}

function UserInfo4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User Info">
      <UserInfo3 />
    </div>
  );
}

function MoreHoriz1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="more-horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="more-horiz">
          <path d={svgPaths.p18665dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function FollowButton1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Follow Button">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Seguir</p>
      <MoreHoriz1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[32px] px-[24px] relative w-full">
          <UserInfo4 />
          <FollowButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[26px] min-h-px min-w-px relative text-[18px] text-white tracking-[0.5px]">¡Hola a todos! Estoy muy feliz de compartir mi entusiasmo por haber completado el curso de IA Avanzada en esta hermosa comunidad. Hoy, en nuestra clase de video con IA, logramos crear algo increíble utilizando #Dalia. ¡Me siento inspirada y lista para seguir explorando el mundo de la inteligencia artificial junto a todos ustedes!</p>
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#182831] text-[12px] tracking-[0.5px]">Artificial intelligence</p>
    </div>
  );
}

function ArrowForward4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-forward">
          <path d={svgPaths.p28d07880} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(233,236,237,0.32)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">#Video-generation</p>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[rgba(233,236,237,0.32)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">#Lumix</p>
    </div>
  );
}

function CanalTag1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Canal-tag">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[24px] relative w-full">
          <Tag2 />
          <ArrowForward4 />
          <Tag3 />
          <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">,</p>
          <Tag4 />
        </div>
      </div>
    </div>
  );
}

function Comment3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="comment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="comment">
          <path d={svgPaths.p20c28e00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Comment3 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">0</p>
    </div>
  );
}

function Comentario1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Comentario">
      <Container6 />
    </div>
  );
}

function Repeat2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="repeat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="repeat">
          <mask height="24" id="mask0_1_3666" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3666)">
            <path d={svgPaths.p13474e00} fill="var(--fill-0, white)" id="repeat_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Repeat2 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">3</p>
    </div>
  );
}

function Repost1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Repost">
      <Container7 />
    </div>
  );
}

function Favorite2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="favorite">
          <path d={svgPaths.p258ef280} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Favorite2 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">33</p>
    </div>
  );
}

function MeGusta1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Me gusta">
      <Container8 />
    </div>
  );
}

function ActionGroup4() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[333px]" data-name="Action Group">
      <Comentario1 />
      <Repost1 />
      <MeGusta1 />
    </div>
  );
}

function Share2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="share">
          <path d={svgPaths.p1d9c6270} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Share2 />
    </div>
  );
}

function Compartir1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Compartir">
      <Container9 />
    </div>
  );
}

function Bookmark3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bookmark">
          <path d={svgPaths.p2b7f0c80} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Bookmark3 />
    </div>
  );
}

function Guardar1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Guardar">
      <Container10 />
    </div>
  );
}

function ActionGroup5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[71px]" data-name="Action Group">
      <Compartir1 />
      <Guardar1 />
    </div>
  );
}

function PostActions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <ActionGroup4 />
          <ActionGroup5 />
        </div>
      </div>
    </div>
  );
}

function Post1({ index }: { index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      className="content-stretch flex flex-col gap-6 items-start border-b border-white/[0.06] pb-8 pt-1 relative shrink-0 w-full last:border-b-0" 
      data-name="Post"
    >
      <Header1 />
      <Frame45 />
      <CanalTag1 />
      <PostActions1 />
    </motion.div>
  );
}

function UserInfo5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full" height="40" src={imgEllipse9} width="40" />
      </div>
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Ricardo Tapia</p>
    </div>
  );
}

function UserInfo6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User Info">
      <UserInfo5 />
    </div>
  );
}

function MoreHoriz2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="more-horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="more-horiz">
          <path d={svgPaths.p18665dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function FollowButton2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Follow Button">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Seguir</p>
      <MoreHoriz2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[32px] px-[24px] relative w-full">
          <UserInfo6 />
          <FollowButton2 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[26px] min-h-px min-w-px relative text-[18px] text-white tracking-[0.5px]">¡Hola a todos! Estoy emocionado de ser parte de esta comunidad. En nuestra clase de hoy sobre videos con IA, creamos esto usando #Mirage</p>
        </div>
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[rgba(233,236,237,0.32)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.5px]">#FinanzasDigitales</p>
    </div>
  );
}

function CanalTag2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Canal-tag">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative w-full">
          <Tag5 />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative w-full">
          <div className="aspect-[328/184] relative rounded-xl shrink-0 w-full overflow-hidden shadow-inner ring-1 ring-white/[0.08]" data-name="Post Image">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZmluYW5jZSUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY5NjI5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              className="absolute inset-0 object-cover size-full"
              alt="Finanzas IA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Comment4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="comment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="comment">
          <path d={svgPaths.p20c28e00} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Comment4 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">0</p>
    </div>
  );
}

function Comentario2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Comentario">
      <Container11 />
    </div>
  );
}

function Repeat3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="repeat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="repeat">
          <mask height="24" id="mask0_1_3666" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_3666)">
            <path d={svgPaths.p13474e00} fill="var(--fill-0, white)" id="repeat_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Repeat3 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">12</p>
    </div>
  );
}

function Repost2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Repost">
      <Container12 />
    </div>
  );
}

function Favorite3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="favorite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="favorite">
          <path d={svgPaths.p258ef280} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Favorite3 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">155</p>
    </div>
  );
}

function MeGusta2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0" data-name="Me gusta">
      <Container13 />
    </div>
  );
}

function ActionGroup6() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[333px]" data-name="Action Group">
      <Comentario2 />
      <Repost2 />
      <MeGusta2 />
    </div>
  );
}

function Share3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="share">
          <path d={svgPaths.p1d9c6270} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Share3 />
    </div>
  );
}

function Compartir2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Compartir">
      <Container14 />
    </div>
  );
}

function Bookmark4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bookmark">
          <path d={svgPaths.p2b7f0c80} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Bookmark4 />
    </div>
  );
}

function Guardar2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Guardar">
      <Container15 />
    </div>
  );
}

function ActionGroup7() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[71px]" data-name="Action Group">
      <Compartir2 />
      <Guardar2 />
    </div>
  );
}

function PostActions2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Post Actions">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <ActionGroup6 />
          <ActionGroup7 />
        </div>
      </div>
    </div>
  );
}

function Post2({ index }: { index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      className="content-stretch flex flex-col gap-6 items-start border-b border-white/[0.06] pb-8 pt-1 relative shrink-0 w-full last:border-b-0" 
      data-name="Post"
    >
      <Header2 />
      <Frame46 />
      <CanalTag2 />
      <Frame47 />
      <PostActions2 />
    </motion.div>
  );
}

function Frame16() {
  return (
    <div className="relative w-full shrink-0 overflow-hidden rounded-2xl bg-[#152028]/80 shadow-[0_16px_48px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.07]">
      <div className="content-stretch flex flex-col items-start relative w-full rounded-[inherit]">
        <Post index={0} />
        <Post1 index={1} />
        <Post2 index={2} />
        <Post1 index={3} />
        <Post index={4} />
      </div>
    </div>
  );
}

export function Frame37({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-10 items-end relative shrink-0 w-full">
      <Frame39 onSearchClick={onSearchClick} />
      <CarroucelDeCanalesSugeridos />
      <Frame16 />
    </div>
  );
}

function MiPerfil() {
  return (
    <div className="content-stretch flex gap-[8px] items-center p-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-white/5" data-name="mi perfil">
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">Mi perfil</p>
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full rounded-full" height="24" src={imgEllipse11} width="24" />
      </div>
    </div>
  );
}

function Bookmark5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bookmark">
          <path d={svgPaths.p2b7f0c80} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative rounded-[96px] shrink-0 cursor-pointer hover:bg-white/5" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[96px]" />
      <Bookmark5 />
    </div>
  );
}

function Guardados() {
  return (
    <div className="content-stretch flex items-center relative rounded-[83px] shrink-0" data-name="Guardados">
      <Icon />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <MiPerfil />
      <Guardados />
    </div>
  );
}

function ProgressIconContainer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Progress Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Progress Icon Container">
          <g id="Ellipse 5">
            <path d={svgPaths.p26d11700} fill="var(--fill-0, #182831)" />
            <path d={svgPaths.p26d11700} fill="var(--fill-1, #142129)" />
          </g>
          <path d={svgPaths.pbcf4a80} fill="var(--fill-0, #2ABB7F)" id="Ellipse 6" />
        </g>
      </svg>
    </div>
  );
}

function ProgressContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Progress Container">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7ee2b8] text-[16px] tracking-[0.1px]">66%</p>
      <ProgressIconContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Header Container">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Acciones sugeridas</p>
      <ProgressContainer />
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="keyboard-arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard-arrow-down">
          <path d={svgPaths.p345be780} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <HeaderContainer />
      <KeyboardArrowDown1 />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2f540dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconContainer() {
  return (
    <div className="bg-[#1f845a] relative rounded-[96px] shrink-0 size-[16px]" data-name="Step Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Check />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4bce97] border-solid inset-0 pointer-events-none rounded-[96px]" />
    </div>
  );
}

function Check1() {
  return (
    <div className="absolute left-[2px] size-[12px] top-[2px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check" opacity="0">
          <path d={svgPaths.p2f540dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconContainer1() {
  return (
    <div className="relative rounded-[96px] shrink-0 size-[16px]" data-name="Step Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Check1 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[96px]" />
    </div>
  );
}

function Check2() {
  return (
    <div className="absolute left-[2px] size-[12px] top-[1.5px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2f540dc0} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StepIconContainer2() {
  return (
    <div className="absolute bg-[#1f845a] left-0 rounded-[96px] size-[16px] top-[129px]" data-name="Step Icon Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Check2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#4bce97] border-solid inset-0 pointer-events-none rounded-[96px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[288px] items-center relative shrink-0" data-name="Component 12">
      <StepIconContainer />
      <div className="h-[120px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(75, 206, 151, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 120">
            <path d="M0.5 0V120" id="Vector 25" stroke="var(--stroke-0, #4BCE97)" />
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-0">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(75, 206, 151, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 136">
            <path d="M0.5 0V136" id="Vector 26" stroke="var(--stroke-0, #4BCE97)" />
          </svg>
        </div>
      </div>
      <StepIconContainer1 />
      <StepIconContainer2 />
    </div>
  );
}

function StepHeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[16px] text-white w-full" data-name="Step Header Container">
      <ol className="block css-aohofp font-['Monument_Grotesk:Medium',sans-serif] leading-[0] not-italic relative shrink-0 tracking-[0.1px] w-full" start="1">
        <li className="css-4hzbpn ms-[24px]">
          <span className="leading-[20px]">Date a conocer completando tu perfil:</span>
        </li>
      </ol>
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 tracking-[0.5px] w-full">Te guiaremos paso a paso, para lo hagas de la mejor manerae te presentes</p>
    </div>
  );
}

function StepBadgeIconContainer() {
  return <div className="h-[20px] shrink-0 w-[99px]" data-name="Step Badge Icon Container" />;
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trophy">
          <path d={svgPaths.p398af6f0} fill="var(--fill-0, #7EE2B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function StepBadgeTextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Step Badge Text Container">
      <Trophy />
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7ee2b8] text-[16px] tracking-[0.1px]">Badget de iniciación</p>
    </div>
  );
}

function StepBadgeContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Step Badge Container">
      <StepBadgeIconContainer />
      <StepBadgeTextContainer />
    </div>
  );
}

function StepContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Step Container">
      <StepHeaderContainer />
      <StepBadgeContainer />
    </div>
  );
}

function StepContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] relative shrink-0 text-[16px] text-white w-full" data-name="Step Content Container">
      <ol className="block css-aohofp font-['Monument_Grotesk:Medium',sans-serif] not-italic relative shrink-0 tracking-[0.1px] w-full" start="2">
        <li className="css-4hzbpn ms-[24px]">
          <span className="leading-[20px]">Explora los canales fundamentales:</span>
        </li>
      </ol>
      <ul className="block font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[0px] tracking-[0.5px] w-full">
        <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Regular',sans-serif] font-normal leading-[24px] text-[#579dff] tracking-[0.5px] underline">#IAHeroes</span>
          <span className="leading-[24px]">{` : el canal donde todo Learning Heroes habla de inteligencia artificial`}</span>
        </li>
        <li className="css-4hzbpn ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Figtree:Regular',sans-serif] font-normal leading-[24px] text-[#579dff] tracking-[0.5px] underline">{`#IAHeroes14: `}</span>
          <span className="leading-[24px]">el canal de tu promoción especifica (ESTO QUIERO EN GRUPO)</span>
        </li>
      </ul>
    </div>
  );
}

function StepContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step Container">
      <StepContentContainer />
    </div>
  );
}

function StepHeaderContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[16px] text-white w-full" data-name="Step Header Container">
      <ol className="block css-aohofp font-['Monument_Grotesk:Medium',sans-serif] leading-[0] not-italic relative shrink-0 tracking-[0.1px] w-full" start="3">
        <li className="css-4hzbpn ms-[24px]">
          <span className="leading-[20px]">Lee y apréndete las reglas de la comunidad</span>
        </li>
      </ol>
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 tracking-[0.5px] w-full">Lee las reglas haciendo click aqui. te haremos un breve cuestionario para evaluar si las sabes</p>
    </div>
  );
}

function StepContentContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step Content Container">
      <StepHeaderContainer1 />
    </div>
  );
}

function StepBadgeIconContainer1() {
  return <div className="h-[20px] shrink-0 w-[99px]" data-name="Step Badge Icon Container" />;
}

function StepBadgeTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Step Badge Text Container">
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7ee2b8] text-[16px] tracking-[0.1px]">#Desbloqueo especial</p>
    </div>
  );
}

function StepBadgeContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Step Badge Container">
      <StepBadgeIconContainer1 />
      <StepBadgeTextContainer1 />
    </div>
  );
}

function StepContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Step Container">
      <StepContentContainer1 />
      <StepBadgeContainer1 />
    </div>
  );
}

function StepsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Steps Container">
      <StepContainer />
      <StepContainer1 />
      <StepContainer2 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Content Container">
      <Component1 />
      <StepsContainer />
    </div>
  );
}

function Divider() {
  return <div className="absolute h-[20px] left-[94px] top-[247px] w-[227px]" data-name="Divider" />;
}

function PanelDeAccionesSugeridas() {
  return (
    <div className="bg-[#1c303b] relative rounded-xl shrink-0 w-full shadow-[0_10px_36px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.06]" data-name="Panel de acciones sugeridas">
      <div aria-hidden="true" className="absolute border border-[#2a5266]/60 border-solid inset-0 pointer-events-none rounded-xl" />
      <AccionesSugeridasPanel />
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[20px] not-italic relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.1px] w-full" data-name="Header">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] relative shrink-0 tracking-wide text-[#a7c1cd] uppercase text-[13px]">Retos</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Bold',sans-serif] relative shrink-0">Ver todos</p>
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Avatar group">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Info section">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white tracking-[0.1px]">$5k en premios, empezando en 5 dias</p>
      <AvatarGroup />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <Header4 />
      <p className="css-4hzbpn font-['Monument_Grotesk:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white w-full">
        # NANO BANANA VIDEO CHALLENGE
      </p>
      <InfoSection />
    </div>
  );
}

function Eventos() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-xl shrink-0 w-full shadow-[0_10px_36px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.06] bg-[#1c303b]/80" data-name="Eventos">
      <div aria-hidden="true" className="absolute border border-[#2a5266]/60 border-solid inset-0 pointer-events-none rounded-xl" />
      <Container16 />
    </div>
  );
}

export function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-end relative shrink-0 w-full">
      <Frame42 />
      <PanelDeAccionesSugeridas />
      <Eventos />
    </div>
  );
}

function Frame41({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[40px] items-start left-[144px] top-[104px]">
      <Frame37 onSearchClick={onSearchClick} />
      <Frame40 />
    </div>
  );
}

export default function FeedPrincipal() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-[#182831] relative size-full" data-name="Feed principal">
      <NavBar />
      <Frame38 />
      <Frame41 onSearchClick={() => setIsSearchOpen(true)} />

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  );
}