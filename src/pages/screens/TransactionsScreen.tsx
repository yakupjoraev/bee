import { IoChevronBack, IoCardOutline, IoCloseCircleOutline, IoTimeOutline } from 'react-icons/io5';

export default function TransactionsScreen() {
  const rows = [
    { icon: <IoCardOutline />, title: 'Payment by card', amount: '-25.00 USD', date: '15 Jun, 12:00', color: '#4CAF50' },
    { icon: <IoCloseCircleOutline />, title: 'Failed payment', amount: '-10.00 USD', date: '12 Jun, 09:10', color: '#F44336', strike: true },
    { icon: <IoTimeOutline />, title: 'Pending payment', amount: '-18.00 USD', date: '10 Jun, 17:30', color: '#FFA000' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Transactions</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        {rows.map((r, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
            <div style={{ marginRight: 15, fontSize: 24, color: r.color }}>{r.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#000', marginBottom: 5 }}>{r.title}</div>
              <div style={{ fontSize: 14, color: '#999' }}>{r.date}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 500, color: r.color, textDecoration: r.strike ? 'line-through' : 'none' }}>{r.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
