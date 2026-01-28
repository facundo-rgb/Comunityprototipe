import React, { useState } from "react";
import { NavBar, Frame37, Frame40 } from "@/imports/FeedPrincipal";
import SearchOverlay from "@/app/components/SearchOverlay";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-[#182831] min-h-screen text-white font-['Monument_Grotesk',sans-serif]">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Main Content Area */}
      <main className="pt-[120px] pb-20">
        <div className="mx-[10vw]">
          {/* Two Column Layout: 60% / 40% with 40px gap */}
          <div className="grid grid-cols-[60fr_40fr] gap-[40px] items-start">
            
            {/* Left Column (60%) */}
            <div className="min-w-0 flex flex-col gap-[40px]">
              <Frame37 onSearchClick={() => setIsSearchOpen(true)} />
            </div>

            {/* Right Column (40%) */}
            <div className="min-w-0 flex flex-col gap-[24px]">
              <Frame40 />
            </div>

          </div>
        </div>
      </main>

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </div>
  );
}
