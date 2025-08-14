import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function HelpCenterScreen() {
  const faqs = [
    { q: 'How to create a card?', a: 'Go to Request Card and follow steps.' },
    { q: 'How to top up?', a: 'Use Top Up screen and choose a method.' },
    { q: '3D Secure issues', a: 'Approve or decline from Notifications.' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Help Center</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'grid', gap: 10 }}>
          {faqs.map((f, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', color: '#111' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{f.q}</div>
              <div style={{ fontSize: 13, color: '#666' }}>{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
