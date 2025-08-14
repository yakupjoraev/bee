import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function ContactSupportScreen() {
  const subjects = ['Payments', '3D Secure', 'Cards', 'Verification', 'Other'];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Contact support</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, width: '100%' }}>
        <div style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>Subject</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          {subjects.map((s) => (
            <button key={s} style={{ padding: '8px 12px', color: '#111', fontSize: 14, fontWeight: 600, borderRadius: 20, border: '1px solid #E0E0E0', background: '#fff', cursor: 'pointer' }}>{s}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          <input placeholder="Email" style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600 }} />
          <textarea placeholder="Describe your issue" rows={5} style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600, resize: 'vertical' }} />
        </div>
        <div style={{ height: 16 }} />
        <button style={{ background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>Send</button>
      </div>
    </div>
  );
}
