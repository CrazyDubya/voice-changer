import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faStar, faSpeedometer, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { useMessageBuilder } from "../../../hooks/useMessageBuilder";

interface ModelInfo {
    name: string;
    description: string;
    features: string[];
    performance: {
        speed: number;
        quality: number;
        compatibility: number;
    };
    supported: boolean;
}

interface ModelShowcaseProps {
    selectedModel: string;
    onModelSelect: (model: string) => void;
}

export const ModelShowcase: React.FC<ModelShowcaseProps> = ({ selectedModel, onModelSelect }) => {
    const messageBuilderState = useMessageBuilder();

    // Initialize translations
    useMemo(() => {
        messageBuilderState.setMessage("ModelShowcase", "ai_models", {
            en: "AI Models",
            ja: "AIモデル",
            ko: "AI 모델",
            zh: "AI模型",
            de: "KI-Modelle",
            es: "Modelos de IA",
            fr: "Modèles IA",
            it: "Modelli IA",
            ru: "ИИ модели",
            ar: "نماذج الذكاء الاصطناعي"
        });
        messageBuilderState.setMessage(__filename, "speed", {
            en: "Speed",
            ja: "速度",
            ko: "속도",
            zh: "速度",
            de: "Geschwindigkeit",
            es: "Velocidad",
            fr: "Vitesse",
            it: "Velocità",
            ru: "Скорость",
            ar: "السرعة"
        });
        messageBuilderState.setMessage(__filename, "quality", {
            en: "Quality",
            ja: "品質",
            ko: "품질",
            zh: "质量",
            de: "Qualität",
            es: "Calidad",
            fr: "Qualité",
            it: "Qualità",
            ru: "Качество",
            ar: "الجودة"
        });
        messageBuilderState.setMessage(__filename, "compatibility", {
            en: "Compatibility",
            ja: "互換性",
            ko: "호환성",
            zh: "兼容性",
            de: "Kompatibilität",
            es: "Compatibilidad",
            fr: "Compatibilité",
            it: "Compatibilità",
            ru: "Совместимость",
            ar: "التوافق"
        });
    }, []);

    const models: ModelInfo[] = useMemo(() => [
        {
            name: "RVC",
            description: "Retrieval-based Voice Conversion - High quality voice conversion with excellent performance",
            features: ["Real-time conversion", "High quality output", "Multiple speaker support"],
            performance: { speed: 85, quality: 95, compatibility: 90 },
            supported: true
        },
        {
            name: "Beatrice v2",
            description: "Next-generation voice conversion with advanced neural networks",
            features: ["Speaker merging", "Auto pitch shift", "Advanced formant control"],
            performance: { speed: 75, quality: 98, compatibility: 85 },
            supported: true
        },
        {
            name: "Beatrice v1",
            description: "First generation Beatrice model - Windows only",
            features: ["Windows optimized", "Fast processing", "Good quality"],
            performance: { speed: 90, quality: 85, compatibility: 60 },
            supported: false
        },
        {
            name: "MMVC",
            description: "Minimalist Masked Voice Conversion",
            features: ["Lightweight", "Fast inference", "Memory efficient"],
            performance: { speed: 95, quality: 80, compatibility: 85 },
            supported: true
        },
        {
            name: "So-VITS-SVC",
            description: "Singing Voice Conversion with variational autoencoders",
            features: ["Singing voice support", "Multi-speaker", "High fidelity"],
            performance: { speed: 70, quality: 92, compatibility: 80 },
            supported: true
        },
        {
            name: "DDSP-SVC",
            description: "Differentiable Digital Signal Processing for Singing Voice Conversion",
            features: ["DDSP technology", "Singing focused", "Neural audio synthesis"],
            performance: { speed: 65, quality: 88, compatibility: 75 },
            supported: true
        }
    ], []);

    const PerformanceBar: React.FC<{ value: number; color: string }> = ({ value, color }) => (
        <div className="performance-bar">
            <div 
                className="performance-fill" 
                style={{ width: `${value}%`, backgroundColor: color }}
            />
        </div>
    );

    return (
        <div className="model-showcase">
            <h3>
                <FontAwesomeIcon icon={faRobot} />
                {messageBuilderState.getMessage(__filename, "ai_models")}
            </h3>
            
            <div className="models-grid">
                {models.map((model) => (
                    <div 
                        key={model.name}
                        className={`model-card ${selectedModel === model.name ? 'selected' : ''} ${!model.supported ? 'disabled' : ''}`}
                        onClick={() => model.supported && onModelSelect(model.name)}
                    >
                        <div className="model-header">
                            <h4>{model.name}</h4>
                            {selectedModel === model.name && (
                                <FontAwesomeIcon icon={faStar} className="selected-icon" />
                            )}
                        </div>
                        
                        <p className="model-description">{model.description}</p>
                        
                        <div className="model-features">
                            {model.features.map((feature, index) => (
                                <span key={index} className="feature-tag">
                                    {feature}
                                </span>
                            ))}
                        </div>
                        
                        <div className="model-performance">
                            <div className="performance-item">
                                <span className="performance-label">
                                    <FontAwesomeIcon icon={faSpeedometer} />
                                    {messageBuilderState.getMessage(__filename, "speed")}
                                </span>
                                <PerformanceBar value={model.performance.speed} color="#ff6b6b" />
                                <span className="performance-value">{model.performance.speed}%</span>
                            </div>
                            
                            <div className="performance-item">
                                <span className="performance-label">
                                    <FontAwesomeIcon icon={faVolumeUp} />
                                    {messageBuilderState.getMessage(__filename, "quality")}
                                </span>
                                <PerformanceBar value={model.performance.quality} color="#4ecdc4" />
                                <span className="performance-value">{model.performance.quality}%</span>
                            </div>
                            
                            <div className="performance-item">
                                <span className="performance-label">
                                    <FontAwesomeIcon icon={faRobot} />
                                    {messageBuilderState.getMessage(__filename, "compatibility")}
                                </span>
                                <PerformanceBar value={model.performance.compatibility} color="#45b7d1" />
                                <span className="performance-value">{model.performance.compatibility}%</span>
                            </div>
                        </div>
                        
                        {!model.supported && (
                            <div className="not-supported">Not Available</div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .model-showcase {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
                    margin-bottom: 30px;
                }

                .model-showcase h3 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 25px;
                    font-size: 1.5rem;
                    text-align: center;
                    justify-content: center;
                    color: white;
                }

                .models-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 20px;
                }

                .model-card {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    position: relative;
                }

                .model-card:hover:not(.disabled) {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .model-card.selected {
                    border-color: #4ecdc4;
                    background: rgba(78, 205, 196, 0.2);
                }

                .model-card.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .model-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .model-header h4 {
                    margin: 0;
                    font-size: 1.3rem;
                    color: white;
                    font-weight: 600;
                }

                .selected-icon {
                    color: #4ecdc4;
                    font-size: 1.2rem;
                }

                .model-description {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.4;
                    margin-bottom: 15px;
                }

                .model-features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                .feature-tag {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .model-performance {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .performance-item {
                    display: grid;
                    grid-template-columns: 1fr 2fr auto;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.85rem;
                }

                .performance-label {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    color: rgba(255, 255, 255, 0.9);
                    font-weight: 500;
                }

                .performance-bar {
                    height: 6px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .performance-fill {
                    height: 100%;
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .performance-value {
                    color: white;
                    font-weight: 600;
                    min-width: 35px;
                    text-align: right;
                }

                .not-supported {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: rgba(255, 71, 87, 0.8);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 8px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .models-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .performance-item {
                        grid-template-columns: 1fr;
                        gap: 5px;
                    }
                    
                    .performance-label {
                        justify-self: start;
                    }
                    
                    .performance-value {
                        justify-self: end;
                        grid-column: 1;
                        grid-row: 3;
                    }
                }
            `}</style>
        </div>
    );
};