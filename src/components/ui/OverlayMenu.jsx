'use client'; 

import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 
import IconButton from './IconButton'; 

const OverlayMenu = ({ menuItems = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !event.target.closest('.overlay-menu-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen]);

    return (
        <div className="overlay-menu-container relative pointer-events-auto">
            {/* Desktop/Tablet Menu with INTENSE Purple Glow */}
            <nav className="hidden md:flex md:fixed md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 md:z-[1001]">
                <div 
                    className="
                        flex gap-6 text-base font-medium px-8 py-4 rounded-full
                        bg-black/0 backdrop-blur-lg border border-purple-400/30
                        relative overflow-hidden
                        transition-all duration-700 ease-out
                        hover:border-purple-300/50
                        group
                    "
                    style={{
                        boxShadow: `
                            0 0 20px rgba(147, 51, 234, 0.4),
                            0 0 40px rgba(147, 51, 234, 0.2),
                            0 0 80px rgba(147, 51, 234, 0.1),
                            inset 0 0 20px rgba(147, 51, 234, 0.1)
                        `
                    }}
                >
                    {/* Background glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-fuchsia-600/20 rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-full blur-md"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-violet-400/5 to-fuchsia-400/5 rounded-full blur-lg"></div>
                    
                    {/* Animated background on hover */}
                    <div className="
                        absolute inset-0 bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-fuchsia-500/30 
                        rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                    "></div>

                    {menuItems.map((item, index) => (
                        <a
                            key={item.href || index}
                            href={item.href}
                            onClick={(e) => {
                                if (!item.href) {
                                    e.preventDefault();
                                    item.onClick && item.onClick();
                                }
                            }}
                            className="
                                text-white/95 hover:text-white transition-all duration-300 ease-out cursor-pointer 
                                relative z-10 px-4 py-2 rounded-full font-semibold
                                group/item
                            "
                            style={{
                                textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                            }}
                        >
                            {item.label}
                            
                            {/* Item glow on hover */}
                            <div className="
                                absolute inset-0 rounded-full opacity-0 group-hover/item:opacity-100
                                bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30
                                blur-md transition-opacity duration-300 -z-10
                            "></div>
                            
                            {/* Animated underline with intense glow */}
                            <span 
                                className="
                                    absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                                    w-0 h-1 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400
                                    transition-all duration-300 group-hover/item:w-full rounded-full
                                "
                                style={{
                                    boxShadow: `
                                        0 0 10px rgba(147, 51, 234, 0.8),
                                        0 0 20px rgba(147, 51, 234, 0.4),
                                        0 0 40px rgba(147, 51, 234, 0.2)
                                    `
                                }}
                            ></span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <IconButton 
                onClick={toggleMenu} 
                className="fixed top-4 right-4 z-[1001] bg-white shadow-lg md:hidden cursor-pointer"
            >
                {isOpen ? (
                    <XMarkIcon className="h-8 w-8 text-gray-700 transform transition-transform duration-300 ease-in-out" />
                ) : (
                    <Bars3Icon className="h-8 w-8 text-gray-700 transform transition-transform duration-300 ease-in-out" />
                )}
            </IconButton>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-[1000] flex flex-col justify-center items-center 
                    transition-transform duration-500 ease-in-out pointer-events-auto md:hidden
                    bg-gradient-to-br from-black/0 via-purple-900/20 to-black/0
                    backdrop-blur-lg
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Mobile background glow */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 70%),
                            radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)
                        `
                    }}
                ></div>
                
                <nav className="flex flex-col gap-6 text-2xl font-medium relative z-10">
                    {menuItems.map((item, index) => (
                        <a
                            key={item.href || index}
                            href={item.href}
                            onClick={(e) => {
                                setIsOpen(false);
                                if (!item.href) {
                                    e.preventDefault();
                                    item.onClick && item.onClick();
                                }
                            }}
                            className="
                                text-white/95 hover:text-white transition-all duration-300 ease-out 
                                cursor-pointer text-center py-4 px-12 rounded-full font-semibold
                                hover:bg-purple-500/20 hover:backdrop-blur-sm
                                relative group/mobile border border-purple-400/20
                                hover:border-purple-300/40
                            "
                            style={{
                                textShadow: '0 0 15px rgba(147, 51, 234, 0.7)',
                                boxShadow: `
                                    0 0 15px rgba(147, 51, 234, 0.2),
                                    inset 0 0 15px rgba(147, 51, 234, 0.05)
                                `
                            }}
                        >
                            {item.label}
                            
                            {/* Mobile intense glow effect */}
                            <div className="
                                absolute inset-0 rounded-full opacity-0 group-hover/mobile:opacity-100
                                bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-fuchsia-500/20
                                blur-lg transition-opacity duration-300 -z-10
                            "></div>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default OverlayMenu;

//tesss