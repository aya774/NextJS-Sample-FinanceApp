"use client"
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl font-bold">Count: {count}</p>
            <div className="space-x-4">
                <button 
                    onClick={() => setCount(count + 1)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add 1
                </button>
                <button 
                    onClick={() => setCount(count - 1)} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Subtract 1
                </button>
            </div>
        </div>
    );
}
