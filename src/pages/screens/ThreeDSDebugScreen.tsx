import { IoChevronBack, IoRefresh, IoQrCodeOutline } from 'react-icons/io5';

export default function ThreeDSDebugScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>3DS Debug</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16, width: '100%' }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 600, color: '#111' }}>Simulate status</div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F0B11F', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 8, fontWeight: 700 }}>
              <IoRefresh size={16} /> Refresh
            </button>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#111' }}>
              <input type="radio" name="status" style={{ color: '#111', accentColor: '#F0B11F' }} /> Approved
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#111' }}>
              <input type="radio" name="status" style={{ color: '#111', accentColor: '#F0B11F' }} /> Declined
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#111' }}>
              <input type="radio" name="status" style={{ color: '#111', accentColor: '#F0B11F' }} /> Pending
            </label>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee', display: 'grid', gap: 8 }}>
          <div style={{ fontWeight: 600, color: '#111' }}>Verification QR</div>
          <div style={{ display: 'grid', placeItems: 'center', height: 180, border: '1px dashed #e3e3e3', borderRadius: 10 }}>
            <IoQrCodeOutline size={80} color="#bbb" />
          </div>
        </div>
      </div>
    </div>
  );
}
