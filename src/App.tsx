import { useState } from 'react';
import { BookmarkList } from './components/BookmarkList';
import { StuntDoubleLogo } from './components/StuntDoubleLogo';

export default function App() {
  const [bookmarks] = useState([
    {
      id: 1,
      title: 'Checkout',
      url: 'checkout.demo.stuntdouble.dev',
      description: 'An order summary page with multiple payment methods',
      iconType: 'checkout' as const
    },
    {
      id: 2,
      title: 'Flights',
      url: 'flights.demo.stuntdouble.dev',
      description: 'Complex reasoning, search, and interaction',
      iconType: 'flights' as const
    },
    {
      id: 3,
      title: 'Shop',
      url: 'shop.demo.stuntdouble.dev',
      description: 'Product browsing and decision making',
      iconType: 'shop' as const
    },
    {
      id: 4,
      title: 'Company intranet',
      url: 'intranet.demo.stuntdouble.dev',
      description: 'Authenticated app for testing sign-in workflows',
      iconType: 'intranet' as const
    }
  ]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center pb-16 pt-16 px-6 relative size-full max-w-3xl mx-auto">
          <StuntDoubleLogo />
          <div className="w-full flex flex-col gap-6">
            <BookmarkList bookmarks={bookmarks} />
            <div 
              className="bg-white h-[82px] relative rounded-xl shrink-0 w-full cursor-pointer transition-all duration-200"
              onClick={() => {
                window.location.href = 'mailto:founders@stuntdouble.io?subject=New App Suggestion';
              }}
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
                    <div className="h-12 overflow-clip relative shrink-0 w-12">
                      <div className="absolute inset-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                          <path d="M0 0H48V48H0V0Z" fill="#F1F5F9" />
                        </svg>
                      </div>
                      <div className="absolute inset-[37.5%]">
                        <svg className="block size-full" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 0H7V12H5V0Z" fill="black" fillOpacity="0.8" />
                          <path d="M12 5V7H0V5H12Z" fill="black" fillOpacity="0.8" />
                        </svg>
                      </div>
                    </div>
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
                          Suggest a new app
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
                          Share your ideas with the team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="w-full pt-6">
              <p
                className="text-center"
                style={{
                  fontFamily: 'Untitled Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '18.2px',
                  color: 'var(--muted-foreground)'
                }}
              >
                These are sample applications designed to help test and train AI agents. Built by{' '}
                <a
                  href="https://stuntdouble.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                  style={{
                    color: 'var(--muted-foreground)'
                  }}
                >
                  stuntdouble.io
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
