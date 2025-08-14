import { IoChevronBack, IoChatbubblesOutline, IoMailOutline } from 'react-icons/io5';

export default function SupportContactScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Support contact</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 720, margin: '0 auto', display: 'grid', gap: 16, width: '100%'}}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, color: '#111', marginBottom: 8 }}>Contact us</div>
          <div style={{ display: 'grid', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F0B11F', border: 'none', color: '#fff', padding: '12px 14px', borderRadius: 10, fontWeight: 700 }}>
              <IoChatbubblesOutline size={18} /> Live chat
            </button>
            <a href="mailto:support@example.com" style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', color: '#111', textDecoration: 'none', border: '1px solid #eee', padding: '12px 14px', borderRadius: 10 }}>
              <IoMailOutline size={18} /> support@example.com
            </a>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
          <div style={{ fontWeight: 600, color: '#111', marginBottom: 8 }}>FAQ</div>
          <div style={{ color: '#666', fontSize: 13 }}>Check the Help Center for instant answers.</div>
        </div>
      </div>
    </div>
  );
}
