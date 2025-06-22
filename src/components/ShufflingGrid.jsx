import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example items — you can replace these with any JSX content
const initialItems = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    color: `hsl(${i * 40}, 70%, 60%)`
}));

// Utility to shuffle array
const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const ShufflingGrid = () => {
    const [items, setItems] = useState(initialItems);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prev) => shuffle(prev));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <AnimatePresence>
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="h-24 rounded-xl shadow-md"
                        style={{ backgroundColor: item.color }}
                    />
                ))}
                
            </AnimatePresence>
        </div>
    );
};

export default ShufflingGrid;
