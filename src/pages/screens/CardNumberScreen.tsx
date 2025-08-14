  
import { IoChevronBack, IoCopyOutline } from 'react-icons/io5';

export default function CardNumberScreen() {
  const fullCardNumber = '1432 4423 7249 1243';
  const expiryDate = '01/25';
  const cvv = '433';

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Card number</h2>
        <div style={{ width: 24 }} />
      </div>

      {/* Card */}
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <div style={{ width: '85%', height: 200, borderRadius: 15, padding: 20, display: 'flex', justifyContent: 'space-between', background: 'linear-gradient(135deg,#8E43E7,#7737C8)', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 500, color: '#fff' }}>{fullCardNumber}</div>
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <IoCopyOutline color="#fff" size={24} />
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 16, color: '#fff' }}>Jhon thison</div>
            <div style={{ fontSize: 16, color: '#fff' }}>{expiryDate}</div>
          </div>
          <div style={{ position: 'absolute', top: 15, right: 15, display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 28, height: 28, borderRadius: 14, background: '#fff', display: 'grid', placeItems: 'center' }}>
              <span style={{ color: '#F0B11F', fontWeight: 'bold' }}>B</span>
            </div>
            <div style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>BeeXpay</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F5F5F5', borderRadius: 10, padding: '15px 15px', marginBottom: 20 }}>
          <div style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>{fullCardNumber}</div>
          <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <IoCopyOutline color="#F0B11F" size={24} />
          </button>
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 5 }}>EXPIRE TO END</div>
            <div style={{ background: '#F5F5F5', borderRadius: 10, padding: 15, textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{expiryDate}</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 5 }}>CVV</div>
            <div style={{ background: '#F5F5F5', borderRadius: 10, padding: 15, textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{cvv}</div>
            </div>
          </div>
        </div>
        <div style={{ background: '#FFFFFF', border: '1px solid #F0F0F0', borderRadius: 10, padding: 15 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <span style={{ color: '#F0B11F' }}>ℹ️</span>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Good to know</div>
          </div>
          <div style={{ fontSize: 14, color: '#666', lineHeight: '20px' }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </div>
        </div>
      </div>
    </div>
  );
}
