import { motion } from "motion/react";

interface CanalTagLinkProps {
  name: string;
  isActive?: boolean;
}

export default function CanalTagLink({ name, isActive = false }: CanalTagLinkProps) {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className="content-stretch flex font-['Monument_Grotesk:Regular',sans-serif] gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[20px] cursor-pointer group" 
      data-name="canal-tag-link"
    >
      <motion.p 
        variants={{
          initial: { color: "#a7c1cd" },
          hover: { color: "#ffffff" }
        }}
        className="css-ew64yg relative shrink-0"
      >
        #
      </motion.p>
      <motion.p 
        variants={{
          initial: { color: isActive ? "#ffffff" : "#a7c1cd" },
          hover: { color: "#ffffff", x: 2 }
        }}
        className="css-ew64yg relative shrink-0 whitespace-nowrap"
      >
        {name}
      </motion.p>
      
      {/* Underline animation on hover */}
      <motion.div 
        className="absolute bottom-[-2px] left-0 right-0 h-[1px] bg-white origin-left"
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 0.5 }
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
