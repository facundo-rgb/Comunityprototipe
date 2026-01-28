import svgPaths from "./svg-b2w0u0kwd8";
import imgEllipse4 from "figma:asset/d4e6e7f5fff5e184c72dfc232cd59f8f2f84129a.png";
import imgEllipse3 from "figma:asset/99a9bcb78d7ad81616acf70ef636fa18e350771b.png";
import imgEllipse2 from "figma:asset/942a2637ed853c6facc4d40de3c412857e540994.png";
import imgEllipse5 from "figma:asset/b533a098dd7cca8f93a8cbe39215102f933b4276.png";
import imgEllipse6 from "figma:asset/a453903139ca5d04c8e3351141fdc833a70a50cc.png";
import imgEllipse7 from "figma:asset/dd04c8918c4627be221de20d699737d0182fe126.png";
import CarroucelDeCanalesSugeridos from "@/imports/CarroucelDeCanalesSugeridos";

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p1735d3f0} fill="var(--fill-0, #ADB6BA)" id="icon" stroke="var(--stroke-0, #ADB6BA)" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative shrink-0" data-name="Search Bar">
      <Search />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#adb6ba] text-[16px] tracking-[0.1px]">Buscar canales, challenges, eventos, personas...</p>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Search Container">
      <SearchBar />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="sticky top-0 z-20 bg-[#182831] w-full pt-6 pb-4" data-name="Sticky Header Wrapper">
      <div className="bg-[#142129] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Header Container">
        <SearchContainer />
      </div>
    </div>
  );
}

function GeneralChannelsTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="General Channels Title">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]">Canales Generales</p>
    </div>
  );
}

function GeneralChannelsDescription() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="General Channels Description">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.5px]">Canales comunes para todos los estudiantes de Learning Heroes, sin importar su formación.</p>
    </div>
  );
}

function GeneralChannelsHeader() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="General Channels Header">
      <GeneralChannelsTitle />
      <GeneralChannelsDescription />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 14">
      <GeneralChannelsHeader />
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0.01%]" data-name="Capa_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9971 16.4892">
        <g id="Capa_1-2">
          <path d={svgPaths.p31cd0100} fill="var(--fill-0, #CFD9DE)" id="Vector" />
          <path d={svgPaths.p2e07ce00} fill="var(--fill-0, #CFD9DE)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GeneralChannelIcon() {
  return (
    <div className="h-[16.489px] overflow-clip relative shrink-0 w-[16px]" data-name="General Channel Icon">
      <Capa />
    </div>
  );
}

function GeneralChannelItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="General Channel Item">
      <GeneralChannelIcon />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]">Café Learning Heroes</p>
    </div>
  );
}

function Capa1() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0.01%]" data-name="Capa_1-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9971 16.4892">
        <g id="Capa_1-2">
          <path d={svgPaths.p31cd0100} fill="var(--fill-0, #CFD9DE)" id="Vector" />
          <path d={svgPaths.p2e07ce00} fill="var(--fill-0, #CFD9DE)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GeneralChannelIcon1() {
  return (
    <div className="h-[16.489px] overflow-clip relative shrink-0 w-[16px]" data-name="General Channel Icon">
      <Capa1 />
    </div>
  );
}

function GeneralChannelItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="General Channel Item">
      <GeneralChannelIcon1 />
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]">Ideas y feedback para la plataforma</p>
    </div>
  );
}

function GeneralChannelsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="General Channels Container">
      <Component />
      <GeneralChannelItem />
      <GeneralChannelItem1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(36, 63, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1232 1">
            <path d="M0 0.5H1232" id="Vector 13" stroke="var(--stroke-0, #243F4C)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AiChannelsTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AI Channels Title">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]">Inteligencia artificial</p>
    </div>
  );
}

function AiChannelsDescription() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="AI Channels Description">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#a7c1cd] text-[16px] tracking-[0.5px]">Aquí encontrarás todos los canales de tu formación de inteligencia artificial.</p>
    </div>
  );
}

