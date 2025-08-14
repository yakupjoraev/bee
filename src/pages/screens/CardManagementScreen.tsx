import React from 'react';
import { IoChevronBack, IoEyeOutline, IoSnowOutline, IoWaterOutline } from 'react-icons/io5';

export default function CardManagementScreen() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Manage card</h2>
        <div style={{ width: 24 }} />
      </div>

      {/* Preview with eye toggle */}
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, background: '#f8f9fa', borderRadius: 12, marginBottom: 8, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#333' }}>Card details</div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F0B11F', border: 'none', color: '#fff', padding: '10px 16px', borderRadius: 25, cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
            <IoEyeOutline size={18} />
            <span style={{ fontSize: 12, fontWeight: 600 }}>View details</span>
          </button>
        </div>

        {/* Card visual */}
        <div style={{ borderRadius: 20, overflow: 'hidden', margin: '0 20px 20px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
          <div style={{ position: 'relative', height: 220, background: 'linear-gradient(135deg, #0057BC, #2a5298)' }}>
            <img src="/assets/carte-background.png" style={{ position: 'absolute', top: -10, left: -10, width: '110%', height: '110%', objectFit: 'cover', borderRadius: 20, opacity: 0.25 }} />
            <div style={{ position: 'relative', height: '100%', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 24, color: '#fff' }}>VISA</div>
                <div style={{ fontSize: 14, color: '#fff', opacity: 0.9 }}>Active</div>
              </div>
              <div>
                <div style={{ fontSize: 28, color: '#fff' }}>0.00</div>
                <div style={{ fontSize: 14, color: '#fff', opacity: 0.8 }}>USD</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 4 }}>TITULAIRE</div>
                  <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>BEEXPAY USER</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#fff', opacity: 0.7, marginBottom: 4 }}>LABEL</div>
                  <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>Ma carte</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden', margin: '0 20px 30px' }}>
          <div style={{ background: '#F9F9F9', padding: 15, borderBottom: '1px solid #EEE' }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: '#333' }}>Controls</div>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IoSnowOutline size={24} color="#2775CA" />
                <div style={{ fontSize: 16, color: '#333' }}>Freeze card</div>
              </div>
              <div style={{ width: 48, height: 28, background: '#ccc', borderRadius: 14, position: 'relative' }}>
                <div style={{ width: 24, height: 24, borderRadius: 12, background: '#f4f3f4', position: 'absolute', top: 2, left: 2 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
