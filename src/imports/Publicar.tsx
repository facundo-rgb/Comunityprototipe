import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-z6vmdfxmct";
import imgEllipse1 from "figma:asset/fef4a8699a084a22736f9d5115f239fcb0c52797.png";
import PublicarUploadmedia from "./PublicarUploadmedia";

function UserInfo({ isActive, text, setText }: { isActive: boolean; text: string; setText: (v: string) => void }) {
  return (
    <div className={`content-stretch flex gap-[19px] ${isActive ? 'items-start' : 'items-center'} relative shrink-0 w-full px-[16px]`} data-name="User Info">
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
            ¿En que estas trabajando, Gustavo?
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
    <div className="relative shrink-0 w-full mt-auto pt-[8px]" data-name="Footer">
      <div className="content-stretch flex items-center justify-between px-[16px] relative w-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Footer Container">
          <div className="flex gap-[14px] items-center">
            <PhotoSmall onClick={onMediaClick} />
            <Emoji />
          </div>
          <div className="h-[20px] w-[1px] bg-[#a7c1cd]/30" />
          <div className="flex gap-[8px] items-center cursor-pointer group">
            <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic text-[#a7c1cd] text-[16px] tracking-[0.1px] group-hover:text-white transition-colors"># Seleccionar tema</p>
          </div>
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onPublish();
          }}
          disabled={!hasContent}
          className={`px-[24px] py-[10px] rounded-[8px] font-['Monument_Grotesk:Medium',sans-serif] text-[16px] tracking-[0.1px] transition-all
            ${hasContent 
              ? 'bg-white text-[#182831] cursor-pointer hover:bg-white/90 active:scale-95 shadow-lg' 
              : 'bg-white/20 text-white/30 cursor-not-allowed'}`}
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
        className={`bg-[#243f4c]/95 content-stretch flex flex-col gap-[16px] py-[16px] relative rounded-2xl w-full border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[0.4, 0, 0.2, 1] ${isActive ? 'min-h-[300px]' : 'h-auto cursor-pointer hover:bg-[#2a4855] hover:border-white/[0.12]'}`} 
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
