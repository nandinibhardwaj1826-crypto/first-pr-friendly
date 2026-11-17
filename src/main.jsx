import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const tasks = [
  { title: 'Improve the welcome copy', type: 'Content', detail: 'Make the opening message clearer and more welcoming.' },
  { title: 'Refine the visual style', type: 'Design', detail: 'Suggest a small accessibility or responsive design improvement.' },
  { title: 'Strengthen the guide', type: 'Documentation', detail: 'Clarify one setup or pull-request step for contributors.' }
];

const styles = {
  page: { minHeight: '100vh', background: '#fffaf0', color: '#202631', fontFamily: 'system-ui, sans-serif' },
  nav: { display: 'flex', justifyContent: 'space-between', padding: '22px 7%', fontWeight: 700 },
  hero: { padding: '92px 7%', textAlign: 'center', background: '#fff2cf' },
  label: { color: '#df553a', fontSize: 12, letterSpacing: 1.5, fontWeight: 800 },
  h1: { fontFamily: 'Georgia, serif', fontSize: 'clamp(44px, 8vw, 84px)', lineHeight: 1, margin: '16px 0' },
  section: { padding: '70px 7%', maxWidth: 1180, margin: 'auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 18 },
  card: { border: 0, borderRadius: 10, padding: 26, textAlign: 'left', background: '#dcebd1', cursor: 'pointer', color: '#202631' },
  modal: { position: 'fixed', inset: 0, background: 'rgba(20,24,31,.6)', display: 'grid', placeItems: 'center', padding: 20 },
  dialog: { maxWidth: 430, background: '#fffaf0', padding: 32, borderRadius: 10 }
};

function App() {
  const [selected, setSelected] = useState(null);
  return <div style={styles.page}>
    <nav style={styles.nav}><span>✦ CONTRIBUTE TOGETHER</span><a href="#contribute">Contribute</a></nav>
    <header style={styles.hero}>
      <div style={styles.label}>A COMMUNITY OPEN-SOURCE PROJECT</div>
      <h1 style={styles.h1}>Build together.<br/><em style={{color:'#df553a'}}>One change at a time.</em></h1>
      <p>Choose a small improvement, share your perspective, and help make this project better for everyone.</p>
    </header>
    <section id="contribute" style={styles.section}>
      <div style={styles.label}>WAYS TO HELP</div><h2 style={{fontFamily:'Georgia,serif',fontSize:42}}>Choose a place to contribute</h2>
      <div style={styles.grid}>{tasks.map(task => <button key={task.title} style={styles.card} onClick={() => setSelected(task)}><small>{task.type.toUpperCase()}</small><h3 style={{fontFamily:'Georgia,serif',fontSize:25}}>{task.title}</h3><p>{task.detail}</p><strong>Learn more →</strong></button>)}</div>
    </section>
    <section style={{...styles.section, background:'#202631', color:'#fff', maxWidth:'none'}}><div style={styles.label}>THE CONTRIBUTION FLOW</div><h2 style={{fontFamily:'Georgia,serif',fontSize:42}}>Fork, improve, open a PR.</h2><p>Fork the repository, work on a focused branch, test your change, and open a pull request explaining the improvement.</p></section>
    {selected && <div style={styles.modal} onClick={() => setSelected(null)}><div style={styles.dialog} onClick={e => e.stopPropagation()}><div style={styles.label}>{selected.type.toUpperCase()}</div><h2 style={{fontFamily:'Georgia,serif',fontSize:34}}>{selected.title}</h2><p>{selected.detail}</p><p><strong>Next:</strong> Fork this repository, create a focused branch, and open a pull request when your change is ready.</p><button onClick={() => setSelected(null)}>Close</button></div></div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
