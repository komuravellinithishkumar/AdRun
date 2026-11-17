// Edit this file to announce the next launch. Nothing else needs to change.
// Change `id` for every new launch so browsers that already saw the old one see the new one.
const newLaunch = {
  enabled: true,                    // false hides the animation completely
  id: 'sn-pride-mall-2026-11',      // unique per launch
  showOnce: false,                  // false: plays on every page load. true: once per browser per id
  badge: 'New Launch',
  headline: 'Collaboration Unlocked',
  subtitle: 'AdRun Advertising & Media × SN Pride Mall & Multiplex, Karimnagar. A new era of mall advertising.',
  leftLogo: '/adrun-logo.png',      // image shown on the left badge
  leftLabel: 'AdRun',
  rightMain: 'SN PRIDE',            // text on the right (partner) badge
  rightSub: 'MALL & MULTIPLEX',
  ctaLabel: 'Explore Mall Advertising',
  ctaTargetId: 'projects',          // id of the section the button scrolls to
  startDelayMs: 200,
  visibleMs: 3200,                  // time on screen before it fades away by itself
};

export default newLaunch;
