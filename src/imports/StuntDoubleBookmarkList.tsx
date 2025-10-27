import svgPaths from "./svg-fjsqlw98qc";

function StuntDoubleLogo() {
  return (
    <div className="h-px relative shrink-0 w-[180px]" data-name="StuntDoubleLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-px overflow-clip relative rounded-[inherit] w-[180px]">
        <p className="absolute bottom-1/4 font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-1/4 not-italic right-[-2.78%] text-[18px] text-black top-[20%]">STUNT DOUBLE</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="relative size-[60px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Logo">
          <rect fill="#0A0A0A" height="60" style={{ fill: "color(display-p3 0.0392 0.0392 0.0392)", fillOpacity: "1" }} width="60" />
          <path clipRule="evenodd" d={svgPaths.p3f2e5980} fill="var(--fill-0, #ECEDEE)" fillRule="evenodd" id="Outlines" style={{ fill: "color(display-p3 0.9255 0.9294 0.9333)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[22.398px] relative shrink-0 w-[409.141px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.398px] relative w-[409.141px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22.4px] left-[205.5px] not-italic text-[#121212] text-[18px] text-center text-nowrap top-[0.5px] tracking-[-0.36px] translate-x-[-50%] whitespace-pre">Sample web applications for testing AI agents</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <StuntDoubleLogo />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo />
        </div>
      </div>
      <Paragraph />
    </div>
  );
}

function AppIcon() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="AppIcon">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p10908f00} fill="var(--fill-0, #F1F5F9)" id="Vector" style={{ fill: "color(display-p3 0.9451 0.9608 0.9765)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bottom-[28.13%] left-1/4 right-1/4 top-[31.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
          <path d={svgPaths.p39fce00} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" style={{ fill: "black", fillOpacity: "0.8" }} />
        </svg>
      </div>
      <div className="absolute inset-[40.625%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.p3488a200} fill="var(--fill-0, #64748B)" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[28.13%_43.75%_65.63%_43.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
          <path d={svgPaths.p18337f00} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" style={{ fill: "black", fillOpacity: "0.8" }} />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[48px]">
        <AppIcon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22.4px] not-italic relative shrink-0 text-[#121212] text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">Checkout</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Untitled_Sans:Regular',_sans-serif] leading-[18.2px] left-0 not-italic text-[14px] text-nowrap text-slate-500 top-px whitespace-pre">An order summary page with multiple payment methods</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[46.195px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[46.195px] items-start relative w-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function BookmarkCard() {
  return (
    <div className="bg-white h-[82px] relative rounded-[12px] shrink-0 w-full" data-name="BookmarkCard">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[82px] items-center px-[17px] py-px relative w-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function AppIcon1() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="AppIcon">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p10908f00} fill="var(--fill-0, #F1F5F9)" id="Vector" style={{ fill: "color(display-p3 0.9451 0.9608 0.9765)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[28.13%_28.13%_31.25%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <path d={svgPaths.p99b9200} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" style={{ fill: "black", fillOpacity: "0.8" }} />
        </svg>
      </div>
      <div className="absolute bottom-[28.13%] left-[46.88%] right-[46.88%] top-1/2" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
          <path d="M3 0H0V10.5H3V0Z" fill="var(--fill-0, #64748B)" fillOpacity="0.6" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "0.6" }} />
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[48px]">
        <AppIcon1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22.4px] not-italic relative shrink-0 text-[#121212] text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">Flights</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Untitled_Sans:Regular',_sans-serif] leading-[18.2px] left-0 not-italic text-[14px] text-nowrap text-slate-500 top-px whitespace-pre">{`Complex reasoning, search, and interaction `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[46.195px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[46.195px] items-start relative w-full">
        <Heading1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function BookmarkCard1() {
  return (
    <div className="bg-white h-[82px] relative rounded-[12px] shrink-0 w-full" data-name="BookmarkCard">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[82px] items-center px-[17px] py-px relative w-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function AppIcon2() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="AppIcon">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p10908f00} fill="var(--fill-0, #F1F5F9)" id="Vector" style={{ fill: "color(display-p3 0.9451 0.9608 0.9765)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[34.38%_28.13%_28.13%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
          <path d={svgPaths.p22cf0d80} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" style={{ fill: "black", fillOpacity: "0.8" }} />
        </svg>
      </div>
      <div className="absolute inset-[28.13%_28.13%_56.25%_28.13%]" data-name="Vector">
        <div className="absolute inset-[-13.33%_-4.76%_-13.34%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 10">
            <path d={svgPaths.p1c3bd298} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.75%_43.75%_46.88%_43.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.p1ead2900} fill="var(--fill-0, #64748B)" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[48px]">
        <AppIcon2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22.4px] not-italic relative shrink-0 text-[#121212] text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">Shop</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Untitled_Sans:Regular',_sans-serif] leading-[18.2px] left-0 not-italic text-[14px] text-nowrap text-slate-500 top-px whitespace-pre">Product browsing and decision making</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[46.195px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[46.195px] items-start relative w-full">
        <Heading2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function BookmarkCard2() {
  return (
    <div className="bg-white h-[82px] relative rounded-[12px] shrink-0 w-full" data-name="BookmarkCard">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[82px] items-center px-[17px] py-px relative w-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function AppIcon3() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="AppIcon">
      <div className="absolute inset-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p10908f00} fill="var(--fill-0, #F1F5F9)" id="Vector" style={{ fill: "color(display-p3 0.9451 0.9608 0.9765)", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[31.25%_28.13%_28.13%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <path d={svgPaths.p3967f980} fill="var(--fill-0, black)" fillOpacity="0.8" id="Vector" style={{ fill: "black", fillOpacity: "0.8" }} />
        </svg>
      </div>
      <div className="absolute inset-[37.5%_53.13%_53.13%_34.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.p1ead2900} fill="var(--fill-0, #64748B)" fillOpacity="0.7" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "0.7" }} />
        </svg>
      </div>
      <div className="absolute inset-[37.5%_34.38%_53.13%_53.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.p1ead2900} fill="var(--fill-0, #64748B)" fillOpacity="0.7" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "0.7" }} />
        </svg>
      </div>
      <div className="absolute inset-[53.13%_53.13%_37.5%_34.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.p1ead2900} fill="var(--fill-0, #64748B)" fillOpacity="0.7" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "0.7" }} />
        </svg>
      </div>
      <div className="absolute inset-[53.13%_34.38%_37.5%_53.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path d={svgPaths.p1ead2900} fill="var(--fill-0, #64748B)" fillOpacity="0.7" id="Vector" style={{ fill: "color(display-p3 0.3922 0.4549 0.5451)", fillOpacity: "0.7" }} />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[48px]">
        <AppIcon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[22.4px] not-italic relative shrink-0 text-[#121212] text-[18px] text-nowrap tracking-[-0.36px] whitespace-pre">Company intranet</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18.195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Untitled_Sans:Regular',_sans-serif] leading-[18.2px] left-0 not-italic text-[14px] text-nowrap text-slate-500 top-px whitespace-pre">Authenticated app for testing sign-in workflows</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[46.195px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[46.195px] items-start relative w-full">
        <Heading3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function BookmarkCard3() {
  return (
    <div className="bg-white h-[82px] relative rounded-[12px] shrink-0 w-full" data-name="BookmarkCard">
      <div aria-hidden="true" className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[82px] items-center px-[17px] py-px relative w-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function BookmarkList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[364px] items-start relative shrink-0 w-full" data-name="BookmarkList">
      <BookmarkCard />
      <BookmarkCard1 />
      <BookmarkCard2 />
      <BookmarkCard3 />
    </div>
  );
}

export default function StuntDoubleBookmarkList() {
  return (
    <div className="bg-white relative size-full" data-name="Stunt Double Bookmark List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pb-0 pt-[64px] px-[272px] relative size-full">
          <Header />
          <BookmarkList />
        </div>
      </div>
    </div>
  );
}