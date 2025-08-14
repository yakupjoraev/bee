import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function SwapScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Swap</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 640 }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: '#666' }}>From</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <select style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600 }}>
                <option>USDT</option>
                <option>USDC</option>
              </select>
              <input placeholder="0.00" style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600 }} />
            </div>
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: '#666' }}>To</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <select style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600 }}>
                <option>USDC</option>
                <option>USDT</option>
              </select>
              <input placeholder="0.00" style={{ flex: 1, padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', color: '#111', fontSize: 14, fontWeight: 600 }} />
            </div>
          </label>
        </div>
        <div style={{ height: 16 }} />
        <button style={{ width: '100%', background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>Get quote</button>
      </div>
    </div>
  );
}
