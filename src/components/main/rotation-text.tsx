'use client'

import { useState, useEffect } from 'react';

export default function RotatingText() {
    const texts = ["Na era digital", "com inovação", "com tecnologia"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Muda a cada 2 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, [texts.length]);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">SEU NEGÓCIO:</span>
            <div className="relative h-6 overflow-hidden">
                <div
                    className="absolute transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateY(-${currentIndex * 100}%)` }}
                >
                    {texts.map((text, index) => (
                        <div key={index} className="h-6">
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
