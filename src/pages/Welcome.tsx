import React from 'react';

export default function Welcome() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F0F0F0',
      backgroundImage: 'url(/assets/images/background-start-page.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <div />
        <div style={{ maxWidth: 640 }}>
          <div style={{ marginBottom: 16 }}>
            <img src="/assets/images/logo.svg" width={100} height={100} alt="logo" />
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: '#000', lineHeight: '40px', marginBottom: 16 }}>
            Your crypto,<br/>your money,<br/>
            <span style={{ color: '#F0B11F' }}>instantly.</span>
          </h1>
          <p style={{ fontSize: 16, color: '#000', lineHeight: '22px' }}>
            Your elevate account is your key to unlock a universe of opportunities
          </p>
        </div>
        <div style={{ display: 'grid', gap: 12, maxWidth: 520, width: '100%' }}>
          <button style={{
            width: '100%',
            background: '#F0B11F',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 30,
            padding: '14px 20px',
          }}>SIGN IN</button>
          <button style={{
            width: '100%',
            background: '#F0F0F0',
            color: '#000',
            fontWeight: 700,
            borderRadius: 30,
            padding: '14px 20px',
          }}>CREATE AN ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}


