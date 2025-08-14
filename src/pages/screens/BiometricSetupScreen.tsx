import { IoShieldCheckmark, IoInformationCircleOutline, IoChevronBack } from 'react-icons/io5';

export default function BiometricSetupScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F8F8', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px', gap: 10, width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack style={{ fontSize: 22 }} />
        </button>
        <h2 style={{ color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Sécurité biométrique</h2>
        <div style={{ width: 34 }} />
      </div>

      <div style={{ flex: 1, padding: '0 20px 20px' }}>
        <p style={{ color: '#666', lineHeight: '24px', marginBottom: 40 }}>
          La biométrie est une fonctionnalité de sécurité supplémentaire qui garantit que vos transactions sont protégées.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', marginBottom: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <IoShieldCheckmark style={{ color: '#F0B11F', fontSize: 22 }} />
              <h3 style={{ color: '#000', margin: 0 }}>Biométrie</h3>
            </div>
            <small style={{ color: '#666' }}>Utiliser la biométrie pour vous connecter rapidement et en sécurité</small>
          </div>
          <div>
            <div style={{ width: 44, height: 24, background: '#E0E0E0', borderRadius: 12, position: 'relative' }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, background: '#F4F4F4', position: 'absolute', top: 2, left: 2 }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: 15, background: '#FFF3CD', borderRadius: 8, borderLeft: '4px solid #F0B11F', marginBottom: 30 }}>
          <IoInformationCircleOutline style={{ color: '#F0B11F', fontSize: 20 }} />
          <p style={{ color: '#856404', lineHeight: '20px', margin: 0 }}>
            L'authentification biométrique n'est pas disponible sur cet appareil ou n'est pas configurée.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#666' }}>État actuel :</span>
          <strong style={{ color: '#FF3B30' }}>Désactivé</strong>
        </div>
      </div>
    </div>
  );
}
