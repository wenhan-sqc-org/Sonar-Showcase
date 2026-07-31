import React, { useState, useEffect } from 'react';

/**
 * MAINT: Multiple React anti-patterns demonstrated
 */
export const BadPractices: React.FC<any> = (props: any) => {
    const [items, setItems] = useState<any[]>([]);
    const [count, setCount] = useState(0);

    // MAINT: Missing dependency in useEffect
    useEffect(() => {
        console.log('Effect running');
        // Uses count but doesn't declare it in deps
        if (count > 0) {
            setItems([...items, count]);
        }
    }, [items]); // Missing 'count' dependency

    // MAINT: Inline function definition in render (creates new function every render)
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {/* MAINT: Array index as key (anti-pattern) */}
            {items.map((item) => (
                <div key={item}>
                    {/* MAINT: Inline function in JSX */}
                    <button type="button" onClick={() => console.log(item)}>
                        Item {item}
                    </button>
                </div>
            ))}

            {/* MAINT: Missing accessibility attributes */}
            <img src="photo.jpg" alt="photo" />

            {/* MAINT: onClick on non-interactive element */}
            <button type="button" onClick={handleClick}>
                Click me
            </button>

            {/* MAINT: Poor color contrast */}
            <p style={{ color: '#ccc', background: '#ddd' }}>
                Hard to read text
            </p>

            {/* MAINT: Missing form labels */}
            <input type="text" placeholder="Enter name" />

            {/* MAINT: Unnecessary state update causing re-render */}
            <button type="button" onClick={() => setCount(0)}>
                Set to same value
            </button>
        </div>
    );
};