function AiChannelsHeader() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="AI Channels Header">
      <AiChannelsTitle />
      <AiChannelsDescription />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 15">
      <AiChannelsHeader />
    </div>
  );
}

function AiChannelItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]" data-name="AI Channel Item">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] relative shrink-0">#</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] relative shrink-0">Café Inteligencia Artificial</p>
    </div>
  );
}

function AiChannelItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]" data-name="AI Channel Item">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] relative shrink-0">#</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] relative shrink-0">IAHeroes14</p>
    </div>
  );
}

function AiChannelItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]" data-name="AI Channel Item">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] relative shrink-0">#</p>
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] relative shrink-0">Ayuda</p>
    </div>
  );
}

function AiChannelsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="AI Channels Container">
      <Component1 />
      <AiChannelItem />
      <AiChannelItem1 />
      <AiChannelItem2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(36, 63, 76, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1232 1">
            <path d="M0 0.5H1232" id="Vector 13" stroke="var(--stroke-0, #243F4C)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SuggestedChannelsTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channels Title">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]">Canales sugeridos</p>
    </div>
  );
}

function SuggestedChannelsHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Suggested Channels Header">
      <SuggestedChannelsTitle />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 15">
      <SuggestedChannelsHeader />
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

function SuggestedChannelHeaderText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[20px] text-white">
        <span className="leading-[24px] text-[#cfd9de]">#</span>
        <span className="leading-[24px]">{` Generación de imagen`}</span>
      </p>
      <ArrowForward />
    </div>
  );
}

function SuggestedChannelHeader() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText />
    </div>
  );
}

function SuggestedChannelDescription() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal de IA, el más grande e increíble de habla hispana.</p>
    </div>
  );
}

function SuggestedChannelContributorsCount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function SuggestedChannelContributors() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
    </div>
  );
}

function SuggestedChannelPostsCount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function SuggestedChannelPosts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function SuggestedChannelStatsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors />
      <SuggestedChannelPosts />
    </div>
  );
}

function SuggestedChannelAvatars() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer />
      <SuggestedChannelAvatars />
    </div>
  );
}

function Card() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 1">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/4cc80f97669ed65efddf14644ad61d2b939bbcfe" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader />
      <SuggestedChannelDescription />
      <SuggestedChannelStats />
    </div>
  );
}

function ArrowForward1() {
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

function SuggestedChannelHeaderText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]"># Café IA</p>
      <ArrowForward1 />
    </div>
  );
}

function SuggestedChannelHeader1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText1 />
    </div>
  );
}

function SuggestedChannelDescription1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">¡Tu dosis diaria de cafeína y código en español!</p>
    </div>
  );
}

function SuggestedChannelContributorsCount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">1.2K</p>
    </div>
  );
}

function SuggestedChannelContributors1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount1 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
    </div>
  );
}

function SuggestedChannelPostsCount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">345</p>
    </div>
  );
}

function SuggestedChannelPosts1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount1 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function SuggestedChannelStatsContainer1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors1 />
      <SuggestedChannelPosts1 />
    </div>
  );
}

function SuggestedChannelAvatars1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats1() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer1 />
      <SuggestedChannelAvatars1 />
    </div>
  );
}

function Card3() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[334px]" data-name="Card 4">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/4cc80f97669ed65efddf14644ad61d2b939bbcfe" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader1 />
      <SuggestedChannelDescription1 />
      <SuggestedChannelStats1 />
    </div>
  );
}

function ArrowForward2() {
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

function SuggestedChannelHeaderText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#cfd9de] text-[20px]"># Arte con IA</p>
      <ArrowForward2 />
    </div>
  );
}

function SuggestedChannelHeader2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText2 />
    </div>
  );
}

function SuggestedChannelDescription2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">¡Únete a la comunidad de IA más grande y vibrante en español!</p>
    </div>
  );
}

