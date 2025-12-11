import styles from './index.module.css';
import CardIcon1 from '@/assets/home/card-icon-1.svg'
import CardIcon2 from '@/assets/home/card-icon-2.svg'
import CardIcon3 from '@/assets/home/card-icon-3.svg'
import NICImg from '@/assets/home/NIC-bg.png'
import IconStreamlined from '@/assets/home/icon-streamlined.svg'
import IconUserMode from '@/assets/home/icon-user-mode.svg'
import IconDiverse from '@/assets/home/icon-diverse.svg'
import IconFailover from '@/assets/home/icon-failover.svg'
import IconHardware from '@/assets/home/icon-hardware.svg'
import IconCost from '@/assets/home/icon-cost.svg'
import IconTransparency from '@/assets/home/icon-transparency.svg'
import IconOpenSource from '@/assets/home/icon-open-source.svg'
import IconOptimization from '@/assets/home/icon-optimization.svg'
import AMDLogo from '@/assets/home/amd-logo.png'
import NVIDIALogo from '@/assets/home/nvidia-logo.png'
import CompatibilityBg from '@/assets/home/compatibility-bg.png'

export default function Home() {
    const section_1_card = [
        {
            title: "Performance Trade-offs",
            content: "Although RDMA is currently the de facto standard for cross-node communication in AI large models, its limitations in addressing the new demands of AI large models are becoming increasingly apparent. Designed 25 years ago for HPC scenarios, the protocol is showing its age.",
            icon: CardIcon1,
        },
        {
            title: "Holistic Optimization",
            content: "With the rapid advancement of large AI models, demands on system performance have intensified. Achieving extreme performance requires a coordinated approach to hardware and software design—not merely refining algorithms or stacking high-end hardware.",
            icon: CardIcon2,
        },
        {
            title: "Openness",
            content: "Current commercial intelligent network cards all adopt black-box closed-source solutions, which make secondary development difficult and feature poor scalability. Moreover, it is hard for them to achieve deep integration with upper-layer communication and computing frameworks.",
            icon: CardIcon3,
        },
    ]

    const section_3_highlights = [
        {
            title: "Deep Optimization for High-Performance / AI Scenarios",
            items: [
                {
                    subtitle: "High Bandwidth & Low Latency",
                    content: "Supports 100Gbps / 200Gbps / 400Gbps configurations to meet massive data transfer demands of large-scale model applications"
                },
                {
                    subtitle: "Resilient in Harsh Network Environments",
                    content: "Proprietary communication protocol ensures stable, efficient transmission even under high packet loss and significant network jitter"
                },
                {
                    subtitle: "Transparent Failover",
                    content: "Seamless integration with upper-layer open-source communication stacks enables automatic switching during link or node failures, guaranteeing uninterrupted service"
                }
            ]
        },
        {
            title: "Open-Source and Open-Architecture",
            items: [
                {
                    subtitle: "100Gbps NIC hardware design is open-sourced",
                    content: "Full 100Gbps NIC hardware design is available for secondary customization and development"
                },
                {
                    subtitle: "All drivers are open-sourced",
                    content: "Golden NICs adopt a heavy-user-mode driver design approach, primarily developed in user-level Rust. This facilitates maintenance, debugging, and enables seamless secondary development and feature expansion"
                },
                {
                    subtitle: "Compatible with Multiple Operating Systems and Platforms",
                    content: "Supports standard operating systems and mainstream Linux distributions, enabling flexible deployment in heterogeneous environments"
                }
            ]
        },
        {
            title: "Ease Of Use",
            items: [
                {
                    subtitle: "Zero Configuration",
                    content: "The NIC automatically detects cluster environments and optimizes critical parameters, eliminating cumbersome manual configuration",
                    hasComingSoon: true
                },
                {
                    subtitle: "Visualized O&M Tools",
                    content: "Provides open-source drivers and monitoring interfaces for streamlined cluster operations and ecosystem expansion",
                    hasComingSoon: true
                },
                {
                    subtitle: "Automated Operations",
                    content: "Comprehensive monitoring, alerting, and logging capabilities for efficient troubleshooting",
                    hasComingSoon: true
                },
            ],
            hasComingSoon: true
        }
    ]

    const section_4_features = [
        {
            icon: IconStreamlined,
            title: "Streamlined Software/Hardware Implementation",
            content: "Significantly simplifies implementation complexity through hardware-software synergy, eliminating unnecessary intermediaries for minimal control logic."
        },
        {
            icon: IconUserMode,
            title: "User-Mode Driver",
            content: "Implements core NIC control logic in user mode, bypassing the OS kernel for lightweight operation and seamless integration with user systems."
        },
        {
            icon: IconDiverse,
            title: "Diverse Control Logics",
            content: "Supports combinations of control schemes including Receiver Driven, Selective Retransmission, and MultiPath Routing, independent of PFC for congestion control, adapting to varied network environments."
        },
        {
            icon: IconFailover,
            title: "Transparent Failover",
            content: "Seamlessly switches to alternative NICs upon failure detection."
        }
    ]

    const section_6_challenges = [
        {
            icon: IconHardware,
            title: "Necessity of Hardware-Software Co-Design",
            content: "Achieving ultra-high performance in large model systems requires integrated optimization across both hardware and software layers, rather than relying solely on algorithmic improvements or high-end hardware upgrades."
        },
        {
            icon: IconCost,
            title: "Balancing Cost and Efficiency",
            content: "Reducing system deployment and operational costs while maintaining or improving inference efficiency remains a fundamental challenge."
        },
        {
            icon: IconTransparency,
            title: "Limited Transparency in Network Communication",
            content: "Current network and deployment practices largely depend on black-box commercial solutions that limit visibility into fine-grained network and application interactions."
        },
        {
            icon: IconOpenSource,
            title: "Lack of Open-Source Network-Level Solutions",
            content: "Despite the flourishing open-source ecosystem for inference frameworks and algorithms, open-source efforts at the network communication and hardware level are still limited."
        },
        {
            icon: IconOptimization,
            title: "Uneven Optimization Across System Layers",
            content: "While significant progress has been made in optimizing inference algorithms and software frameworks, advancements in network-layer optimization lag behind, constraining overall system performance."
        }
    ]

    const section_7_cases = [
        {
            question: "Open-Source NIC Hardware Secondary Development Case",
            questionDesc: "A research institution needed 100/200 Gbps high-performance networking with controllable data handling.",
            solution: "Using open-rdma and Bluespec SystemVerilog, they quickly implemented a custom congestion control algorithm with only a few thousand lines of code.",
            footer: "This eliminated traditional Verilog complexity and significantly shortened development time."
        },
        {
            question: "User-Mode Driver Cross-Platform Porting Case",
            questionDesc: "A customer needed high-performance networking on a new CPU architecture and OS with limited support.",
            solution: "Leveraging open-rdma's user-space driver design, they compiled it into dynamic libraries and embedded it directly into their applications.",
            footer: "This enabled seamless operation on bare-metal and real-time systems without kernel dependencies."
        },
        {
            question: "Custom Congestion Control Algorithm Case",
            questionDesc: "A data center customer sought to tailor congestion control for unique network characteristics.",
            solution: "With open-rdma's flexible driver and hardware co-design, they modified algorithms directly in the user-space driver, and extended hardware logic via Bluespec RTL when needed.",
            footer: "This design allowed rapid iteration, easy debugging, and hardware–software co-optimization."
        },
        {
            question: "GPU Acceleration Case",
            questionDesc: "A team optimizing inference performance needed tighter GPU-NIC integration beyond standard PCIe limits.",
            solution: "Using open-rdma's open and clean hardware interface, they enabled direct GPU-to-NIC PCIe P2P control for lower latency and better efficiency.",
            footer: "The fully transparent design also simplified troubleshooting and accelerated deployment."
        }
    ]

    return (
        <div className={styles.home}>
            {/* Section 1: Why */}
            <section className={styles.section_1}>
                <div className={styles.section_content}>
                    <div className={styles.section_1_title}>
                        <div className={styles.title}>Why</div>
                        <div className={styles.subtitle}>build next-generation RDMA networks</div>
                    </div>
                    <div className={styles.section_1_main}>
                        {section_1_card.map((item) => (<div key={item.title} className={styles.section_1_card}>
                            <img className={styles.icon} src={item.icon} alt="icon" />
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.content}>{item.content}</div>
                        </div>))}
                    </div>
                </div>
            </section>

            {/* Section 2: Product Showcase */}
            <section className={styles.section_2}>
                <div className={styles.section_content}>
                    <div className={styles.section_2_title}>
                        <div className={styles.title}>High-Performance Golden NIC</div>
                        <div className={styles.subtitle}>High-performance networking, bus, and storage interfaces to meet massive data transmission and storage demands</div>
                        <div className={styles.subtitle}>Specifically engineered for large AI model scenarios, delivering the high-performance requirements of AI large models</div>
                    </div>
                    <img className={styles.nic_img} src={NICImg} alt="nic" />
                </div>
            </section>

            {/* Section 3: Highlights */}
            <section className={styles.section_3}>
                <div className={styles.bg_blue}></div>
                <div className={styles.bg_orange}></div>
                <div className={styles.section_content}>
                    <div className={styles.section_3_title}>
                        Highlights of High-Performance Golden NIC
                    </div>
                    <div className={styles.highlights_grid}>
                        {section_3_highlights.map((highlight) => (
                            <div key={highlight.title} className={styles.highlight_card}>
                                <h3 className={styles.highlight_title}>{highlight.title}</h3>
                                <div className={styles.highlight_items}>
                                    {highlight.items.map((item) => (
                                        <div key={item.subtitle} className={styles.highlight_item}>
                                            <span className={styles.item_subtitle}>
                                                {item.subtitle}
                                                {'hasComingSoon' in item && item.hasComingSoon && (
                                                    <span className={styles.coming_soon}> *</span>
                                                )}
                                            </span>
                                            <span className={styles.item_content}>{item.content}</span>
                                        </div>
                                    ))}
                                </div>
                                {highlight.hasComingSoon && (
                                    <div className={styles.coming_soon}>* Coming soon</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Compact and Flexible */}
            <section className={styles.section_4}>
                <div className={styles.section_content}>
                    <h2 className={styles.section_title}>Compact and Flexible</h2>
                    <div className={styles.features_grid}>
                        {section_4_features.map((feature) => (
                            <div key={feature.title} className={styles.feature_item}>
                                <div className={styles.feature_title}>
                                    <img className={styles.feature_icon} src={feature.icon} alt="icon" />
                                    <span className={styles.feature_title_text}>{feature.title}</span>
                                </div>
                                <p className={styles.feature_content}>{feature.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Open-Source Architecture */}
            <section className={styles.section_5}>
                <div className={styles.section_content}>
                    <div className={styles.architecture_wrapper}>
                        <div className={styles.architecture_left}>
                            <h2 className={styles.section_title}>Open-Source<br/>and Open Architecture</h2>
                        </div>
                        <div className={styles.architecture_right}>
                            <div className={styles.architecture_diagram}>
                                <div className={styles.center_circle}>
                                    <span className={styles.circle_text}>Open-Source<br/>Hardware RTL</span>
                                </div>
                                <div className={styles.left_circle}>
                                    <span className={styles.circle_text}>Open-Source<br/>Network Communication<br/>Libraries</span>
                                </div>
                                <div className={styles.right_circle}>
                                    <span className={styles.circle_text}>Open-Source<br/>Driver Software</span>
                                </div>
                                <div className={styles.left_text}>
                                    <p>Compatible with native API and ECCL communication libraries, supporting mainstream large-model inference applications</p>
                                </div>
                                <div className={styles.right_text}>
                                    <p>Software drivers developed with the advanced and secure Rust language, facilitating development and debugging</p>
                                </div>
                                <div className={styles.top_text}>
                                    <p>Developed using advanced Bluespec SystemVerilog, featuring compact code for easy optimization and maintenance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Core Challenges */}
            <section className={styles.section_6}>
                <div className={styles.section_content}>
                    <h2 className={styles.section_title}>Core Challenges</h2>
                    <div className={styles.challenges_list}>
                        {section_6_challenges.map((challenge) => (
                            <div key={challenge.title} className={styles.challenge_item}>
                                <div className={styles.challenge_icon_wrapper}>
                                    <img src={challenge.icon} alt="icon" className={styles.challenge_icon} />
                                </div>
                                <div className={styles.challenge_content}>
                                    <span className={styles.challenge_title}>{challenge.title}</span>
                                    <span className={styles.challenge_text}>{challenge.content}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7: Case Studies */}
            <section className={styles.section_7}>
                <div className={styles.section_content}>
                    <h2 className={styles.section_title}>Case</h2>
                    <div className={styles.case_grid}>
                        <div className={styles.case_header}>
                            <div className={styles.case_header_left}>Question</div>
                            <div className={styles.case_header_right}>Solution</div>
                        </div>
                        {section_7_cases.map((caseItem, index) => {
                            const isOdd = index % 2 === 1;
                            return(
                                <div key={caseItem.question} className={styles.case_item}>
                                    <div className={styles.case_row}>
                                        <div className={styles.case_question}
                                        style={{backgroundColor: `${isOdd ? '#99999914' : '#4696FF14'}`}}>
                                            <span className={styles.case_title}>{caseItem.question}</span>
                                            <span className={styles.case_desc}>{caseItem.questionDesc}</span>
                                        </div>
                                        <div className={styles.case_solution}
                                        style={{backgroundColor: `${isOdd ? '#99999914' : '#4696FF14'}`}}>
                                            <span className={styles.case_title}>{caseItem.solution}</span>
                                        </div>
                                    </div>
                                    <p className={styles.case_footer}>{caseItem.footer}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Section 8: Compatibility */}
            <section className={styles.section_8}>
                <img src={CompatibilityBg} alt="bg" className={styles.compatibility_bg} />
                <div className={styles.section_content}>
                    <div className={styles.compatibility_wrapper}>
                        <div className={styles.compatibility_left}>
                            <div className={styles.section_title}>Excellent Compatibility</div>
                            <div className={styles.compatibility_list}>
                                <span>Specifically optimized for SONiC white-box switches</span>
                                <span>100% compatible with NVIDIA GPUs</span>
                                <span>100% compatible with AMD GPUs</span>
                            </div>
                        </div>
                        <div className={styles.compatibility_logos}>
                            <img src={AMDLogo} alt="AMD" className={styles.logo} />
                            <img src={NVIDIALogo} alt="NVIDIA" className={styles.logo} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}