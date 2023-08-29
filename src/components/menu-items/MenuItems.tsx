import React, { useEffect, useState } from 'react'
import { Dropdown, Stack } from 'react-bootstrap';
import ItemList from './ItemList';
import './MenuItems.css'

function MenuItems() {
    const [visibleButtons, setVisibleButtons] = useState<string[]>(['Bundles', 'Salads', 'Hot Power Bowls', 'Vegan Menu', 'Rainbow Wraps', 'Smoothies, shakes & juice', 'Cold Drinks', 'Yoghurt & fruit']); // Buttons that should be visible
    const [optionNumber, setOptionNumber] = useState<number>(0);
    const [optionName, setOptionName] = useState<string>('More');
    const [scroll, setScroll] = useState<string>('');

    const handleResize = () => {
        const screenWidth = window.screen.width;
        if (screenWidth >= 1150) {
            setOptionNumber(0);
        } else if (screenWidth < 1150 && screenWidth >= 930) {
            setOptionNumber(2);
        } else if (screenWidth < 930 && screenWidth >= 850) {
            setOptionNumber(3);
        } else if (screenWidth < 850 && screenWidth >= 700) {
            setOptionNumber(4);
        } else if (screenWidth < 700 && screenWidth >= 590) {
            setOptionNumber(5);
        } else if (screenWidth < 590 && screenWidth >= 540) {
            setOptionNumber(6);
        } else {
            setOptionNumber(0);
        }
    };

    useEffect(() => {
        // Initial setup
        handleResize();
        // Update on window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToElement = (navName: string) => {
        setScroll(navName);
        setOptionName('More');
    };

    const scrollToElementDropDown = (navName: string) => {
        setScroll(navName);
        setOptionName(navName);
    };

    return (
        <>
            <div className="menu-items">
                <Stack id="menu-stack" direction="horizontal" gap={2}>
                    {visibleButtons.slice(0, visibleButtons.length - optionNumber).map(button => (
                        <button key={button} className="nav-button" onClick={() => scrollToElement(button)}>{button}</button>
                    ))}

                </Stack>
                {optionNumber > 0 && (
                    <div className="more-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {optionName}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {visibleButtons.slice(visibleButtons.length - optionNumber, visibleButtons.length).map(button => (
                                    <Dropdown.Item key={button} onClick={() => scrollToElementDropDown(button)}>{button}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                )}
            </div>
            <ItemList sectionName={scroll} />
        </>
    );
}

export default MenuItems