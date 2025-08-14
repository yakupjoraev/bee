import { IoChevronBack, IoCard, IoAddCircle } from 'react-icons/io5';

export default function MyCardsScreen() {
  const cards = [
    { brand: 'VISA', last4: '1234', status: 'Active' },
    { brand: 'VISA', last4: '5678', status: 'Frozen' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>My cards</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, display: 'grid', gap: 16 }}>
        {cards.map((c, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 48, height: 32, borderRadius: 6, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, #0057BC, #2a5298)', color: '#fff' }}>
                <IoCard />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#111' }}>{c.brand} •••• {c.last4}</div>
                <div style={{ fontSize: 13, color: '#666' }}>{c.status}</div>
              </div>
            </div>
            <button style={{ background: '#F0B11F', border: 'none', color: '#fff', padding: '10px 12px', borderRadius: 10, fontWeight: 700 }}>Manage</button>
          </div>
        ))}

        <button style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', background: '#fff', color: '#111', border: '1px dashed #E1E1E1', padding: '14px 16px', borderRadius: 12 }}>
          <IoAddCircle size={18} color="#F0B11F" /> Request new virtual card
        </button>
      </div>
    </div>
  );
}
