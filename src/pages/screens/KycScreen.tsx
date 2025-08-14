import { IoChevronBack } from 'react-icons/io5';

export default function KycScreen() {
  const steps = [
    { title: 'Start', desc: 'Initialize KYC process' },
    { title: 'Documents', desc: 'Upload your documents' },
    { title: 'Review', desc: 'Review and submit' },
    { title: 'Completed', desc: 'Verification in progress' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>KYC</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ display: 'grid', gap: 10 }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: '#fff', borderRadius: 10, border: '1px solid #eee' }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: '#F0B11F', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700 }}>{idx + 1}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#333' }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#666' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
