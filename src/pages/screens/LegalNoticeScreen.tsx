import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function LegalNoticeScreen() {
  const text = `This application is provided by BeeXpay. All rights reserved. The information contained herein is for informational purposes only and does not constitute legal advice.`;

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Legal Notice</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, lineHeight: '22px', color: '#333', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          {text}
        </div>
      </div>
    </div>
  );
}
