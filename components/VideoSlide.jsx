"use client";
import { useEffect, useRef } from 'react';

/**
 * VideoSlide – web-optimised local video player.
 *
 * Best practices applied:
 *  • <source type="video/mp4"> for explicit MIME negotiation
 *  • preload="auto" so the buffer is ready when the slide appears
 *  • autoPlay + muted + playsInline – required for autoplay policy compliance
 *  • Pause + reset on unmount to release the decoder when the slide leaves
 *  • will-change: transform on wrapper keeps the compositor layer isolated
 */
export default function VideoSlide({ src }) {
    const videoRef = useRef(null);

    // Pause & reset when slide navigates away (component unmounts)
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.play().catch(() => {}); // re-trigger play in case autoplay was deferred
        return () => {
            v.pause();
            v.currentTime = 0;
        };
    }, [src]);

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#0a0a0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            willChange: 'transform',     // isolated compositor layer
        }}>
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',    // remove inline-block gap
                }}
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}