function SuggestedChannelContributorsCount2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">4.1K</p>
    </div>
  );
}

function SuggestedChannelContributors2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount2 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Miembros</p>
    </div>
  );
}

function SuggestedChannelPostsCount2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">1.2K</p>
    </div>
  );
}

function SuggestedChannelPosts2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount2 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function SuggestedChannelStatsContainer2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors2 />
      <SuggestedChannelPosts2 />
    </div>
  );
}

function SuggestedChannelAvatars2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats2() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer2 />
      <SuggestedChannelAvatars2 />
    </div>
  );
}

function Card4() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[334px]" data-name="Card 5">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/4cc80f97669ed65efddf14644ad61d2b939bbcfe" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader2 />
      <SuggestedChannelDescription2 />
      <SuggestedChannelStats2 />
    </div>
  );
}

function ArrowForward3() {
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

function SuggestedChannelHeaderText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[20px] text-white">
        <span className="leading-[24px] text-[#cfd9de]">#</span>
        <span className="leading-[24px]">{` Generación de imagen`}</span>
      </p>
      <ArrowForward3 />
    </div>
  );
}

function SuggestedChannelHeader3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText3 />
    </div>
  );
}

function SuggestedChannelDescription3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal de IA el mas grande e increíble de habla hispana!</p>
    </div>
  );
}

function SuggestedChannelContributorsCount3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function SuggestedChannelContributors3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount3 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Contribuidores</p>
    </div>
  );
}

function SuggestedChannelPostsCount3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function SuggestedChannelPosts3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount3 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Publicaciones</p>
    </div>
  );
}

function SuggestedChannelStatsContainer3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors3 />
      <SuggestedChannelPosts3 />
    </div>
  );
}

function SuggestedChannelAvatars3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse4} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse3} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse2} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats3() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer3 />
      <SuggestedChannelAvatars3 />
    </div>
  );
}

function Card5() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[334px]" data-name="Card 6">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/4cc80f97669ed65efddf14644ad61d2b939bbcfe" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader3 />
      <SuggestedChannelDescription3 />
      <SuggestedChannelStats3 />
    </div>
  );
}

function ArrowForward4() {
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

function SuggestedChannelHeaderText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Medium',sans-serif] font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[20px] text-white tracking-[0.1px]">
        <span className="leading-[24px] text-[#cfd9de]">#</span>
        <span className="leading-[24px]">{` Musica-con-ia`}</span>
      </p>
      <ArrowForward4 />
    </div>
  );
}

function SuggestedChannelHeader4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText4 />
    </div>
  );
}

function SuggestedChannelDescription4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal Crypto el mas grande e increíble de habla hispana!</p>
    </div>
  );
}

function SuggestedChannelContributorsCount4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function SuggestedChannelContributors4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount4 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Contribuidores</p>
    </div>
  );
}

function SuggestedChannelPostsCount4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function SuggestedChannelPosts4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount4 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Posts</p>
    </div>
  );
}

function SuggestedChannelStatsContainer4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors4 />
      <SuggestedChannelPosts4 />
    </div>
  );
}

function SuggestedChannelAvatars4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse5} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse6} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse7} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats4() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer4 />
      <SuggestedChannelAvatars4 />
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 2">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/46c7421773009678780c46260e9cbffe5ae36810" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader4 />
      <SuggestedChannelDescription4 />
      <SuggestedChannelStats4 />
    </div>
  );
}

function ArrowForward5() {
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

function SuggestedChannelHeaderText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Suggested Channel Header Text">
      <p className="css-ew64yg font-['Monument_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.1px]">
        <span className="leading-[20px] text-[#cfd9de]">#</span>
        <span className="leading-[20px]">{` Criptomonedas`}</span>
      </p>
      <ArrowForward5 />
    </div>
  );
}

