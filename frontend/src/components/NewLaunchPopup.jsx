import React, { useEffect, useMemo, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import launch from '@/config/newLaunch';

// Full-screen launch reveal: badges fly in and collide, flash + confetti, headline reveals,
// then the whole thing fades away on its own. Content comes from src/config/newLaunch.js.
const STORAGE_KEY = `adrun_new_launch_seen_${launch.id}`;
const EXIT_MS = 400;
const CONFETTI_COLORS = ['#F59E0B', '#FDE68A', '#FFFFFF', '#3B82F6', '#A855F7', '#FB7185'];

const markSeen = () => {
  if (!launch.showOnce) return;
  try {
    localStorage.setItem(STORAGE_KEY, '1');
  } catch (e) {
    /* storage unavailable: animation may replay, which is harmless */
  }
};

const NewLaunchPopup = () => {
  const [phase, setPhase] = useState('hidden'); // hidden | show | out

  const confetti = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        delay: 0.5 + Math.random() * 0.6,
        duration: 1.6 + Math.random() * 1,
        drift: (Math.random() - 0.5) * 240,
        spin: 360 + Math.random() * 720,
        round: i % 3 === 0,
      })),
    []
  );

  useEffect(() => {
    if (!launch.enabled) return undefined;
    let seen = false;
    if (launch.showOnce) {
      try {
        seen = localStorage.getItem(STORAGE_KEY) === '1';
      } catch (e) {
        seen = false;
      }
    }
    if (seen) return undefined;

    const timers = [
      setTimeout(() => setPhase('show'), launch.startDelayMs),
      setTimeout(() => setPhase('out'), launch.startDelayMs + launch.visibleMs),
      setTimeout(() => {
        setPhase('hidden');
        markSeen();
      }, launch.startDelayMs + launch.visibleMs + EXIT_MS),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const dismiss = () => {
    setPhase('out');
    setTimeout(() => {
      setPhase('hidden');
      markSeen();
    }, EXIT_MS);
  };

  const goToTarget = (e) => {
    e.stopPropagation();
    dismiss();
    setTimeout(() => {
      document.getElementById(launch.ctaTargetId)?.scrollIntoView({ behavior: 'smooth' });
    }, EXIT_MS);
  };

  if (phase === 'hidden') return null;

  const words = launch.headline.split(' ');

  return (
    <div
      className={`nl-overlay ${phase === 'out' ? 'nl-out' : ''} fixed inset-0 z-[70] flex items-center justify-center overflow-hidden`}
      style={{
        background:
          'radial-gradient(circle at 50% 42%, rgba(30,58,138,0.96) 0%, rgba(15,28,63,0.98) 55%, rgba(5,10,30,0.99) 100%)',
      }}
      onClick={dismiss}
      role="dialog"
      aria-label="New launch announcement"
    >
      {/* Rings + flash */}
      {[0, 0.9, 1.8].map((d) => (
        <span key={d} className="nl-ring" style={{ animationDelay: `${0.3 + d * 0.4}s` }} />
      ))}
      <span className="nl-flash" />

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="nl-piece"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.round ? c.size : c.size * 0.45,
              background: c.color,
              borderRadius: c.round ? '9999px' : '2px',
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              '--drift': `${c.drift}px`,
              '--spin': `${c.spin}deg`,
            }}
          />
        ))}
      </div>

      {/* Skip */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
        className="absolute top-5 right-5 flex items-center gap-1 text-sm text-white/70 hover:text-white z-10"
        aria-label="Skip announcement"
      >
        Skip <X size={18} />
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        <span className="nl-badge text-white text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] px-5 py-2 rounded-full">
          {launch.badge}
        </span>

        {/* Collision of the two badges */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mt-8">
          <div className="nl-left nl-glowcard bg-white rounded-2xl p-3 sm:p-4 w-36 h-28 sm:w-52 sm:h-36 flex items-center justify-center">
            <img src={launch.leftLogo} alt={launch.leftLabel} className="max-h-full max-w-full object-contain" />
          </div>

          <span className="nl-cross text-4xl sm:text-6xl font-black text-[#F59E0B] drop-shadow-[0_0_20px_rgba(245,158,11,0.9)]">
            ×
          </span>

          <div
            className="nl-right nl-glowcard rounded-2xl w-36 h-28 sm:w-52 sm:h-36 flex flex-col items-center justify-center border-4 border-[#F59E0B]"
            style={{ background: 'linear-gradient(135deg, #4C1D95, #6D28D9)' }}
          >
            <span className="text-white text-xl sm:text-3xl font-black tracking-wide leading-none">
              {launch.rightMain}
            </span>
            <span className="text-[#FDE68A] text-[9px] sm:text-xs font-bold tracking-widest mt-2">
              {launch.rightSub}
            </span>
          </div>
        </div>

        {/* Headline, word by word */}
        <h2 className="mt-10 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
          {words.map((w, i) => (
            <span
              key={`${w}-${i}`}
              className={`nl-word mr-3 ${i === words.length - 1 ? 'text-[#F59E0B]' : ''}`}
              style={{ animationDelay: `${0.8 + i * 0.08}s` }}
            >
              {w}
            </span>
          ))}
        </h2>

        <p className="nl-sub mt-4 text-base sm:text-lg text-gray-300 max-w-xl">{launch.subtitle}</p>

        <button
          onClick={goToTarget}
          className="nl-cta mt-8 inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-3 rounded-full text-base sm:text-lg"
        >
          {launch.ctaLabel} <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default NewLaunchPopup;
