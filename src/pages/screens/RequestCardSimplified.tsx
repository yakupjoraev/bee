import React from 'react';
import { IoChevronBack, IoCardOutline, IoWarningOutline, IoCheckmarkCircle } from 'react-icons/io5';

export default function RequestCardSimplified() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Request a card</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        {/* Product stage */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <IoCardOutline size={22} color="#F0B11F" />
            <div style={{ fontSize: 16, fontWeight: 600, color: '#333' }}>Virtual VISA</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, color: '#666' }}>Cost</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#000' }}>$ 15.00</div>
            </div>
            <button style={{ background: '#F0B11F', border: 'none', color: '#fff', padding: '10px 16px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Choose</button>
          </div>
        </div>

        {/* Payment stage (static view) */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: '#333', marginBottom: 8 }}>Payment</div>
          <div style={{ fontSize: 14, color: '#666' }}>Send 15 USDT to the provided address on TRC20 network.</div>
        </div>

        {/* Waiting stage */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <IoWarningOutline size={18} color="#FFA000" />
            <div style={{ fontSize: 14, fontWeight: 600, color: '#FFA000' }}>Awaiting payment confirmation</div>
          </div>
          <div style={{ fontSize: 13, color: '#666' }}>This may take a few minutes depending on the network.</div>
        </div>

        {/* Success banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, background: '#E8F5E9', padding: 12, borderRadius: 8 }}>
          <IoCheckmarkCircle size={18} color="#2E7D32" />
          <div style={{ fontSize: 13, color: '#2E7D32' }}>Your card will be created automatically after payment.</div>
        </div>
      </div>
    </div>
  );
}
