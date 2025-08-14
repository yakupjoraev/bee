import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function CryptoAssetsScreen() {
  const assets = [
    { symbol: 'USDT', name: 'Tether', icon: '/assets/icons/tether-usdt-logo.svg', balance: '1200.00' },
    { symbol: 'USDC', name: 'USD Coin', icon: '/assets/icons/usd-coin-usdc-logo.svg', balance: '340.50' },
    { symbol: 'DAI', name: 'Dai', icon: '/assets/icons/multi-collateral-dai-dai-logo.svg', balance: '50.00' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Crypto assets</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        {assets.map((a) => (
          <div key={a.symbol} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={a.icon} width={32} height={32} />
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{a.name}</div>
                <div style={{ fontSize: 13, color: '#666' }}>{a.symbol}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{a.balance}</div>
              <div style={{ fontSize: 13, color: '#999' }}>USD</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
