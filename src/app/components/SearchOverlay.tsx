import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import MainContainer from "@/imports/MainContainer";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[100px] px-[10vw] bg-black/60 backdrop-blur-sm overflow-y-auto pb-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-[1280px] bg-[#182831] rounded-[16px] border border-[#243f4c] shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-[#a7c1cd] hover:text-white transition-colors z-10 p-2"
            >
              <X size={24} />
            </button>

            {/* Content from MainContainer (the search results) */}
            <div className="px-8 pb-8 max-h-[80vh] overflow-y-auto custom-scrollbar pt-0">
              <MainContainer />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
