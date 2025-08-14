import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

export default function DepositScreen() {
  const networks = [
    { key: 'ERC20', icon: '/assets/icons/ethereum-eth-logo.svg', desc: 'Ethereum Network' },
    { key: 'TRC20', icon: '/assets/icons/tron-trx-logo.svg', desc: 'TRON Network' },
  ];

  const assets = [
    { symbol: 'USDT', name: 'Tether', icon: '/assets/icons/tether-usdt-logo.svg' },
    { symbol: 'USDC', name: 'USD Coin', icon: '/assets/icons/usd-coin-usdc-logo.svg' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Deposit</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 12 }}>Choose network</div>
        <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
          {networks.map((n) => (
            <button key={n.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 12, cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={n.icon} width={24} height={24} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#333' }}>{n.key}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{n.desc}</div>
                </div>
              </div>
              <div style={{ color: '#999' }}>›</div>
            </button>
          ))}
        </div>

        <div style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 12 }}>Choose asset</div>
        <div style={{ display: 'grid', gap: 12 }}>
          {assets.map((a) => (
            <button key={a.symbol} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 12, cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={a.icon} width={24} height={24} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#333' }}>{a.name}</div>
                  <div style={{ fontSize: 12, color: '#666' }}>{a.symbol}</div>
                </div>
              </div>
              <div style={{ color: '#999' }}>›</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
