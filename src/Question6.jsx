import { useState, useEffect } from 'react';

export function ZenosParadox() {
    const [achillesPosition, setAchillesPosition] = useState(0);
    const [tortoisePosition, setTortoisePosition] = useState(50);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setAchillesPosition(prev => {
                const newPosition = prev + (tortoisePosition - prev) / 2;
                return newPosition >= 100 ? 0 : newPosition;
            });
            setTortoisePosition(prev => {
                const newPosition = prev + 1;
                return newPosition >= 100 ? 0 : newPosition;
            });
        }, 1000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, [tortoisePosition]);

    return (
        <div>
            <div style={{ position: 'relative', height: '100px', width: '100%', fontSize: '32px' }}>
                <div style={{ position: 'absolute', left: `${achillesPosition}%`, transition: 'left 1s' }}>
                    🏃‍♂️
                </div>
                <div style={{ position: 'absolute', left: `${tortoisePosition}%`, transition: 'left 1s' }}>
                    🐢
                </div>
            </div>
            <button onClick={() => clearInterval(intervalId)}>Stop</button>
        </div>
    );
}