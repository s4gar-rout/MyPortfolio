import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../styles/CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useGSAP(() => {
        // Disable tracking on mobile devices for performance
        if (window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const cursor = cursorRef.current;
        
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 3,
                backgroundColor: 'rgba(255, 106, 0, 0.2)',
                border: '1px solid #ff6a00'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: '#ff6a00',
                border: 'none'
            });
        };

        window.addEventListener('mousemove', moveCursor);
        
        const interactiveElements = document.querySelectorAll('a, button');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup was missed in my initial thought, useGSAP handles it partially but event listeners need careful removal or use context
        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
