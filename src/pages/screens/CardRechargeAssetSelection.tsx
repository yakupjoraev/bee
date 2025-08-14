import { IoChevronBack, IoSearch } from 'react-icons/io5';

export default function CardRechargeAssetSelection() {
  const assets = [
    { symbol: 'USDT', network: 'TRON', icon: '/assets/icons/usdt.svg' },
    { symbol: 'USDC', network: 'ETH', icon: '/assets/icons/usdc.svg' },
    { symbol: 'BTC', network: 'BTC', icon: '/assets/icons/btc.svg' },
    { symbol: 'ETH', network: 'ETH', icon: '/assets/icons/eth.svg' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Select asset</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, background: '#fff', border: '1px solid #eee', padding: '10px 12px', borderRadius: 10 }}>
            <IoSearch color="#999" />
            <input placeholder="Search asset" style={{ border: 'none', outline: 'none', flex: 1 }} />
          </div>
        </div>

        <div style={{ display: 'grid', gap: 8 }}>
          {assets.map((a) => (
            <a key={a.symbol} href={`/page/depositaddressscreen`} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 12 }}>
                <img src={a.icon} alt={a.symbol} width={28} height={28} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#111', fontWeight: 600 }}>{a.symbol}</div>
                  <div style={{ color: '#666', fontSize: 13 }}>{a.network}</div>
                </div>
                <div style={{ color: '#111', fontWeight: 600 }}>Select</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
