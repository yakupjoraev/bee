import { IoChevronBack } from 'react-icons/io5';

export default function CardRechargeScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Card recharge</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 640, margin: '0 auto', width: '100%' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', display: 'grid', gap: 12 }}>
          <div style={{ color: '#666', fontSize: 13 }}>Choose a method</div>
          <a href="/page/cardrechargeassetselection" style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 12, color: '#111' }}>
              Crypto asset
            </div>
          </a>
          <div style={{ border: '1px solid #eee', borderRadius: 10, padding: 12, color: '#bbb' }}>
            Bank transfer (soon)
          </div>
        </div>
      </div>
    </div>
  );
}
