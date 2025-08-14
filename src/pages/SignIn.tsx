

export default function SignIn() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 30px', maxWidth: 520, margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h2 style={{ color: '#000', margin: '40px 0', fontSize: 24, fontWeight: 700 }}>Connexion</h2>
        </div>

        <div style={{ background: '#FFEBEE', padding: 15, borderRadius: 8, display: 'none' }}>
          <span style={{ color: '#F44336', marginLeft: 10 }}>Error text</span>
        </div>

        <div style={{ padding: '20px 0' }}>
          <label style={{ display: 'block', marginBottom: 8, color: '#333' }}>Email</label>
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0E0E0', marginBottom: 30, paddingBottom: 8 }}>
            <input type="email" placeholder="Email" style={{ flex: 1, fontSize: 16, color: '#333', padding: '8px 0', border: 'none', outline: 'none' }} />
          </div>

          <label style={{ display: 'block', marginBottom: 8, color: '#333' }}>Mot de passe</label>
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0E0E0', marginBottom: 10, paddingBottom: 8 }}>
            <input type="password" placeholder="Mot de passe" style={{ flex: 1, fontSize: 16, color: '#333', padding: '8px 0', border: 'none', outline: 'none' }} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
            <a style={{ color: '#000', cursor: 'pointer' }}>Mot de passe oublié ?</a>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 20, color: '#000' }}>
            Vous n'avez pas de compte ? <a style={{ color: '#F0B11F', fontWeight: 700, cursor: 'pointer' }}>S'inscrire</a>
          </div>

          <button style={{
            background: '#F0B11F',
            borderRadius: 30,
            padding: '15px 16px',
            color: '#fff',
            width: '100%',
            fontWeight: 700,
          }}>Se connecter</button>
        </div>
      </div>
    </div>
  );
}


