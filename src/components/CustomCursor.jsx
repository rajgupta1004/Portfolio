import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * High-tech, futuristic cyber cursor with:
 * - Electric cyan central pinpoint dot
 * - Fluid-lagging outer HUD ring with cyber tick accents
 * - Ultra-lightweight micro-comet trailing particles (60-120fps RAF, 0 React re-renders)
 * - Intelligent hover states for buttons, links, inputs, and project cards
 * - Touch & coarse pointer safety (completely disabled on mobile/touch)
 * - prefers-reduced-motion compliance
 * - pointer-events: none (zero interference with user interaction)
 */
const CustomCursor = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);

  // Store coordinates in refs to prevent React re-renders on mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef([
    { x: -100, y: -100 },
    { x: -100, y: -100 },
    { x: -100, y: -100 },
  ]);
  const isVisible = useRef(false);
  const isReducedMotion = useRef(false);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad) and hover capability
    const pointerFineMedia = window.matchMedia('(pointer: fine) and (hover: hover)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkSupport = () => {
      setIsEnabled(pointerFineMedia.matches);
      isReducedMotion.current = reducedMotionMedia.matches;
    };

    checkSupport();

    const handlePointerChange = (e) => setIsEnabled(e.matches);
    const handleMotionChange = (e) => {
      isReducedMotion.current = e.matches;
    };

    if (pointerFineMedia.addEventListener) {
      pointerFineMedia.addEventListener('change', handlePointerChange);
      reducedMotionMedia.addEventListener('change', handleMotionChange);
    } else {
      pointerFineMedia.addListener(handlePointerChange);
      reducedMotionMedia.addListener(handleMotionChange);
    }

    return () => {
      if (pointerFineMedia.removeEventListener) {
        pointerFineMedia.removeEventListener('change', handlePointerChange);
        reducedMotionMedia.removeEventListener('change', handleMotionChange);
      } else {
        pointerFineMedia.removeListener(handlePointerChange);
        reducedMotionMedia.removeListener(handleMotionChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        // Snap ring and trails to initial mouse position to avoid fly-in artifact
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        trailPositions.current.forEach((t) => {
          t.x = e.clientX;
          t.y = e.clientY;
        });
        if (containerRef.current) {
          containerRef.current.classList.add('is-visible');
        }
      }
    };

    const handleMouseDown = () => {
      if (containerRef.current) {
        containerRef.current.classList.add('is-active');
      }
    };

    const handleMouseUp = () => {
      if (containerRef.current) {
        containerRef.current.classList.remove('is-active');
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (containerRef.current) {
        containerRef.current.classList.remove('is-visible');
      }
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (containerRef.current) {
        containerRef.current.classList.add('is-visible');
      }
    };

    // Refined hover detection for links, buttons, inputs, and project cards
    const handleMouseOver = (e) => {
      if (!containerRef.current) return;
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const clickable = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, summary, label, [tabindex]:not([tabindex="-1"]), .cursor-pointer'
      );
      const isCard = target.closest(
        '#projects .glass, #education .glass, #about .glass, .glass-card, [data-card]'
      );
      const isText = target.closest(
        'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea'
      );

      containerRef.current.classList.toggle('is-hovered', !!clickable && !isCard);
      containerRef.current.classList.toggle('is-card-hovered', !!isCard && !clickable);
      containerRef.current.classList.toggle('is-card-btn-hovered', !!isCard && !!clickable);
      containerRef.current.classList.toggle('is-text', !!isText);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Ultra-smooth 60-120fps animation loop using direct DOM transform styling
    const render = () => {
      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // 1. Dot moves instantly with zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }

      // 2. Ring follows with smooth fluid lerp (or snaps instantly if reduced motion)
      if (isReducedMotion.current) {
        ringPos.current.x = mx;
        ringPos.current.y = my;
      } else {
        const ringLerp = 0.18;
        ringPos.current.x += (mx - ringPos.current.x) * ringLerp;
        ringPos.current.y += (my - ringPos.current.y) * ringLerp;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // 3. Minimal trailing micro-nodes (fluid trailing cyber tracer)
      if (!isReducedMotion.current) {
        const trailLerps = [0.36, 0.24, 0.16];
        let prevX = mx;
        let prevY = my;

        trailPositions.current.forEach((trail, index) => {
          trail.x += (prevX - trail.x) * trailLerps[index];
          trail.y += (prevY - trail.y) * trailLerps[index];
          prevX = trail.x;
          prevY = trail.y;

          const trailEl = trailRefs.current[index];
          if (trailEl) {
            trailEl.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
          }
        });
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="custom-cursor-container"
      aria-hidden="true"
    >
      {/* Fluid cyber tracer micro-nodes (minimal, zero-lag trailing) */}
      <div
        ref={(el) => (trailRefs.current[0] = el)}
        className="cursor-trail trail-1"
      />
      <div
        ref={(el) => (trailRefs.current[1] = el)}
        className="cursor-trail trail-2"
      />
      <div
        ref={(el) => (trailRefs.current[2] = el)}
        className="cursor-trail trail-3"
      />

      {/* Futuristic fluid outer ring with cyber HUD reticle accents */}
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-ring-reticle" />
      </div>

      {/* Sharp electric-blue/cyan central pinpoint dot */}
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
};

export default CustomCursor;
