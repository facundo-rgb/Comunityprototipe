import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-z6vmdfxmct";
import imgEllipse1 from "figma:asset/fef4a8699a084a22736f9d5115f239fcb0c52797.png";
import PublicarUploadmedia from "./PublicarUploadmedia";

function UserInfo({ isActive, text, setText }: { isActive: boolean; text: string; setText: (v: string) => void }) {
  return (
    <div className={`content-stretch flex gap-[19px] ${isActive ? 'items-start py-1' : 'items-center py-2'} relative shrink-0 w-full px-[16px]`} data-name="User Info">
      <div className="relative shrink-0 size-[40px]">
        <img alt="" className="block max-w-none size-full rounded-full" height="40" src={imgEllipse1} width="40" />
      </div>
      <div className="flex-1 min-w-0">
        {isActive ? (
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="¿En qué estás trabajando, Gustavo?"
            className="w-full bg-transparent border-none outline-none text-white text-[20px] font-['Monument_Grotesk:Regular',sans-serif] leading-[28px] resize-none placeholder:text-[#a7c1cd]/50 min-h-[40px]"
            rows={1}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        ) : (
          <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#a7c1cd] text-[20px] truncate">
            ¿En qué estás trabajando, Gustavo?
          </p>
        )}
      </div>
    </div>
  );
}

function PhotoLarge() {
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

function MediaUploadPlaceholder({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-[#1a2e38]/90 h-[144px] relative rounded-xl shrink-0 w-full group cursor-pointer transition-all hover:bg-[#213744] hover:ring-1 hover:ring-[#579dff]/25" 
      data-name="Content Container"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full flex flex-col items-center justify-center gap-[8px]">
        <PhotoLarge />
        <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.1px] text-center">
          Comparte trabajos, progreso, actualizaciones...
        </p>
        <p className="css-4hzbpn font-['Monument_Grotesk:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a7c1cd] text-[14px] text-center tracking-[0.1px]">
          <span>Arrastra un archivo o </span>
          <span className="decoration-solid underline group-hover:text-white">explora en tu ordenador</span>
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-white/[0.08] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function PhotoSmall({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-80 transition-opacity" 
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      data-name="photo"
    >
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
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative shrink-0 size-[20px] cursor-pointer hover:scale-120 transition-transform" data-name="Emoji">
      <p className="css-4hzbpn font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-white w-full">🍌</p>
    </div>
  );
}

function Footer({ isActive, onPublish, hasContent, onMediaClick }: { isActive: boolean; onPublish: () => void; hasContent: boolean; onMediaClick: () => void }) {
  return (
    <div className="relative mt-auto w-full shrink-0 border-t border-white/[0.08] pt-3" data-name="Footer">
      <div className="flex min-h-[44px] w-full flex-row flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 sm:px-5">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3 sm:gap-4" data-name="Footer Container">
          <div className="flex shrink-0 items-center gap-3">
            <PhotoSmall onClick={onMediaClick} />
            <Emoji />
          </div>
          <div className="hidden h-5 w-px shrink-0 bg-[#a7c1cd]/30 sm:block" />
          <div className="flex min-w-0 cursor-pointer items-center gap-2 group">
            <p className="css-ew64yg truncate font-['Monument_Grotesk:Regular',sans-serif] text-[15px] leading-snug tracking-[0.1px] text-[#cfd9de] transition-colors group-hover:text-white">
              # Seleccionar tema
            </p>
          </div>
        </div>
        
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPublish();
          }}
          disabled={!hasContent}
          className={`shrink-0 px-5 py-2.5 text-[15px] font-['Monument_Grotesk:Medium',sans-serif] tracking-[0.1px] transition-all border rounded-full
            ${hasContent 
              ? 'bg-white text-[#182831] border-transparent cursor-pointer hover:bg-white/90 active:scale-[0.98] shadow-md' 
              : 'bg-[#1c303b] text-[#cfd9de] border-white/25 cursor-not-allowed hover:border-white/35'}`}
        >
          Publicar
        </button>
      </div>
    </div>
  );
}

export default function Publicar() {
  const [isActive, setIsActive] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [text, setText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node) && !isMediaModalOpen) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, isMediaModalOpen]);

  const handlePublish = () => {
    if (text.trim()) {
      console.log("Publishing:", text);
      setText("");
      setIsActive(false);
    }
  };

  return (
    <>
      <div 
        ref={containerRef}
        className={`bg-[#243f4c]/95 content-stretch flex flex-col gap-[16px] py-[18px] relative rounded-2xl w-full border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[0.4, 0, 0.2, 1] ${isActive ? 'min-h-[300px]' : 'h-auto cursor-pointer hover:bg-[#2a4855] hover:border-white/[0.12]'}`} 
        data-name="Publicar"
        onClick={() => !isActive && setIsActive(true)}
      >
        <UserInfo isActive={isActive} text={text} setText={setText} />
        
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full overflow-hidden px-[16px]"
            >
              <MediaUploadPlaceholder onClick={() => setIsMediaModalOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer 
          isActive={isActive} 
          onPublish={handlePublish} 
          hasContent={text.trim().length > 0} 
          onMediaClick={() => setIsMediaModalOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isMediaModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMediaModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[900px] z-10"
            >
              <PublicarUploadmedia onClose={() => setIsMediaModalOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
