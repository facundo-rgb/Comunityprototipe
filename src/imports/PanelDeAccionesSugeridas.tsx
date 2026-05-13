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
        <p className="font-['Monument_Grotesk:Medium',sans-serif] text-[18px] leading-snug tracking-tight text-white">
          Acciones sugeridas
        </p>
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
      title: "Date a conocer completando tu perfil",
      description:
        "Te guiaremos paso a paso para que lo hagas de la mejor manera y te presentes bien a la comunidad.",
      badge: "Badge de iniciación",
      hasTrophy: true
    },
    {
      title: "Explora los canales fundamentales",
      content: (
        <ul className="mt-2 space-y-2.5 pl-1 font-['Figtree:Regular',sans-serif] text-[15px] leading-relaxed tracking-[0.02em] text-[#e8eef1]">
          <li className="list-disc pl-5 marker:text-[#7ee2b8]">
            <span className="cursor-pointer text-[#8ec8ff] underline decoration-[#8ec8ff]/50 underline-offset-2 hover:text-white">
              #IAHeroes
            </span>
            <span>: el espacio donde la comunidad habla de inteligencia artificial.</span>
          </li>
          <li className="list-disc pl-5 marker:text-[#7ee2b8]">
            <span className="cursor-pointer text-[#8ec8ff] underline decoration-[#8ec8ff]/50 underline-offset-2 hover:text-white">
              #IAHeroes14
            </span>
            <span>: canal de tu promoción y cohorte (grupo de formación).</span>
          </li>
        </ul>
      )
    },
    {
      title: "Lee y aprende las reglas de la comunidad",
      description:
        "Lee las reglas desde aquí. Después te haremos un breve cuestionario para confirmar que las conoces.",
      badge: "#Desbloqueo especial",
      hasTrophy: false
    }
  ];

  const percentage = (completedSteps / steps.length) * 100;

  return (
    <div 
      className="flex w-full flex-col items-stretch gap-5 rounded-[inherit] bg-transparent px-5 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-5" 
      data-name="Panel de acciones sugeridas"
    >
      <Header 
        isOpen={isOpen} 
        toggle={() => setIsOpen(!isOpen)} 
        percentage={percentage} 
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
            <div className="flex gap-6 border-t border-white/[0.08] pt-6">
              {/* Timeline */}
              <div className="flex flex-col items-center shrink-0">
                {steps.map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <StepIcon completed={completedSteps > index} />
                    {index < steps.length - 1 && (
                      <div className="relative h-[88px] w-px shrink-0">
                        <TimelineLine active={completedSteps > index + 1} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Steps Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-7">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex gap-2.5 items-baseline">
                      <span className="shrink-0 font-['Monument_Grotesk:Medium',sans-serif] text-[15px] tabular-nums text-[#7ee2b8]">
                        {index + 1}.
                      </span>
                      <p className="min-w-0 font-['Monument_Grotesk:Medium',sans-serif] text-[16px] leading-snug text-white">
                        {step.title}
                      </p>
                    </div>
                    
                    {step.description && (
                      <p className="ml-0 pl-7 font-['Figtree:Regular',sans-serif] text-[14px] leading-relaxed text-[#cfd9de] sm:text-[15px]">
                        {step.description}
                      </p>
                    )}
                    
                    {step.content && (
                       <div className="ml-0 pl-4 sm:pl-6">{step.content}</div>
                    )}

                    {step.badge && (
                      <div className="mt-1 flex items-center gap-2 pl-7">
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
