import React, { useState } from "react";
import { NavBar, Frame37, Frame40 } from "@/imports/FeedPrincipal";
import SearchOverlay from "@/app/components/SearchOverlay";

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#182831] text-white font-['Monument_Grotesk',sans-serif]">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(12,148,148,0.14),transparent_52%),radial-gradient(ellipse_55%_45%_at_100%_35%,rgba(126,226,184,0.07),transparent_48%)]"
        aria-hidden
      />
      <NavBar />

      <main className="relative pt-[120px] pb-20">
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.75fr)] xl:gap-12 items-start">
            
            <div className="min-w-0 flex flex-col gap-12">
              <Frame37 onSearchClick={() => setIsSearchOpen(true)} />
            </div>

            <div className="min-w-0 flex flex-col gap-6">
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
