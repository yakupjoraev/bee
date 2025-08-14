import { IoChevronBack } from 'react-icons/io5';

export default function ProfileScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Profile</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 32, background: '#F0B11F', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 700 }}>B</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>BEEXPAY USER</div>
            <div style={{ fontSize: 13, color: '#666' }}>user@beexpay.com</div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: '#111' }}>
          <div style={{ padding: 16, borderBottom: '1px solid #F0F0F0' }}>Security & Preferences</div>
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #F0F0F0' }}>
              <span>Biometric login</span>
              <div style={{ width: 44, height: 24, background: '#E0E0E0', borderRadius: 12, position: 'relative' }}>
                <div style={{ width: 20, height: 20, borderRadius: 10, background: '#F4F4F4', position: 'absolute', top: 2, left: 2 }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>Notifications</span>
              <div style={{ width: 44, height: 24, background: '#E0E0E0', borderRadius: 12, position: 'relative' }}>
                <div style={{ width: 20, height: 20, borderRadius: 10, background: '#F4F4F4', position: 'absolute', top: 2, left: 2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
