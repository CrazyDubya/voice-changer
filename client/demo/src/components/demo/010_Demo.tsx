import React, { useState } from "react";
import { GuiStateProvider } from "./001_GuiStateProvider";
import { Dialogs } from "./900_Dialogs";
import { ModelSlotControl } from "./b00_ModelSlotControl";
import { Dialogs2 } from "./910_Dialogs2";
import { EnhancedDemo } from "./enhanced/EnhancedDemo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

export const Demo = () => {
    const [useEnhancedDemo, setUseEnhancedDemo] = useState(true);

    const toggleDemo = () => {
        setUseEnhancedDemo(!useEnhancedDemo);
    };

    if (useEnhancedDemo) {
        return (
            <div>
                <div style={{ 
                    position: 'fixed', 
                    top: '20px', 
                    right: '20px', 
                    zIndex: 1000,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 15px',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }} onClick={toggleDemo}>
                    <FontAwesomeIcon icon={useEnhancedDemo ? faToggleOn : faToggleOff} />
                    Enhanced Demo
                </div>
                <EnhancedDemo />
            </div>
        );
    }

    return (
        <div>
            <div style={{ 
                position: 'fixed', 
                top: '20px', 
                right: '20px', 
                zIndex: 1000,
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '10px',
                padding: '10px 15px',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }} onClick={toggleDemo}>
                <FontAwesomeIcon icon={useEnhancedDemo ? faToggleOn : faToggleOff} />
                Enhanced Demo
            </div>
            <GuiStateProvider>
                <div className="main-body">
                    <Dialogs2 />
                    <Dialogs />
                    <ModelSlotControl></ModelSlotControl>
                </div>
            </GuiStateProvider>
        </div>
    );
};
