import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-xh4a2ye6sr";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import imgEllipse4 from "figma:asset/d4e6e7f5fff5e184c72dfc232cd59f8f2f84129a.png";
import imgEllipse3 from "figma:asset/99a9bcb78d7ad81616acf70ef636fa18e350771b.png";
import imgEllipse2 from "figma:asset/942a2637ed853c6facc4d40de3c412857e540994.png";
import imgEllipse5 from "figma:asset/b533a098dd7cca8f93a8cbe39215102f933b4276.png";
import imgEllipse6 from "figma:asset/a453903139ca5d04c8e3351141fdc833a70a50cc.png";
import imgEllipse7 from "figma:asset/dd04c8918c4627be221de20d699737d0182fe126.png";
import imgEllipse8 from "figma:asset/c94e2a88e6d76d70793338583fac4ace9fd7478c.png";
import imgEllipse9 from "figma:asset/f503bdecfcc3d12f615f1972d087cd18b35c759b.png";
import imgEllipse11 from "figma:asset/6f58d2fde067eb9e2187a614a7b5db843eabadbf.png";

function KeyboardArrowDown({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div 
      className="relative shrink-0 size-[20px]" 
      data-name="keyboard-arrow-down"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="keyboard-arrow-down">
          <path d={svgPaths.p345be780} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </motion.div>
  );
}

function Header({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <div 
      className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer select-none" 
      data-name="Header"
      onClick={toggle}
    >
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">
        <span className="leading-[20px] text-[#a7c1cd]">#</span>
        <span className="leading-[20px]"> </span>
        <span className="leading-[20px] text-[#cfd9de]">Canales sugeridos</span>
      </p>
      <KeyboardArrowDown isOpen={isOpen} />
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

function Description({ text }: { text: string }) {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">{text}</p>
    </div>
  );
}

function Stats({ members, posts, avatars }: { members: string; posts: string; avatars: string[] }) {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Container">
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
          <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">{members}</p>
          <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]">
          <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">{posts}</p>
          <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Avatar Group">
        {avatars.map((avatar, i) => (
          <div key={i} className="absolute size-[24px] top-0" style={{ left: i * 16 }}>
            <img alt="" className="block max-w-none size-full rounded-full border border-[#182831]" src={avatar} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ image, title, description, members, posts, avatars }: any) {
  return (
    <div className="h-[184px] relative rounded-[16px] shrink-0 w-[328px] overflow-hidden group shadow-lg" data-name="Card">
      <ImageWithFallback
        src={image}
        className="absolute inset-0 object-cover size-full group-hover:scale-110 transition-transform duration-700"
        alt={title}
      />
      {/* Increased overlay opacity from 50% to 80% for better contrast */}
      <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors duration-300" />
      <div className="absolute inset-0 p-5 flex flex-col">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mb-auto">
          <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">
            <span className="leading-[20px] text-[#cfd9de]">#</span>
            <span className="leading-[20px]">{` ${title}`}</span>
          </p>
          <ArrowForward />
        </div>
        <Description text={description} />
        <Stats members={members} posts={posts} avatars={avatars} />
      </div>
    </div>
  );
}

function IconButton({ onClick, side }: { onClick: () => void, side: "left" | "right" }) {
  return ( side === "right" ? (
    <div 
      className="absolute bg-white content-stretch flex items-center p-[8px] right-[-12px] rounded-full top-1/2 -translate-y-1/2 cursor-pointer z-30 shadow-xl hover:scale-110 transition-all active:scale-95" 
      data-name="Icon Button"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="arrow-forward">
            <path d={svgPaths.p1da7a880} fill="#182831" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  ) : (
    <div 
      className="absolute bg-white content-stretch flex items-center p-[8px] left-[-12px] rounded-full top-1/2 -translate-y-1/2 cursor-pointer z-30 shadow-xl hover:scale-110 transition-all active:scale-95" 
      data-name="Icon Button"
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[16px] rotate-180">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="arrow-forward">
            <path d={svgPaths.p1da7a880} fill="#182831" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  )
  );
}

export default function CarroucelDeCanalesSugeridos() {
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ left: false, right: true });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10
      });
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [isOpen]);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 344, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -344, behavior: "smooth" });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full" data-name="carroucel de canales sugeridos">
      <Header isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            className="relative shrink-0 w-[calc(100%+48px)] -ml-[24px] px-[24px] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { duration: 0.15, ease: "easeOut" } 
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "top" }}
          >
            <div className="relative w-full">
              <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className="content-stretch flex gap-[16px] items-start overflow-x-auto no-scrollbar relative w-full h-[184px] pr-10" 
                style={{ scrollSnapType: "x mandatory" }}
              >
                <div style={{ scrollSnapAlign: "start" }}>
                  <Card 
                    image="https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2OTU5NDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    title="Inteligencia artificial"
                    description="Explora nuestro canal de IA, el más grande e increíble de habla hispana"
                    members="3.2K"
                    posts="867"
                    avatars={[imgEllipse4, imgEllipse3, imgEllipse2]}
                  />
                </div>
                <div style={{ scrollSnapAlign: "start" }}>
                  <Card 
                    image="https://images.unsplash.com/photo-1765408217662-7d93f79b0edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3JlYXRpdmUlMjBjb25jZXB0fGVufDF8fHx8MTc2OTYyOTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    title="Arte con IA"
                    description="Crea imágenes impresionantes con el poder de la IA como un Heroe"
                    members="4.1K"
                    posts="1.2K"
                    avatars={[imgEllipse5, imgEllipse6, imgEllipse7]}
                  />
                </div>
                <div style={{ scrollSnapAlign: "start" }}>
                  <Card 
                    image="https://images.unsplash.com/photo-1638818835387-2b212c0b540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjBmaW5hbmNlfGVufDF8fHx8MTc2OTYyOTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    title="Criptomonedas"
                    description="Explora nuestro canal Crypto el mas grande e increíble de habla hispana!"
                    members="3.2K"
                    posts="867"
                    avatars={[imgEllipse5, imgEllipse6, imgEllipse7]}
                  />
                </div>
                <div style={{ scrollSnapAlign: "start" }}>
                   <Card 
                    image="https://images.unsplash.com/photo-1761850167081-473019536383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZmluYW5jZSUyMHRyYWRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY5NjI5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    title="Finanzas Digitales"
                    description="Aprende a gestionar tu capital en el mundo digital con herramientas de IA"
                    members="1.5K"
                    posts="234"
                    avatars={[imgEllipse11, imgEllipse8, imgEllipse9]}
                  />
                </div>
              </div>

              {/* Dynamic Gradients */}
              <AnimatePresence>
                {scrollState.left && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[#182831] to-transparent pointer-events-none z-20" 
                  />
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {scrollState.right && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[#182831] to-transparent pointer-events-none z-20" 
                  />
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {scrollState.right && <IconButton onClick={scrollNext} side="right" />}
              {scrollState.left && <IconButton onClick={scrollPrev} side="left" />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
