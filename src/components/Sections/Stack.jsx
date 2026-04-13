import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/Stack.css';

const techStack = [
    { icon: 'logos:react', name: 'React.js' },
    { icon: 'logos:threejs', name: 'Three.js', invert: true },
    { icon: 'logos:gsap-icon', name: 'GSAP' },
    { icon: 'logos:nodejs-icon', name: 'Node.js' },
    { icon: 'logos:mongodb-icon', name: 'MongoDB' },
    { icon: 'logos:redis', name: 'Redis' }
];

const Stack = () => {
    return (
        <section id="stack" className="stack">
            <div className="stack-container">
                <div className="stack-header">
                    <h2 className="stack-title">CORE SYSTEM</h2>
                    <p className="stack-status">[ 0x7F - STACK_INITIALIZED ]</p>
                </div>

                <div className="stack-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="stack-card">
                            <Icon 
                                icon={tech.icon} 
                                className={`stack-icon ${tech.invert ? 'invert-icon' : ''}`} 
                            />
                            <p className="stack-name">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
