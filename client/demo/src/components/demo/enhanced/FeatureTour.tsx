import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPlay, 
    faTimes, 
    faArrowRight, 
    faArrowLeft,
    faMicrophone,
    faRobot,
    faVolumeUp,
    faChartLine,
    faGlobe,
    faCloudUploadAlt
} from "@fortawesome/free-solid-svg-icons";
import { useMessageBuilder } from "../../../hooks/useMessageBuilder";

interface FeatureTourProps {
    onComplete: () => void;
}

interface TourStep {
    title: string;
    description: string;
    icon: any;
    features: string[];
}

export const FeatureTour: React.FC<FeatureTourProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const messageBuilderState = useMessageBuilder();

    // Initialize translations
    useMemo(() => {
        messageBuilderState.setMessage(__filename, "welcome_title", {
            en: "Welcome to Voice Changer Demo",
            ja: "ボイスチェンジャーデモへようこそ",
            ko: "음성 변환기 데모에 오신 것을 환영합니다",
            zh: "欢迎使用语音转换器演示",
            de: "Willkommen zur Voice Changer Demo",
            es: "Bienvenido a la Demo del Cambiador de Voz",
            fr: "Bienvenue dans la Démo du Changeur de Voix",
            it: "Benvenuto nella Demo del Voice Changer",
            ru: "Добро пожаловать в демо Voice Changer",
            ar: "مرحباً بك في عرض مغير الصوت"
        });
        messageBuilderState.setMessage(__filename, "next", {
            en: "Next",
            ja: "次へ",
            ko: "다음",
            zh: "下一步",
            de: "Weiter",
            es: "Siguiente",
            fr: "Suivant",
            it: "Avanti",
            ru: "Далее",
            ar: "التالي"
        });
        messageBuilderState.setMessage(__filename, "previous", {
            en: "Previous",
            ja: "前へ",
            ko: "이전",
            zh: "上一步",
            de: "Zurück",
            es: "Anterior",
            fr: "Précédent",
            it: "Indietro",
            ru: "Назад",
            ar: "السابق"
        });
        messageBuilderState.setMessage(__filename, "start_demo", {
            en: "Start Demo",
            ja: "デモ開始",
            ko: "데모 시작",
            zh: "开始演示",
            de: "Demo starten",
            es: "Iniciar Demo",
            fr: "Démarrer la démo",
            it: "Avvia Demo",
            ru: "Начать демо",
            ar: "بدء العرض"
        });
        messageBuilderState.setMessage(__filename, "skip_tour", {
            en: "Skip Tour",
            ja: "ツアーをスキップ",
            ko: "투어 건너뛰기",
            zh: "跳过导览",
            de: "Tour überspringen",
            es: "Saltar Tour",
            fr: "Passer le tour",
            it: "Salta Tour",
            ru: "Пропустить тур",
            ar: "تخطي الجولة"
        });
    }, []);

    const tourSteps: TourStep[] = useMemo(() => [
        {
            title: messageBuilderState.getMessage(__filename, "welcome_title") || "Welcome to Voice Changer Demo",
            description: "Experience real-time AI-powered voice conversion with multiple models and advanced features.",
            icon: faPlay,
            features: [
                "Real-time voice conversion",
                "Multiple AI models",
                "Advanced audio processing",
                "Multilingual interface"
            ]
        },
        {
            title: "AI Models Showcase",
            description: "Choose from various AI models including RVC, Beatrice v2, MMVC, and more.",
            icon: faRobot,
            features: [
                "RVC - High quality conversion",
                "Beatrice v2 - Advanced neural networks",
                "MMVC - Lightweight and fast",
                "Performance metrics for each model"
            ]
        },
        {
            title: "Real-time Audio Processing",
            description: "Record your voice or upload audio files for instant conversion.",
            icon: faMicrophone,
            features: [
                "Live microphone recording",
                "Audio file upload support",
                "Real-time waveform visualization",
                "Instant playback of results"
            ]
        },
        {
            title: "Voice Effects & Controls",
            description: "Fine-tune your voice with pitch, formant, and volume controls.",
            icon: faVolumeUp,
            features: [
                "Pitch adjustment (-12 to +12)",
                "Formant shifting",
                "Volume control",
                "Real-time parameter changes"
            ]
        },
        {
            title: "Performance Analytics",
            description: "Monitor processing time, latency, and quality metrics in real-time.",
            icon: faChartLine,
            features: [
                "Processing time tracking",
                "Latency measurement",
                "Quality score analysis",
                "Performance optimization tips"
            ]
        },
        {
            title: "Multilingual Support",
            description: "Use the demo in your preferred language with full translations.",
            icon: faGlobe,
            features: [
                "10+ supported languages",
                "Dynamic language switching",
                "Localized interface",
                "Cultural adaptations"
            ]
        }
    ], [messageBuilderState]);

    const handleNext = () => {
        if (currentStep < tourSteps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            completeTour();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const completeTour = () => {
        setIsVisible(false);
        setTimeout(() => {
            onComplete();
        }, 300);
    };

    if (!isVisible) return null;

    const currentTourStep = tourSteps[currentStep];

    return (
        <div className="feature-tour-overlay">
            <div className="feature-tour">
                <button className="tour-close" onClick={completeTour}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="tour-content">
                    <div className="tour-icon">
                        <FontAwesomeIcon icon={currentTourStep.icon} />
                    </div>

                    <h2>{currentTourStep.title}</h2>
                    <p className="tour-description">{currentTourStep.description}</p>

                    <div className="tour-features">
                        {currentTourStep.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <span className="feature-bullet">•</span>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="tour-progress">
                        <div className="progress-bar">
                            <div 
                                className="progress-fill"
                                style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                            />
                        </div>
                        <span className="progress-text">
                            {currentStep + 1} / {tourSteps.length}
                        </span>
                    </div>

                    <div className="tour-navigation">
                        <button 
                            className="tour-btn secondary"
                            onClick={handlePrevious}
                            disabled={currentStep === 0}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            {messageBuilderState.getMessage(__filename, "previous")}
                        </button>

                        <button className="tour-btn skip" onClick={completeTour}>
                            {messageBuilderState.getMessage(__filename, "skip_tour")}
                        </button>

                        <button className="tour-btn primary" onClick={handleNext}>
                            {currentStep === tourSteps.length - 1 
                                ? messageBuilderState.getMessage(__filename, "start_demo")
                                : messageBuilderState.getMessage(__filename, "next")
                            }
                            <FontAwesomeIcon icon={currentStep === tourSteps.length - 1 ? faPlay : faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .feature-tour-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                    animation: fadeIn 0.3s ease-out;
                }

                .feature-tour {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .tour-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: white;
                    transition: all 0.3s ease;
                    z-index: 10;
                }

                .tour-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }

                .tour-content {
                    padding: 40px;
                    text-align: center;
                    color: white;
                }

                .tour-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                    color: rgba(255, 255, 255, 0.9);
                }

                .tour-content h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .tour-description {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }

                .tour-features {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 30px;
                    text-align: left;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                    font-size: 1.1rem;
                    line-height: 1.5;
                }

                .feature-item:last-child {
                    margin-bottom: 0;
                }

                .feature-bullet {
                    color: #4ecdc4;
                    font-weight: bold;
                    margin-right: 12px;
                    font-size: 1.5rem;
                }

                .tour-progress {
                    margin-bottom: 30px;
                }

                .progress-bar {
                    height: 6px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #4ecdc4, #45b7d1);
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .progress-text {
                    font-size: 0.9rem;
                    opacity: 0.8;
                    font-weight: 600;
                }

                .tour-navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                }

                .tour-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 20px;
                    border: none;
                    border-radius: 25px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .tour-btn.primary {
                    background: linear-gradient(45deg, #4ecdc4, #45b7d1);
                    color: white;
                    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);
                }

                .tour-btn.primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(78, 205, 196, 0.6);
                }

                .tour-btn.secondary {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }

                .tour-btn.secondary:hover:not(:disabled) {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }

                .tour-btn.secondary:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .tour-btn.skip {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                }

                .tour-btn.skip:hover {
                    color: white;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (max-width: 768px) {
                    .feature-tour {
                        width: 95%;
                        margin: 20px;
                    }
                    
                    .tour-content {
                        padding: 30px 25px;
                    }
                    
                    .tour-content h2 {
                        font-size: 2rem;
                    }
                    
                    .tour-navigation {
                        flex-direction: column;
                        gap: 10px;
                    }
                    
                    .tour-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
        </div>
    );
};