import { useEffect, useRef } from 'react';

interface AdSlotProps {
  position: 'top' | 'middle' | 'bottom';
  className?: string;
}

export function AdSlot({ position, className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Only push if not in dev and we are rendering the actual ad element
    if (import.meta.env.DEV) return;

    try {
      if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // In development/preview, show a placeholder. In production, show the ad.
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return (
      <div className={`w-full bg-slate-100/50 border border-slate-200 border-dashed rounded-2xl flex flex-col items-center justify-center p-4 my-8 text-slate-400 text-sm text-center min-h-[120px] ${className}`}>
        <span className="font-semibold mb-1">Advertisement ({position})</span>
        <span>AdSense Placeholder (Hidden in Production)</span>
      </div>
    );
  }

  return (
    <div className={`w-full my-8 flex justify-center overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9130359748917166"
        data-ad-slot="auto"
      />
    </div>
  );
}
