import { IoChevronBack, IoAlertCircle } from 'react-icons/io5';

export default function CardLockConfirmationScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%'   }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Are you sure you want to object?</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ flex: 1, padding: 20 }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #F0F0F0', borderRadius: 10, padding: 15 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <IoAlertCircle size={24} color="#F0B11F" />
            <div style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Did you know?</div>
          </div>
          <div style={{ fontSize: 14, color: '#666', lineHeight: '20px' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          </div>
        </div>
      </div>

      <div style={{ padding: 20, borderTop: '1px solid #F0F0F0' }}>
        <button style={{ width: '100%', background: '#F0B11F', borderRadius: 10, padding: '15px 0', color: '#fff', fontWeight: 'bold', border: 'none' }}>
          Lock the card online
        </button>
      </div>
    </div>
  );
}
