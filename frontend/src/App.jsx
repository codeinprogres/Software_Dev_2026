import React, { useState } from 'react';

const styles = {
    container: {
        backgroundColor: '#09090b',
        color: '#ffffff',
        minHeight: '100vh',
        width: '100vw', // Ensures full width
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.5',
        overflowX: 'hidden', // Prevents side scrolling
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 5%', // Uses percentage for scaling
        borderBottom: '1px solid #27272a',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '900',
        letterSpacing: '-1px',
        color: '#f59e0b',
        textTransform: 'uppercase',
    },
    hero: {
        width: '100%', // Removes maxWidth limit
        padding: '8rem 5%',
        textAlign: 'center',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: 'clamp(3rem, 10vw, 6rem)',
        fontWeight: '900',
        lineHeight: '0.9',
        marginBottom: '2rem',
        letterSpacing: '-3px',
    },
    highlight: {
        color: '#f59e0b',
        textDecoration: 'underline',
        textDecorationColor: '#27272a',
    },
    description: {
        fontSize: '1.25rem',
        color: '#a1a1aa',
        maxWidth: '800px', // Keeps text readable but centered
        margin: '0 auto 3rem auto',
    },
    buttonPrimary: {
        backgroundColor: '#f59e0b',
        color: '#000',
        padding: '1.25rem 2.5rem',
        borderRadius: '1rem',
        fontSize: '1.25rem',
        fontWeight: '800',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%', // Spans whole screen
        padding: '4rem 5%',
        boxSizing: 'border-box',
    },
    card: {
        backgroundColor: '#18181b',
        padding: '2.5rem',
        borderRadius: '2rem',
        border: '1px solid #27272a',
    },
    srOnly: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0',
    }
};

function App() {
    const [announcement, setAnnouncement] = useState("");

    const announce = (message) => {
        setAnnouncement(message);
        setTimeout(() => setAnnouncement(""), 3000);
    };

    return (
        <div style={styles.container}>
            <div style={styles.srOnly} aria-live="polite" role="status">
                {announcement}
            </div>

            <nav style={styles.nav}>
                <div style={styles.logo}>VisionPath_v1</div>
                <button
                    style={{...styles.buttonPrimary, padding: '0.75rem 1.5rem', fontSize: '1rem'}}
                    onClick={() => announce("System active. Ready for voice commands.")}
                >
                    Activate System
                </button>
            </nav>

            <main>
                <section style={styles.hero}>
                    <h1 style={styles.title}>
                        Navigate the World <br />
                        <span style={styles.highlight}>Without Limits.</span>
                    </h1>
                    <p style={styles.description}>
                        AI-powered spatial awareness for the blind. Our software maps shopping
                        centers in real-time, providing haptic and audio cues to guide you
                        exactly where you need to go.
                    </p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <button
                            style={styles.buttonPrimary}
                            onClick={() => announce("Searching for nearest retail locations.")}
                        >
                            Locate Stores
                        </button>
                    </div>
                </section>

                <section style={styles.grid}>
                    <div style={styles.card}>
                        <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📍</div>
                        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Precise Positioning</h3>
                        <p style={{color: '#71717a'}}>Sub-meter accuracy using Ultra-Wideband technology to guide you through complex store layouts.</p>
                    </div>

                    <div style={styles.card}>
                        <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🔊</div>
                        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>3D Audio Cues</h3>
                        <p style={{color: '#71717a'}}>Binaural soundscapes that tell you exactly which direction a product is located.</p>
                    </div>

                    <div style={styles.card}>
                        <div style={{fontSize: '2rem', marginBottom: '1rem'}}>✋</div>
                        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Haptic Interface</h3>
                        <p style={{color: '#71717a'}}>Smart-watch integration that uses vibration patterns to signal turns and obstacles.</p>
                    </div>
                </section>
            </main>

            <footer style={{textAlign: 'center', padding: '4rem', color: '#3f3f46', borderTop: '1px solid #27272a', width: '100%', boxSizing: 'border-box'}}>
                <p>© 2026 VISIONPATH AI — BUILT FOR ACCESSIBILITY</p>
            </footer>
        </div>
    );
}

export default App;
