import React from 'react';
import { IoChevronBack, IoLockClosed, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

export default function ThreeDSecureApprovalScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>3D Secure</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20, maxWidth: 640, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 12, padding: 16, border: '1px solid #eee' }}>
            <IoLockClosed size={22} color="#333" />
            <div>
              <div style={{ fontWeight: 600, color: '#111' }}>Confirm purchase</div>
              <div style={{ color: '#666', fontSize: 13 }}>Merchant: Example Store • Amount: 25.00 USD</div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', background: '#22C55E', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>
              <IoCheckmarkCircle size={20} /> Approve
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', background: '#EF4444', border: 'none', color: '#fff', padding: '14px 16px', borderRadius: 10, fontWeight: 700 }}>
              <IoCloseCircle size={20} /> Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
