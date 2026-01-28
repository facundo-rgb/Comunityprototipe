import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-na3ht4iq9d";

function ProgressIconContainer({ percentage }: { percentage: number }) {
  // Simple circular progress logic
  const radius = 7;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative shrink-0 size-[16px]" data-name="Progress Icon Container">
      <svg className="block size-full" viewBox="0 0 16 16">
        {/* Background circle */}
        <circle 
          cx="8" 
          cy="8" 
          r={radius} 
          fill="none" 
          stroke="#142129" 
          strokeWidth="2" 
        />
        {/* Progress circle */}
        <motion.circle 
          cx="8" 
          cy="8" 
          r={radius} 
          fill="none" 
          stroke="#2ABB7F" 
          strokeWidth="2" 
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          strokeLinecap="round"
          transform="rotate(-90 8 8)"
        />
      </svg>
    </div>
  );
}

function ProgressContainer({ percentage }: { percentage: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Progress Container">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7ee2b8] text-[16px] tracking-[0.1px]">
        {Math.round(percentage)}%
      </p>
      <ProgressIconContainer percentage={percentage} />
    </div>
  );
}

function Header({ isOpen, toggle, percentage }: { isOpen: boolean; toggle: () => void; percentage: number }) {
  return (
    <div 
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full cursor-pointer select-none" 
      data-name="Header"
      onClick={toggle}
    >
      <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Header Container">
        <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white">Acciones sugeridas</p>
        <ProgressContainer percentage={percentage} />
      </div>
      <motion.div 
        className="relative shrink-0 size-[20px]" 
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="keyboard-arrow-down">
            <path d={svgPaths.p345be780} fill="var(--fill-0, white)" id="icon" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

function StepIcon({ completed }: { completed: boolean }) {
  return (
    <div 
      className={`relative rounded-full shrink-0 size-[16px] flex items-center justify-center transition-colors duration-300 ${completed ? 'bg-[#1f845a]' : 'bg-transparent'}`} 
      data-name="Step Icon Container"
    >
      <div aria-hidden="true" className={`absolute border border-solid inset-0 rounded-full transition-colors duration-300 ${completed ? 'border-[#4bce97]' : 'border-white'}`} />
      <AnimatePresence>
        {completed && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="size-[12px]"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path d={svgPaths.p2f540dc0} fill="white" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TimelineLine({ active }: { active: boolean }) {
  return (
    <div className="w-[1px] h-full relative">
       <div 
        className={`absolute inset-0 transition-colors duration-500 ${active ? 'bg-[#4BCE97]' : 'bg-white/20'}`} 
      />
    </div>
  );
}

export default function PanelDeAccionesSugeridas() {
  const [isOpen, setIsOpen] = useState(true);
  const [completedSteps, setCompletedSteps] = useState(2); // Start at 66% as in the original

  const steps = [
    {
      title: "Date a conocer completando tu perfil:",
      description: "Te guiaremos paso a paso, para lo hagas de la mejor manerae te presentes",
      badge: "Badget de iniciación",
      hasTrophy: true
    },
    {
      title: "Explora los canales fundamentales:",
      content: (
        <ul className="block font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[0px] tracking-[0.5px] w-full mt-[6px]">
          <li className="css-4hzbpn mb-0 ms-[1.5em] list-disc">
            <span className="text-[#579dff] underline cursor-pointer">#IAHeroes</span>
            <span className="leading-[24px] text-[16px] text-white"> : el canal donde todo Learning Heroes habla de inteligencia artificial</span>
          </li>
          <li className="css-4hzbpn ms-[1.5em] list-disc">
            <span className="text-[#579dff] underline cursor-pointer">#IAHeroes14: </span>
            <span className="leading-[24px] text-[16px] text-white">el canal de tu promoción especifica (ESTO QUIERO EN GRUPO)</span>
          </li>
        </ul>
      )
    },
    {
      title: "Lee y apréndete las reglas de la comunidad",
      description: "Lee las reglas haciendo click aqui. te haremos un breve cuestionario para evaluar si las sabes",
      badge: "#Desbloqueo especial",
      hasTrophy: false
    }
  ];

  const percentage = (completedSteps / steps.length) * 100;

  // Toggle function for testing states
  const cycleStates = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don't close dropdown when cycling
    setCompletedSteps((prev) => (prev + 1) % (steps.length + 1));
  };

  return (
    <div 
      className="bg-[#1c303b] content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[8px] w-full border border-[#2a5266]" 
      data-name="Panel de acciones sugeridas"
    >
      <Header 
        isOpen={isOpen} 
        toggle={() => setIsOpen(!isOpen)} 
        percentage={percentage} 
      />
      
      {/* State Cycler (Hidden/Transparent for user testing) */}
      <div 
        className="absolute top-2 right-12 size-4 opacity-0 cursor-pointer z-50" 
        onClick={cycleStates}
        title="Cycle states for testing"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="w-full overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex gap-[24px] pt-[24px]">
              {/* Timeline */}
              <div className="flex flex-col items-center shrink-0">
                {steps.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <StepIcon completed={completedSteps > index} />
                    {index < steps.length - 1 && (
                      <div className="h-[120px]">
                        <TimelineLine active={completedSteps > index + 1} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Steps Content */}
              <div className="flex flex-col gap-[24px] flex-1">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-[6px]">
                    <div className="flex gap-[8px] items-start">
                      <span className="font-['Monument_Grotesk:Medium',sans-serif] text-[16px] text-white leading-[20px]">{index + 1}.</span>
                      <p className="font-['Monument_Grotesk:Medium',sans-serif] text-[16px] text-white leading-[20px]">
                        {step.title}
                      </p>
                    </div>
                    
                    {step.description && (
                      <p className="font-['Figtree:Regular',sans-serif] text-[14px] text-white/80 leading-[22px] ml-[24px]">
                        {step.description}
                      </p>
                    )}
                    
                    {step.content && (
                       <div className="ml-[12px]">{step.content}</div>
                    )}

                    {step.badge && (
                      <div className="flex items-center gap-[4px] ml-[24px] mt-[4px]">
                        {step.hasTrophy && (
                          <div className="size-[16px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                              <path d={svgPaths.p398af6f0} fill="#7EE2B8" />
                            </svg>
                          </div>
                        )}
                        <span className="font-['Monument_Grotesk:Bold',sans-serif] text-[14px] text-[#7EE2B8]">
                          {step.badge}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
