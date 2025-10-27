import svgPaths from "../imports/svg-fjsqlw98qc";

interface AppIconProps {
  type: 'checkout' | 'flights' | 'shop' | 'intranet';
}

export function AppIcon({ type }: AppIconProps) {
  const icons = {
    checkout: (
      <div className="h-12 overflow-clip relative shrink-0 w-12">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p10908f00} fill="#F1F5F9" />
          </svg>
        </div>
        <div className="absolute bottom-[28.13%] left-1/4 right-1/4 top-[31.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
            <path d={svgPaths.p39fce00} fill="black" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute inset-[40.625%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3488a200} fill="#64748B" />
          </svg>
        </div>
        <div className="absolute inset-[28.13%_43.75%_65.63%_43.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 3">
            <path d={svgPaths.p18337f00} fill="black" fillOpacity="0.8" />
          </svg>
        </div>
      </div>
    ),
    flights: (
      <div className="h-12 overflow-clip relative shrink-0 w-12">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p10908f00} fill="#F1F5F9" />
          </svg>
        </div>
        <div className="absolute inset-[28.13%_28.13%_31.25%_28.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.p99b9200} fill="black" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute bottom-[28.13%] left-[46.88%] right-[46.88%] top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
            <path d="M3 0H0V10.5H3V0Z" fill="#64748B" fillOpacity="0.6" />
          </svg>
        </div>
      </div>
    ),
    shop: (
      <div className="h-12 overflow-clip relative shrink-0 w-12">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p10908f00} fill="#F1F5F9" />
          </svg>
        </div>
        <div className="absolute inset-[34.38%_28.13%_28.13%_28.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 18">
            <path d={svgPaths.p22cf0d80} fill="black" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute inset-[28.13%_28.13%_56.25%_28.13%]">
          <div className="absolute inset-[-13.33%_-4.76%_-13.34%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 10">
              <path d={svgPaths.p1c3bd298} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[43.75%_43.75%_46.88%_43.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p1ead2900} fill="#64748B" />
          </svg>
        </div>
      </div>
    ),
    intranet: (
      <div className="h-12 overflow-clip relative shrink-0 w-12">
        <div className="absolute inset-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p10908f00} fill="#F1F5F9" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_28.13%_28.13%_28.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.p3967f980} fill="black" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="absolute inset-[37.5%_53.13%_53.13%_34.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p1ead2900} fill="#64748B" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-[37.5%_34.38%_53.13%_53.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p1ead2900} fill="#64748B" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-[53.13%_53.13%_37.5%_34.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p1ead2900} fill="#64748B" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="absolute inset-[53.13%_34.38%_37.5%_53.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
            <path d={svgPaths.p1ead2900} fill="#64748B" fillOpacity="0.7" />
          </svg>
        </div>
      </div>
    ),
  };

  return icons[type];
}
