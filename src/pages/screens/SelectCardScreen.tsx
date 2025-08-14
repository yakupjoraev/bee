import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function SelectCardScreen() {
  const cards = [
    { brand: 'VISA', masked: '**** **** **** 1234', balance: '120.50', currency: 'USD' },
    { brand: 'MASTER', masked: '**** **** **** 9876', balance: '0.00', currency: 'USD' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Select card</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'grid', gap: 12 }}>
          {cards.map((c, idx) => (
            <button key={idx} style={{ textAlign: 'left', background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>{c.brand}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{c.currency}</div>
              </div>
              <div style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>{c.masked}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>{c.balance} {c.currency}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
