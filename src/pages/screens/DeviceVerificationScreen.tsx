import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function DeviceVerificationScreen() {
  const boxes = Array.from({ length: 6 }).map((_, i) => (
    <input key={i} maxLength={1} style={{ width: 44, height: 56, textAlign: 'center', fontSize: 22, border: '1px solid #E0E0E0', borderRadius: 8 }} />
  ));

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Device verification</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>Enter the 6-digit code sent to your email</div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          {boxes}
        </div>
        <button style={{ width: '100%', background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>Verify</button>
        <div style={{ textAlign: 'center', fontSize: 13, color: '#999', marginTop: 12 }}>Resend code in 00:30</div>
      </div>
    </div>
  );
}
