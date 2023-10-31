import React, { useState, useEffect, useRef } from 'react';
import './Cloud.css';

function Cloud() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cloudRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const cloudWidth = cloudRef.current.offsetWidth;
        const cloudHeight = cloudRef.current.offsetHeight;

        const randomX = Math.random() * (windowWidth - cloudWidth);
        const randomY = Math.random() * (windowHeight - cloudHeight);

        setPosition({ x: randomX, y: randomY });
    }, []); // Le tableau vide signifie que cela se produit seulement une fois, après le montage initial du composant.

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={cloudRef}
            className='cloud'
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                position: 'absolute'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        ></div>
    );
}

export default Cloud;

