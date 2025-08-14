import { IoChevronBack } from 'react-icons/io5';

export default function ForgotPasswordScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Forgot password</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 600 }}>
        <div style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>Enter your email to receive a reset code</div>
        <input style={{ padding: 12, borderRadius: 10, border: '1px solid #E0E0E0', width: '100%', marginBottom: 12 }} placeholder="email@domain.com" />
        <button style={{ width: '100%', background: '#F0B11F', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>Send code</button>
      </div>
    </div>
  );
}