function SuggestedChannelHeader5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[16px] top-0 w-[328px]" data-name="Suggested Channel Header">
      <SuggestedChannelHeaderText5 />
    </div>
  );
}

function SuggestedChannelDescription5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 px-[16px] top-[52px] w-[328px]" data-name="Suggested Channel Description">
      <p className="css-4hzbpn font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px] w-[270px]">Explora nuestro canal Crypto el mas grande e increíble de habla hispana!</p>
    </div>
  );
}

function SuggestedChannelContributorsCount5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Contributors Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">3.2K</p>
    </div>
  );
}

function SuggestedChannelContributors5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Contributors">
      <SuggestedChannelContributorsCount5 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Contribuidores</p>
    </div>
  );
}

function SuggestedChannelPostsCount5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Suggested Channel Posts Count">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white tracking-[0.5px]">867</p>
    </div>
  );
}

function SuggestedChannelPosts5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[101px]" data-name="Suggested Channel Posts">
      <SuggestedChannelPostsCount5 />
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#cfd9de] text-[14px] tracking-[0.5px]">Posts</p>
    </div>
  );
}

function SuggestedChannelStatsContainer5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Suggested Channel Stats Container">
      <SuggestedChannelContributors5 />
      <SuggestedChannelPosts5 />
    </div>
  );
}

function SuggestedChannelAvatars5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56px]" data-name="Suggested Channel Avatars">
      <div className="absolute left-0 size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse5} width="24" />
      </div>
      <div className="absolute left-[16px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse6} width="24" />
      </div>
      <div className="absolute left-[32px] size-[24px] top-0">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse7} width="24" />
      </div>
    </div>
  );
}

function SuggestedChannelStats5() {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center justify-center left-0 p-[16px] top-[112px]" data-name="Suggested Channel Stats">
      <SuggestedChannelStatsContainer5 />
      <SuggestedChannelAvatars5 />
    </div>
  );
}

function Card2() {
  return (
    <div className="h-[184px] relative rounded-[8px] shrink-0 w-[328px]" data-name="Card 3">
      <video autoPlay className="absolute max-w-none object-cover rounded-[8px] size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/46c7421773009678780c46260e9cbffe5ae36810" />
      </video>
      <div className="absolute h-[184px] left-0 rounded-[8px] top-0 w-[328px]" data-name="Suggested Channel Card Background" />
      <SuggestedChannelHeader5 />
      <SuggestedChannelDescription5 />
      <SuggestedChannelStats5 />
    </div>
  );
}

function Divider() {
  return <div className="absolute bg-gradient-to-l from-[#182831] h-[184px] right-0 to-[rgba(24,40,49,0)] top-0 w-[24px]" data-name="Divider" />;
}

function SuggestedChannelCard() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Suggested Channel Card">
      <Card />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card1 />
      <Card2 />
      <Divider />
    </div>
  );
}

function ArrowForward6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-forward">
          <path d={svgPaths.p1da7a880} fill="var(--fill-0, #182831)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[8px] right-[-16px] rounded-[96px] top-[74px]" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#243f4c] border-solid inset-0 pointer-events-none rounded-[96px] shadow-[0px_22px_6px_0px_rgba(0,0,0,0),0px_14px_6px_0px_rgba(0,0,0,0.01),0px_8px_5px_0px_rgba(0,0,0,0.05),0px_4px_4px_0px_rgba(0,0,0,0.09),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <ArrowForward6 />
    </div>
  );
}

function SuggestedChannelsList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Suggested Channels List">
      <SuggestedChannelCard />
      <IconButton />
    </div>
  );
}

function SuggestedChannelsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Suggested Channels Container">
      <Component2 />
      <SuggestedChannelsList />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Content Container">
      <GeneralChannelsContainer />
      <AiChannelsContainer />
      <CarroucelDeCanalesSugeridos />
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="bg-[#182831] content-stretch flex flex-col gap-[24px] items-start px-[24px] pb-[24px] relative rounded-[16px] size-full" data-name="Main Container">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}