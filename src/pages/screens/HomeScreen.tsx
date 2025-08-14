import { IoChevronBack, IoCard } from 'react-icons/io5';

export default function HomeScreen() {
  const cards = [1, 2, 3];
  const txs = [
    { title: 'Payment by card', amount: '-25.00 USD', date: '15 Jun, 12:00' },
    { title: 'Payment by card', amount: '-10.20 USD', date: '10 Jun, 15:45' },
    { title: 'Payment by card', amount: '-8.34 USD', date: '08 Jun, 19:05' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Home</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#F0B11F', marginBottom: 5 }}>Total Balance</div>
          <div style={{ fontSize: 32, fontWeight: 600, color: '#000' }}>$ 0.00</div>
        </div>

        <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap', padding: '10px 0', marginBottom: 24, width: '100%' }}>
          {cards.map((i) => (
            <div key={i} style={{ minWidth: 320, width: '100%', height: 200, borderRadius: 20, background: 'linear-gradient(135deg, #0057BC, #2a5298)', color: '#fff', padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 24, fontWeight: 500 }}>VISA</div>
                <div style={{ fontSize: 14, opacity: .9 }}>Active</div>
              </div>
              <div style={{ margin: '10px 0' }}>
                <div style={{ fontSize: 28, fontWeight: 500 }}>0.00</div>
                <div style={{ fontSize: 14, opacity: .8 }}>USD</div>
              </div>
              <div style={{ fontSize: 18, letterSpacing: 2 }}>**** **** **** ****</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#000' }}>Recent Transactions</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#F0B11F' }}>View all</div>
        </div>
        <div>
          {txs.map((t, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #F0F0F0' }}>
              <div style={{ marginRight: 15, fontSize: 24, color: '#4CAF50', display: 'flex', alignItems: 'center' }}>
                <IoCard size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 500, color: '#000', marginBottom: 5 }}>{t.title}</div>
                <div style={{ fontSize: 14, color: '#999' }}>{t.date}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 500, color: '#4CAF50' }}>{t.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
