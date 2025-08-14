import { IoChevronBack, IoMailOutline, IoLockClosed } from 'react-icons/io5';

export default function SignUpScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Sign up</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 600, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: 8 }}>
              <IoMailOutline /> Email
            </span>
            <input placeholder="email@domain.com" style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0' }} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: 8 }}>
              <IoLockClosed /> Password
            </span>
            <input type="password" placeholder="••••••••" style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0' }} />
          </label>
          <label style={{ display: 'grid', gap: 6 }}>
            <span style={{ color: '#666', display: 'flex', alignItems: 'center', gap: 8 }}>
              <IoLockClosed /> Confirm password
            </span>
            <input type="password" placeholder="••••••••" style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0' }} />
          </label>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: '#555', fontSize: 13 }}>
          <input type="checkbox" /> I accept Terms of Service
        </label>

        <div style={{ height: 16 }} />
        <button style={{ width: '100%', background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>Create account</button>

        <div style={{ textAlign: 'center', color: '#666', fontSize: 13, marginTop: 12 }}>
          Already have an account? <a href="/page/signin" style={{ color: '#F0B11F', textDecoration: 'none', fontWeight: 600 }}>Sign in</a>
        </div>
      </div>
    </div>
  );
}
