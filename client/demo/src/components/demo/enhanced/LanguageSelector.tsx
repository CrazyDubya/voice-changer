import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useMessageBuilder } from "../../../hooks/useMessageBuilder";

interface LanguageSelectorProps {
    onLanguageChange: (language: string) => void;
    currentLanguage: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
    onLanguageChange, 
    currentLanguage 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const messageBuilderState = useMessageBuilder();

    const languages = useMemo(() => [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' }
    ], []);

    // Initialize translations for the language selector itself
    useMemo(() => {
        messageBuilderState.setMessage(__filename, "select_language", {
            en: "Select Language",
            ja: "言語を選択",
            ko: "언어 선택",
            zh: "选择语言",
            de: "Sprache auswählen",
            es: "Seleccionar idioma",
            fr: "Sélectionner la langue",
            it: "Seleziona lingua",
            ru: "Выбрать язык",
            ar: "اختر اللغة"
        });
    }, []);

    const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

    return (
        <div className="language-selector">
            <div 
                className="language-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FontAwesomeIcon icon={faGlobe} />
                <span className="current-language">
                    {currentLang.flag} {currentLang.name}
                </span>
            </div>
            
            {isOpen && (
                <div className="language-dropdown">
                    <div className="language-dropdown-header">
                        {messageBuilderState.getMessage(__filename, "select_language")}
                    </div>
                    {languages.map((language) => (
                        <div
                            key={language.code}
                            className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
                            onClick={() => {
                                onLanguageChange(language.code);
                                setIsOpen(false);
                            }}
                        >
                            <span className="language-flag">{language.flag}</span>
                            <span className="language-name">{language.name}</span>
                        </div>
                    ))}
                </div>
            )}
            
            {isOpen && (
                <div 
                    className="language-overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <style jsx>{`
                .language-selector {
                    position: relative;
                    display: inline-block;
                }

                .language-trigger {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 15px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .language-trigger:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }

                .current-language {
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .language-dropdown {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    margin-top: 5px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    min-width: 200px;
                    z-index: 1000;
                    overflow: hidden;
                }

                .language-dropdown-header {
                    padding: 12px 15px;
                    background: rgba(0, 0, 0, 0.1);
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: #333;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }

                .language-option {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 15px;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                    color: #333;
                }

                .language-option:hover {
                    background: rgba(0, 0, 0, 0.1);
                }

                .language-option.active {
                    background: rgba(102, 126, 234, 0.2);
                    font-weight: 600;
                }

                .language-flag {
                    font-size: 1.2rem;
                }

                .language-name {
                    font-size: 0.9rem;
                }

                .language-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999;
                }
            `}</style>
        </div>
    );
};