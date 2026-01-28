import React, { useState } from "react";
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

type Tab = "subir" | "galeria";

interface GalleryImage {
  id: string;
  src: string;
  width?: string;
  aspect?: string;
}

const MOCK_GALLERY: GalleryImage[] = [
  { id: "1", src: imgRectangle12, width: "270px" },
  { id: "2", src: imgRectangle13, width: "270px" },
  { id: "3", src: imgImage, aspect: "114/152" },
  { id: "4", src: imgImage1, width: "270px" },
  { id: "5", src: imgImage2, aspect: "114/152" },
  { id: "6", src: imgImage3, width: "270px" },
  { id: "7", src: imgImage4, width: "270px" },
  { id: "8", src: imgImage5, aspect: "114/152" },
  { id: "9", src: imgImage6, aspect: "1/1" },
  { id: "10", src: imgImage7, width: "270px" },
  { id: "11", src: imgImage8, aspect: "114/152" },
  { id: "12", src: imgImage9, aspect: "114/152" },
  { id: "13", src: imgImage10, aspect: "114/152" },
  { id: "14", src: imgImage11, aspect: "1/1" },
];

function CheckIcon({ selected }: { selected: boolean }) {
  if (!selected) return (
    <div className="absolute left-[8px] top-[8px] size-[20px] rounded-full border border-white/40 bg-black/20" />
  );
  
  return (
    <div className="absolute left-[8px] top-[8px] size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p6337c00} fill="#0C9494" />
          <path d={svgPaths.p6337c00} stroke="#243F4C" strokeWidth="0.833333" />
          <path d={svgPaths.p3d2fc800} fill="white" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Header({ activeTab, onTabChange, onClose }: { activeTab: Tab; onTabChange: (t: Tab) => void; onClose: () => void }) {
  return (
    <div className="relative shrink-0 w-full border-b border-[#243f4c]" data-name="Header">
      <div className="flex items-center px-[24px] py-[16px] justify-between">
        <div className="flex gap-[40px] items-center">
          <button 
            onClick={() => onTabChange("subir")}
            className={`font-['Monument_Grotesk:Medium',sans-serif] text-[20px] transition-colors cursor-pointer ${activeTab === "subir" ? "text-white" : "text-[#a7c1cd] hover:text-white"}`}
          >
            Subir
          </button>
          <button 
            onClick={() => onTabChange("galeria")}
            className={`font-['Monument_Grotesk:Medium',sans-serif] text-[20px] transition-colors cursor-pointer ${activeTab === "galeria" ? "text-white" : "text-[#a7c1cd] hover:text-white"}`}
          >
            Mi galería
          </button>
          <div className="flex gap-[4px] items-center ml-4 opacity-80">
            <p className="text-[16px]">🍌</p>
            <p className="font-['Monument_Grotesk:Medium',sans-serif] text-[#a7c1cd] text-[18px]">Nano banana</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p29ddc400} fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function UploadContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-[48px] min-h-[400px]">
      <div className="bg-[#1c303b]/50 border-2 border-dashed border-[#243f4c] rounded-[16px] w-full max-w-[700px] aspect-video flex flex-col items-center justify-center gap-6 group cursor-pointer hover:bg-[#1c303b]/80 transition-all">
        <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
          <svg className="size-8" fill="none" viewBox="0 0 24 24">
             <path d="M12 16L12 8M12 8L15 11M12 8L9 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M3 15V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-center px-8">
          <p className="font-['Monument_Grotesk:Bold',sans-serif] text-[20px] text-white mb-2">
            Arrastra y suelta imágenes o videos, o <span className="underline">explora</span>
          </p>
          <p className="text-[#a7c1cd] text-[15px] max-w-[450px]">
            Selecciona una imagen (png, jpg, gif) o un video en formato mp4. Max 10MB.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PublicarUploadmedia({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("subir");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleImage = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  return (
    <div 
      className="bg-[#182831] flex flex-col overflow-hidden relative rounded-[24px] w-full max-w-[1200px] max-h-[90vh] shadow-2xl border border-[#243f4c]" 
      onClick={(e) => e.stopPropagation()}
    >
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onClose={onClose} 
      />

      <div className="flex-1 overflow-y-auto p-[24px] pb-[100px] custom-scrollbar">
        {activeTab === "subir" ? (
          <UploadContent />
        ) : (
          <div className="flex flex-wrap gap-[20px] items-start">
            {MOCK_GALLERY.map((img) => (
              <div 
                key={img.id}
                onClick={() => toggleImage(img.id)}
                className="relative rounded-[8px] overflow-hidden cursor-pointer group"
                style={{ 
                  width: img.width || 'auto',
                  aspectRatio: img.aspect || 'auto',
                  height: img.width ? '152px' : '152px'
                }}
              >
                <img 
                  src={img.src} 
                  alt="" 
                  className={`size-full object-cover transition-transform duration-500 group-hover:scale-105 ${selectedIds.has(img.id) ? 'opacity-60' : ''}`} 
                />
                <div className={`absolute inset-0 border-2 transition-colors ${selectedIds.has(img.id) ? 'border-[#0C9494]' : 'border-transparent group-hover:border-white/20'}`} />
                <CheckIcon selected={selectedIds.has(img.id)} />
              </div>
            ))}
          </div>
        )}
      </div>

      {activeTab === "galeria" && selectedIds.size > 0 && (
        <div className="absolute bottom-0 left-0 w-full bg-[#182831]/95 backdrop-blur-md border-t border-[#243f4c] p-[24px] flex items-center justify-between z-10">
          <p className="font-['Monument_Grotesk:Medium',sans-serif] text-[20px] text-white">
            {selectedIds.size} {selectedIds.size === 1 ? 'seleccionada' : 'seleccionadas'}
          </p>
          <button 
            onClick={onClose}
            className="bg-white text-[#182831] px-[32px] py-[12px] rounded-[8px] font-['Monument_Grotesk:Medium',sans-serif] text-[20px] hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
          >
            Añadir
          </button>
        </div>
      )}
    </div>
  );
}
