import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function SumSubKYCScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Sumsub KYC</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, margin: '0 auto', width: '100%' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', display: 'grid', gap: 10 }}>
          <div style={{ fontWeight: 600, color: '#111' }}>Start verification</div>
          <div style={{ color: '#666', fontSize: 13 }}>Embedded Sumsub flow preview (UI only)</div>
          <button style={{ background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700, justifySelf: 'start' }}>Open</button>
        </div>
      </div>
    </div>
  );
}
