import svgPaths from "../imports/svg-fjsqlw98qc";

export function StuntDoubleLogo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="size-[60px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <rect fill="#0A0A0A" height="60" width="60" />
          <path 
            clipRule="evenodd" 
            d={svgPaths.p3f2e5980} 
            fill="#ECEDEE" 
            fillRule="evenodd"
          />
        </svg>
      </div>
      <p 
        className="text-center whitespace-pre"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '22.4px',
          letterSpacing: '-0.36px',
          color: '#121212'
        }}
      >
        Sample web applications for testing AI agents
      </p>
    </div>
  );
}
