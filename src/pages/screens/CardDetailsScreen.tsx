import React from 'react';
import { IoChevronBack, IoEyeOutline, IoEyeOffOutline, IoCopyOutline, IoCardOutline } from 'react-icons/io5';

export default function CardDetailsScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', width: '100%' }}>
        <button style={{ padding: 8, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 500, color: '#000' }}>Card details</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 16 }}>
        {/* Card preview */}
        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', marginBottom: 20 }}>
          <div style={{ position: 'relative', padding: 20, height: 220, background: 'linear-gradient(135deg, #0057BC, #2a5298)' }}>
            <img src="/assets/carte-background.png" alt="bg" style={{ position: 'absolute', top: -10, left: -10, width: '110%', height: '110%', objectFit: 'cover', borderRadius: 20, opacity: 0.25 }} />
            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 500, color: '#fff' }}>VISA</div>
                <div style={{ fontSize: 14, color: '#fff', opacity: 0.9 }}>Active</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 500, color: '#fff' }}>0.00</div>
                <div style={{ fontSize: 14, color: '#fff', opacity: 0.8 }}>USD</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: 18, letterSpacing: 2, color: '#fff', marginRight: 8 }}>•••• •••• •••• ••••</div>
                <button style={{ background: 'transparent', border: 'none', padding: 4, cursor: 'pointer' }}>
                  <IoCopyOutline color="rgba(255,255,255,0.8)" size={16} />
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 4 }}>TITULAIRE</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>BEEXPAY USER</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 4 }}>EXP</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: 14, color: '#fff' }}>MM/YY</div>
                    <button style={{ background: 'transparent', border: 'none', padding: 4, marginLeft: 6, cursor: 'pointer' }}>
                      <IoCopyOutline color="rgba(255,255,255,0.8)" size={12} />
                    </button>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 4 }}>CVC</div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: 14, color: '#fff' }}>***</div>
                    <button style={{ background: 'transparent', border: 'none', padding: 4, marginLeft: 6, cursor: 'pointer' }}>
                      <IoCopyOutline color="rgba(255,255,255,0.8)" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details card */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: 20 }}>
          <h3 style={{ margin: 0, marginBottom: 16, fontSize: 18, fontWeight: 600, color: '#333' }}>Card information</h3>
          <div style={{ display: 'grid', rowGap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666' }}>Status</span>
              <span style={{ color: '#333' }}>Active</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666' }}>Card type</span>
              <span style={{ color: '#333' }}>Virtual</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <span style={{ color: '#666' }}>Currency</span>
              <span style={{ color: '#333' }}>USD</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ color: '#666' }}>Available balance</span>
              <span style={{ color: '#333' }}>$ 0.00</span>
            </div>
          </div>
        </div>

        {/* Action button */}
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', borderRadius: 10, padding: '12px 20px', background: '#F0B11F', color: '#fff', fontWeight: 500, border: 'none', boxShadow: '0 2px 6px rgba(0,0,0,0.15)', marginBottom: 24 }}>
          <IoCardOutline size={18} /> Ajouter au Wallet
        </button>
      </div>
    </div>
  );
}
