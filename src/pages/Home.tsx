import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      {/* <h1 style={{ marginBottom: 12 }}>Home (Layout-only)</h1> */}
      <div style={{ textAlign: 'center', margin: '10px 0 20px' }}>
        <div style={{ fontSize: 18, fontWeight: 500, color: '#F0B11F', marginBottom: 5 }}>Total Balance</div>
        <div style={{ fontSize: 32, fontWeight: 600 }}>$ 0.00</div>
      </div>
      <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', padding: '10px 0', marginBottom: 24, width: '100%' }}>
        {[1,2,3].map((i) => (
          <div key={i} style={{ minWidth: 320, width: '100%', height: 200, borderRadius: 20, background: 'linear-gradient(135deg, #0057BC, #2a5298)', color: '#fff', padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 24, fontWeight: 500 }}>VISA</div>
              <div style={{ fontSize: 14, opacity: .9 }}>Actif</div>
            </div>
            <div style={{ margin: '10px 0' }}>
              <div style={{ fontSize: 28, fontWeight: 500 }}>0.00</div>
              <div style={{ fontSize: 14, opacity: .8 }}>USD</div>
            </div>
            <div style={{ fontSize: 18, letterSpacing: 2 }}>**** **** **** ****</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <div>
                <div style={{ fontSize: 12, opacity: .7 }}>TITULAIRE</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>BEEXPAY USER</div>
              </div>
              <div>
                <div style={{ fontSize: 12, opacity: .7 }}>LABEL</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Ma carte</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 680, margin: '0 auto 24px' }}>
        {['Add card', 'Top up', 'Manage'].map((t) => (
          <button key={t} style={{ background: '#F0B11F', color: '#fff', padding: '14px 0', borderRadius: 12, fontWeight: 600 }}>{t}</button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px', marginBottom: 10 }}>
        <div style={{ fontSize: 18, fontWeight: 500 }}>Recent Transactions</div>
        <a style={{ color: '#F0B11F', fontWeight: 500, cursor: 'pointer' }}>View all</a>
      </div>
      <div style={{ padding: '0 8px' }}>
        {[1,2,3].map((i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F0F0F0' }}>
            <div style={{ fontSize: 16, fontWeight: 500 }}>Transaction {i}</div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 16, fontWeight: 500 }}>-0.00 USD</div>
              <div style={{ fontSize: 14, color: '#999' }}>12 Jan, 12:00</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


