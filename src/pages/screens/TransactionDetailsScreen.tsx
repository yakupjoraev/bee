import { IoChevronBack, IoCopyOutline, IoShareOutline } from 'react-icons/io5';

export default function TransactionDetailsScreen() {
  const rows = [
    ['Status', 'COMPLETED'],
    ['Network', 'BFinance'],
    ['Amount', '-25.00 USD'],
    ['Date', '15 Jun 2023, 12:00'],
    ['Merchant', 'Example Store'],
    ['Transaction ID', '0x1234...abcd'],
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Transaction details</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          {rows.map(([label, value], idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: idx < rows.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
              <div style={{ color: '#666' }}>{label}</div>
              <div style={{ color: '#333', fontWeight: 500 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#f5f5f5', border: '1px solid #eee', borderRadius: 10, padding: 12, cursor: 'pointer' }}>
            <IoCopyOutline /> Copy details
          </button>
          <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#F0B11F', border: 'none', color: '#fff', borderRadius: 10, padding: 12, cursor: 'pointer' }}>
            <IoShareOutline /> Share
          </button>
        </div>
      </div>
    </div>
  );
}
