import { AppIcon } from './AppIcon';

interface Bookmark {
  id: number;
  title: string;
  url: string;
  description: string;
  iconType: 'checkout' | 'flights' | 'shop' | 'intranet';
}

interface BookmarkCardProps {
  bookmark: Bookmark;
}

export function BookmarkCard({ bookmark }: BookmarkCardProps) {
  const handleClick = () => {
    window.open(`https://${bookmark.url}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="bg-white h-[82px] relative rounded-xl shrink-0 w-full cursor-pointer transition-all duration-200"
      onClick={handleClick}
      style={{
        backgroundColor: 'var(--card)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--card)';
      }}
    >
      <div 
        aria-hidden="true" 
        className="absolute border border-solid inset-0 pointer-events-none rounded-xl"
        style={{ borderColor: 'var(--border)' }}
      />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-4 h-[82px] items-center px-[17px] py-px relative w-full">
          <div className="relative shrink-0 size-12">
            <AppIcon type={bookmark.iconType} />
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-1 items-start relative w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <p 
                  className="relative shrink-0 text-nowrap whitespace-pre"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '22.4px',
                    letterSpacing: '-0.36px',
                    color: '#121212'
                  }}
                >
                  {bookmark.title}
                </p>
              </div>
              <div className="relative shrink-0 w-full">
                <p 
                  className="text-nowrap whitespace-pre"
                  style={{
                    fontFamily: 'Untitled Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '18.2px',
                    color: '#64748B'
                  }}
                >
                  {bookmark.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
