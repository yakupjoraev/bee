import { IoChevronBack } from 'react-icons/io5';

export default function ParametersScreen() {
  const items = [
    { label: 'Language', value: 'English' },
    { label: 'Currency', value: 'USD' },
    { label: 'Clear cache', value: '' },
    { label: 'Change password', value: '' },
    { label: 'Delete account', value: '' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Settings</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          {items.map((i, idx) => (
            <div key={i.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottom: idx < items.length - 1 ? '1px solid #F0F0F0' : 'none' }}>
              <div style={{ color: '#333' }}>{i.label}</div>
              <div style={{ color: '#666' }}>{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
