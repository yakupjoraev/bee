import React from 'react';
import { IoChevronBack, IoCopyOutline, IoInformationCircleOutline } from 'react-icons/io5';

export default function DepositAddressScreen() {
  const network = 'TRC20';
  const address = 'TX4nF...9QpZt';

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Receive crypto</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F8F9FA', padding: '6px 12px', borderRadius: 12 }}>
            <img src={network === 'TRC20' ? '/assets/icons/tron-trx-logo.svg' : '/assets/icons/ethereum-eth-logo.svg'} width={16} height={16} />
            <span style={{ fontSize: 14, color: '#333' }}>{network}</span>
          </div>
        </div>

        {/* QR */}
        <div style={{ display: 'grid', placeItems: 'center', marginBottom: 20 }}>
          <div style={{ background: '#FFFFFF', padding: 15, borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ width: 150, height: 150, background: 'repeating-linear-gradient(45deg,#eee,#eee 10px,#ddd 10px,#ddd 20px)' }} />
          </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: 15 }}>
          <div style={{ fontSize: 14, color: '#333', marginBottom: 8 }}>Address</div>
          <div style={{ display: 'flex', alignItems: 'center', background: '#FFFFFF', borderRadius: 8, padding: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ flex: 1, fontSize: 13, color: '#333' }}>{address}</div>
            <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <IoCopyOutline size={20} color="#F0B11F" />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,123,255,.08)', borderRadius: 8, padding: 10 }}>
          <IoInformationCircleOutline size={16} color="#0d6efd" />
          <div style={{ fontSize: 12, color: '#0d6efd' }}>Send only USDT on {network}. Sending any other asset may result in permanent loss.</div>
        </div>
      </div>
    </div>
  );
}
