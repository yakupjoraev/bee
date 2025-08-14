import React from 'react';
import { IoChevronBack, IoWarning, IoAlertCircleOutline, IoNotificationsOutline } from 'react-icons/io5';

export default function NotificationsScreen() {
  const notifications = [
    { priority: 'URGENT', title: 'Action requise', message: 'Paiement 3D Secure à autoriser', icon: <IoWarning />, color: '#FF4757' },
    { priority: 'HIGH', title: 'Important', message: 'Paiement incomplet', icon: <IoAlertCircleOutline />, color: '#FFA726' },
    { priority: 'INFO', title: 'Info', message: 'Nouvelle fonctionnalité', icon: <IoNotificationsOutline />, color: '#42A5F5' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #F0F0F0', width: '100%' }}>
        <button style={{ padding: 5, background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <IoChevronBack size={22} />
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 500, color: '#000', margin: 0, textAlign: 'center', flex: 1 }}>Notifications</h2>
        <div style={{ width: 24 }} />
      </div>

      <div style={{ padding: 20 }}>
        {notifications.map((n, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: n.color + '20', display: 'grid', placeItems: 'center', color: n.color }}>
              {n.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#000' }}>{n.title}</div>
                {n.priority !== 'INFO' && (
                  <div style={{ fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 12, background: '#fff', color: n.priority === 'URGENT' ? '#FF4757' : '#FFA726', border: '1px solid rgba(0,0,0,0.1)' }}>
                    {n.priority}
                  </div>
                )}
              </div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>{n.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
