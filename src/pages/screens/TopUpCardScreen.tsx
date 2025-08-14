import { IoChevronBack } from 'react-icons/io5';

export default function TopUpCardScreen() {
  const options = [
    { title: 'External deposit (QR)', desc: 'Generate deposit address and receive from external source' },
    { title: 'From ERC20 wallet', desc: 'Transfer funds from your ERC20 wallet' },
    { title: 'From TRC20 wallet', desc: 'Transfer funds from your TRC20 wallet' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Top up card</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 12 }}>Choose a method</div>
        <div style={{ display: 'grid', gap: 12 }}>
          {options.map((o) => (
            <button key={o.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', cursor: 'pointer' }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>{o.title}</div>
                <div style={{ fontSize: 13, color: '#666' }}>{o.desc}</div>
              </div>
              <div style={{ color: '#999' }}>›</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
