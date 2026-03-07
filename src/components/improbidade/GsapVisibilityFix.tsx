'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Ensures GSAP ScrollTrigger animations fire reliably in Next.js.
 * - Refreshes ScrollTrigger after hydration (fixes position miscalculation)
 * - Handles background-tab visibility changes
 * - Nuclear failsafe: forces all opacity-0 elements visible after timeout
 */
export default function GsapVisibilityFix() {
  useEffect(() => {
    // 1) Refresh ScrollTrigger after hydration settles (images, fonts, layout shifts)
    const refresh1 = setTimeout(() => ScrollTrigger.refresh(), 300);
    const refresh2 = setTimeout(() => ScrollTrigger.refresh(), 1000);
    const refresh3 = setTimeout(() => ScrollTrigger.refresh(), 2000);

    // 2) Nuclear failsafe: after 4s, force-complete any ScrollTrigger animations
    //    that haven't fired yet (elements still at opacity 0)
    const failsafe = setTimeout(() => {
      ScrollTrigger.getAll().forEach((st) => {
        const anim = st.animation;
        if (anim && anim.progress() === 0) {
          // Animation hasn't played at all — force it to complete
          anim.progress(1);
        }
      });
      // Also find any orphaned elements with opacity 0 from gsap.from() calls
      const selectors = [
        '.about-title', '.about-text', '.about-info', '.audience-card',
        '.diff-header', '.diff-card', '.prog-day', '.prog-module',
        '.speaker-card',
        '.loc-label', '.loc-title', '.loc-desc', '.loc-card', '.loc-phone', '.loc-map',
        '.test-header', '.test-card',
        '.inst-title', '.inst-logo',
        '.gallery-title', '.gallery-photo',
        '.inv-header', '.inv-card', '.inv-payment', '.inv-faq',
        '.kit-text > *', '.kit-check', '.kit-image',
        '.footer-logo', '.footer-contact',
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          const style = window.getComputedStyle(el);
          if (style.opacity === '0') {
            gsap.to(el, { opacity: 1, y: 0, scale: 1, x: 0, duration: 0.5, ease: 'power2.out' });
          }
        });
      });
    }, 4000);

    // 3) Handle tab visibility changes (background-tab animation freeze)
    let wasHidden = document.hidden;
    const handleVisibilityChange = () => {
      if (wasHidden && !document.hidden) {
        // Tab just became visible
        gsap.globalTimeline.getChildren(true, true, false).forEach((tween) => {
          if (!tween.isActive() && tween.progress() < 1 && tween.progress() > 0) {
            tween.progress(1);
          }
        });
        ScrollTrigger.refresh();
        // Also force-complete stale ScrollTriggers
        ScrollTrigger.getAll().forEach((st) => {
          const anim = st.animation;
          if (anim && anim.progress() === 0) {
            anim.progress(1);
          }
        });
      }
      wasHidden = document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(refresh1);
      clearTimeout(refresh2);
      clearTimeout(refresh3);
      clearTimeout(failsafe);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
