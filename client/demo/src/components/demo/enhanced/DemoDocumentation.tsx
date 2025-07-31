import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBook,
    faRocket,
    faLightbulb,
    faCog,
    faShieldAlt,
    faHeadphones,
    faDownload,
    faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { useMessageBuilder } from "../../../hooks/useMessageBuilder";

interface DemoDocumentationProps {
    isVisible: boolean;
    onClose: () => void;
}

export const DemoDocumentation: React.FC<DemoDocumentationProps> = ({ isVisible, onClose }) => {
    const messageBuilderState = useMessageBuilder();

    // Initialize translations
    useMemo(() => {
        messageBuilderState.setMessage(__filename, "documentation", {
            en: "Documentation",
            ja: "ドキュメント",
            ko: "문서",
            zh: "文档",
            de: "Dokumentation",
            es: "Documentación",
            fr: "Documentation",
            it: "Documentazione",
            ru: "Документация",
            ar: "التوثيق"
        });
        messageBuilderState.setMessage(__filename, "getting_started", {
            en: "Getting Started",
            ja: "始めよう",
            ko: "시작하기",
            zh: "快速开始",
            de: "Erste Schritte",
            es: "Comenzando",
            fr: "Commencer",
            it: "Iniziare",
            ru: "Начало работы",
            ar: "البدء"
        });
        messageBuilderState.setMessage(__filename, "features", {
            en: "Features",
            ja: "機能",
            ko: "기능",
            zh: "功能",
            de: "Funktionen",
            es: "Características",
            fr: "Fonctionnalités",
            it: "Funzionalità",
            ru: "Функции",
            ar: "الميزات"
        });
        messageBuilderState.setMessage(__filename, "usage_tips", {
            en: "Usage Tips",
            ja: "使用のヒント",
            ko: "사용 팁",
            zh: "使用技巧",
            de: "Nutzungstipps",
            es: "Consejos de Uso",
            fr: "Conseils d'utilisation",
            it: "Suggerimenti per l'uso",
            ru: "Советы по использованию",
            ar: "نصائح الاستخدام"
        });
        messageBuilderState.setMessage(__filename, "troubleshooting", {
            en: "Troubleshooting",
            ja: "トラブルシューティング",
            ko: "문제 해결",
            zh: "故障排除",
            de: "Fehlerbehebung",
            es: "Solución de problemas",
            fr: "Dépannage",
            it: "Risoluzione dei problemi",
            ru: "Устранение неполадок",
            ar: "استكشاف الأخطاء"
        });
        messageBuilderState.setMessage(__filename, "audio_requirements", {
            en: "Audio Requirements",
            ja: "音声要件",
            ko: "오디오 요구사항",
            zh: "音频要求",
            de: "Audio-Anforderungen",
            es: "Requisitos de Audio",
            fr: "Exigences audio",
            it: "Requisiti audio",
            ru: "Требования к аудио",
            ar: "متطلبات الصوت"
        });
        messageBuilderState.setMessage(__filename, "performance_optimization", {
            en: "Performance Optimization",
            ja: "パフォーマンス最適化",
            ko: "성능 최적화",
            zh: "性能优化",
            de: "Leistungsoptimierung",
            es: "Optimización del Rendimiento",
            fr: "Optimisation des performances",
            it: "Ottimizzazione delle prestazioni",
            ru: "Оптимизация производительности",
            ar: "تحسين الأداء"
        });
    }, []);

    if (!isVisible) return null;

    return (
        <div className="documentation-overlay">
            <div className="documentation-panel">
                <div className="documentation-header">
                    <h2>
                        <FontAwesomeIcon icon={faBook} />
                        {messageBuilderState.getMessage(__filename, "documentation")}
                    </h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="documentation-content">
                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faRocket} />
                            {messageBuilderState.getMessage(__filename, "getting_started")}
                        </h3>
                        <div className="doc-content">
                            <ol>
                                <li>Choose an AI model from the model showcase</li>
                                <li>Grant microphone permissions when prompted</li>
                                <li>Click "Start Recording" to begin voice conversion</li>
                                <li>Speak into your microphone for 3-10 seconds</li>
                                <li>Click "Stop Recording" to process your voice</li>
                                <li>Listen to the converted result and download if desired</li>
                            </ol>
                        </div>
                    </section>

                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faLightbulb} />
                            {messageBuilderState.getMessage(__filename, "features")}
                        </h3>
                        <div className="doc-content">
                            <div className="feature-grid">
                                <div className="feature-card">
                                    <h4>Real-time Conversion</h4>
                                    <p>Convert your voice in real-time with minimal latency</p>
                                </div>
                                <div className="feature-card">
                                    <h4>Multiple AI Models</h4>
                                    <p>Choose from RVC, Beatrice v2, MMVC, and more</p>
                                </div>
                                <div className="feature-card">
                                    <h4>Voice Effects</h4>
                                    <p>Adjust pitch, formant, and volume parameters</p>
                                </div>
                                <div className="feature-card">
                                    <h4>Audio Visualization</h4>
                                    <p>See your voice waveform in real-time</p>
                                </div>
                                <div className="feature-card">
                                    <h4>Performance Metrics</h4>
                                    <p>Monitor processing time and quality scores</p>
                                </div>
                                <div className="feature-card">
                                    <h4>Multilingual Interface</h4>
                                    <p>Use the demo in 10+ languages</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faCog} />
                            {messageBuilderState.getMessage(__filename, "usage_tips")}
                        </h3>
                        <div className="doc-content">
                            <div className="tips-list">
                                <div className="tip-item">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                    <div>
                                        <strong>Use headphones</strong>
                                        <p>Prevent audio feedback by using headphones or earbuds</p>
                                    </div>
                                </div>
                                <div className="tip-item">
                                    <FontAwesomeIcon icon={faShieldAlt} />
                                    <div>
                                        <strong>Quiet environment</strong>
                                        <p>Record in a quiet room for best quality results</p>
                                    </div>
                                </div>
                                <div className="tip-item">
                                    <FontAwesomeIcon icon={faDownload} />
                                    <div>
                                        <strong>Save your results</strong>
                                        <p>Download converted audio files for later use</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faHeadphones} />
                            {messageBuilderState.getMessage(__filename, "audio_requirements")}
                        </h3>
                        <div className="doc-content">
                            <ul>
                                <li><strong>Sample Rate:</strong> 48kHz recommended</li>
                                <li><strong>Format:</strong> 16-bit PCM audio</li>
                                <li><strong>Duration:</strong> 3-30 seconds for best results</li>
                                <li><strong>Quality:</strong> Clear speech without background noise</li>
                                <li><strong>Microphone:</strong> External microphone recommended</li>
                            </ul>
                        </div>
                    </section>

                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faRocket} />
                            {messageBuilderState.getMessage(__filename, "performance_optimization")}
                        </h3>
                        <div className="doc-content">
                            <ul>
                                <li>Use Chrome or Firefox for best performance</li>
                                <li>Close unnecessary browser tabs</li>
                                <li>Ensure stable internet connection</li>
                                <li>Choose the right model based on your hardware</li>
                                <li>Shorter audio clips process faster</li>
                            </ul>
                        </div>
                    </section>

                    <section className="doc-section">
                        <h3>
                            <FontAwesomeIcon icon={faQuestionCircle} />
                            {messageBuilderState.getMessage(__filename, "troubleshooting")}
                        </h3>
                        <div className="doc-content">
                            <div className="troubleshooting-list">
                                <div className="trouble-item">
                                    <strong>Microphone not working?</strong>
                                    <p>Check browser permissions and ensure microphone is connected</p>
                                </div>
                                <div className="trouble-item">
                                    <strong>Poor audio quality?</strong>
                                    <p>Try a different model or adjust voice effect parameters</p>
                                </div>
                                <div className="trouble-item">
                                    <strong>Processing takes too long?</strong>
                                    <p>Use shorter audio clips or try a faster model like MMVC</p>
                                </div>
                                <div className="trouble-item">
                                    <strong>No sound output?</strong>
                                    <p>Check your speakers/headphones and browser audio settings</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <style jsx>{`
                .documentation-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1500;
                    padding: 20px;
                }

                .documentation-panel {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 20px;
                    max-width: 800px;
                    width: 100%;
                    max-height: 80vh;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                }

                .documentation-header {
                    padding: 25px 30px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .documentation-header h2 {
                    margin: 0;
                    color: white;
                    font-size: 1.8rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .close-btn {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .close-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }

                .documentation-content {
                    padding: 30px;
                    overflow-y: auto;
                    flex: 1;
                    color: white;
                }

                .doc-section {
                    margin-bottom: 40px;
                }

                .doc-section:last-child {
                    margin-bottom: 0;
                }

                .doc-section h3 {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #4ecdc4;
                }

                .doc-content {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    backdrop-filter: blur(10px);
                }

                .doc-content ol,
                .doc-content ul {
                    margin: 0;
                    padding-left: 20px;
                    line-height: 1.6;
                }

                .doc-content li {
                    margin-bottom: 8px;
                }

                .feature-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 15px;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .feature-card h4 {
                    margin: 0 0 8px 0;
                    font-size: 1.1rem;
                    color: #4ecdc4;
                }

                .feature-card p {
                    margin: 0;
                    font-size: 0.9rem;
                    opacity: 0.9;
                    line-height: 1.4;
                }

                .tips-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .tip-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }

                .tip-item svg {
                    color: #4ecdc4;
                    font-size: 1.2rem;
                    margin-top: 2px;
                    flex-shrink: 0;
                }

                .tip-item strong {
                    display: block;
                    margin-bottom: 5px;
                    color: #4ecdc4;
                }

                .tip-item p {
                    margin: 0;
                    opacity: 0.9;
                    line-height: 1.4;
                }

                .troubleshooting-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .trouble-item {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 15px;
                    border-left: 4px solid #ff6b6b;
                }

                .trouble-item strong {
                    display: block;
                    margin-bottom: 8px;
                    color: #ff6b6b;
                    font-size: 1.1rem;
                }

                .trouble-item p {
                    margin: 0;
                    opacity: 0.9;
                    line-height: 1.4;
                }

                @media (max-width: 768px) {
                    .documentation-panel {
                        margin: 10px;
                        max-height: 90vh;
                    }
                    
                    .documentation-header {
                        padding: 20px;
                    }
                    
                    .documentation-header h2 {
                        font-size: 1.5rem;
                    }
                    
                    .documentation-content {
                        padding: 20px;
                    }
                    
                    .feature-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};