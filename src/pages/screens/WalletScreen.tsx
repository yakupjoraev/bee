import { IoChevronBack } from 'react-icons/io5';

export default function WalletScreen() {
  const assets = [
    { symbol: 'USDT', name: 'Tether', balance: '1200.0000', usd: '1200.00', icon: '/assets/icons/tether-usdt-logo.svg' },
    { symbol: 'USDC', name: 'USD Coin', balance: '340.5000', usd: '340.50', icon: '/assets/icons/usd-coin-usdc-logo.svg' },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.0521', usd: '1800.02', icon: '/assets/icons/ethereum-eth-logo.svg' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Wallet</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#F0B11F', marginBottom: 5 }}>Total Balance</div>
          <div style={{ fontSize: 32, fontWeight: 600, color: '#000' }}>$ 0.00</div>
        </div>

        <div>
          {assets.map((a) => (
            <div key={a.symbol} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={a.icon} alt={a.symbol} width={32} height={32} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>{a.name}</div>
                  <div style={{ fontSize: 13, color: '#666' }}>{a.symbol}</div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>{a.balance}</div>
                <div style={{ fontSize: 13, color: '#999' }}>≈ {a.usd} USD</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
