import { IoChevronBack } from 'react-icons/io5';

export default function CardCreationDetailsScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Card details</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16, width: '100%' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, color: '#111', marginBottom: 8 }}>Configuration</div>
          <div style={{ display: 'grid', gap: 10 }}>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ color: '#666' }}>Card type</span>
              <select style={{ padding: 10, borderRadius: 10, border: '1px solid #E0E0E0' }}>
                <option>Virtual</option>
                <option>Plastic</option>
              </select>
            </label>
            <label style={{ display: 'grid', gap: 6 }}>
              <span style={{ color: '#666' }}>Delivery country</span>
              <input placeholder="France" style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0' }} />
            </label>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, color: '#111', marginBottom: 8 }}>Cost breakdown</div>
          <div style={{ display: 'grid', gap: 6, color: '#333' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Issuance</span>
              <span>9.90 USD</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Delivery</span>
              <span>14.90 USD</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>Total</span>
              <span>24.80 USD</span>
            </div>
          </div>
        </div>

        <button style={{ background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700, justifySelf: 'start' }}>Continue</button>
      </div>
    </div>
  );
}
