import React, { useState } from 'react';
import { IoClose, IoSearch, IoCopyOutline, IoInformationCircleOutline, IoWallet, IoCheckmarkCircle } from 'react-icons/io5';

type ModalSpec = { key: string; title: string; content: React.ReactNode };

const sectionTitle: React.CSSProperties = { fontSize: 16, fontWeight: 600, color: '#111', margin: '0 0 8px' };
const labelStyle: React.CSSProperties = { fontSize: 13, color: '#666' };
const row: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' };
const primaryBtn: React.CSSProperties = { background: '#F0B11F', color: '#fff', border: 'none', padding: '12px 14px', borderRadius: 10, fontWeight: 700 };
const secondaryBtn: React.CSSProperties = { background: '#F0F0F0', color: '#111', border: 'none', padding: '12px 14px', borderRadius: 10, fontWeight: 600 };

const modals: ModalSpec[] = [
  {
    key: 'welcome-permissions',
    title: 'Welcome • Permissions',
    content: (
      <div>
        <div style={{ display: 'grid', gap: 12 }}>
          <h3 style={{ margin: 0, textAlign: 'center' }}>Bienvenue dans BeeXpay !</h3>
          <div style={{ fontSize: 14, color: '#111' }}>Pour vous offrir la meilleure expérience, nous aimerions :</div>
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: '#F0F0F0', display: 'grid', placeItems: 'center' }}>🔔</div>
              <div>
                <div style={{ fontWeight: 600, color: '#111' }}>Notifications</div>
                <div style={{ fontSize: 13, color: '#666' }}>Recevoir des alertes importantes sur vos transactions</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: '#F0F0F0', display: 'grid', placeItems: 'center' }}>👆</div>
              <div>
                <div style={{ fontWeight: 600, color: '#111' }}>Biométrie</div>
                <div style={{ fontSize: 24, color: '#666' }}>Connexion rapide et sécurisée</div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: '#999', textAlign: 'center' }}>Vous pourrez modifier ces paramètres plus tard.</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 6, justifyContent: 'space-between' }}>
            <button style={{ ...secondaryBtn, flex: 1 }}>Plus tard</button>
            <button style={{ ...primaryBtn, flex: 1 }}>Autoriser</button>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'asset-selection',
    title: 'AssetSelectionModal',
    content: (
      <div style={{ display: 'grid', gap: 12 }}>
        <h3 style={{ margin: 0 }}>Sélectionner un actif</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#FAFAFA', border: '1px solid #eee', borderRadius: 10, padding: '10px 12px' }}>
          <IoSearch color="#999" />
          <input placeholder="Rechercher un actif..." style={{ border: 'none', outline: 'none', flex: 1, background: 'transparent' }} />
        </div>
        <div style={{ display: 'grid', gap: 8 }}>
          {[
            { symbol: 'USDT', network: 'TRC20' },
            { symbol: 'USDC', network: 'ERC20' },
            { symbol: 'BTC', network: 'Bitcoin' },
            { symbol: 'ETH', network: 'ERC20' }
          ].map((a) => (
            <div key={a.symbol} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 14, background: '#EEE', display: 'grid', placeItems: 'center', fontSize: 12 }}>{a.symbol[0]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: '#111', fontWeight: 600 }}>{a.symbol}</div>
                <div style={{ color: '#666', fontSize: 12 }}>{a.network}</div>
              </div>
              <div style={{ color: '#111', fontWeight: 600 }}>Select</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    key: 'card-wallet',
    title: 'CardWalletModal',
    content: (
      <div style={{ display: 'grid', gap: 14 }}>
        <h3 style={{ margin: 0, textAlign: 'center' }}>Ajouter à Wallet</h3>
        <div style={{ borderRadius: 16, padding: 16, color: '#fff', background: 'linear-gradient(135deg,#0057BC,#2a5298)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontWeight: 600 }}>VISA</div>
            <div style={{ opacity: .85, fontSize: 12 }}>Virtual</div>
          </div>
          <div style={{ fontSize: 18, letterSpacing: 2, marginBottom: 8 }}>5432 •••• •••• 1234</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: .9 }}>
            <div>
              <div>TITULAIRE</div>
              <div style={{ fontWeight: 600 }}>JOHN DOE</div>
            </div>
            <div>
              <div>EXPIRE</div>
              <div style={{ fontWeight: 600 }}>12/28</div>
            </div>
          </div>
        </div>
        <div>
          <div style={row}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IoInformationCircleOutline color="#F0B11F" />
              <div style={{ ...labelStyle, color: '#333' }}>Informations à copier</div>
            </div>
          </div>
          <div style={row}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={labelStyle}>Numéro de carte</span>
            </div>
            <button style={{ ...secondaryBtn, display: 'flex', alignItems: 'center', gap: 6 }}>
              <IoCopyOutline color="#F0B11F" /> Copier
            </button>
          </div>
          <div style={row}>
            <span style={labelStyle}>Date d'expiration</span>
            <button style={{ ...secondaryBtn, display: 'flex', alignItems: 'center', gap: 6 }}>
              <IoCopyOutline color="#F0B11F" /> Copier
            </button>
          </div>
          <div style={row}>
            <span style={labelStyle}>Code CVC</span>
            <button style={{ ...secondaryBtn, display: 'flex', alignItems: 'center', gap: 6 }}>
              <IoCopyOutline color="#F0B11F" /> Copier
            </button>
          </div>
          <div style={row}>
            <span style={labelStyle}>Titulaire</span>
            <button style={{ ...secondaryBtn, display: 'flex', alignItems: 'center', gap: 6 }}>
              <IoCopyOutline color="#F0B11F" /> Copier
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{ ...primaryBtn, display: 'flex', alignItems: 'center', gap: 8 }}>
            <IoWallet /> Ouvrir Wallet
          </button>
        </div>
      </div>
    )
  },
  {
    key: 'language-selector',
    title: 'Language Selector',
    content: (
      <div style={{ display: 'grid', gap: 12 }}>
        <h3 style={{ margin: 0, color: '#111' }}>Sélectionner une langue</h3>
        {[{ code: 'fr', name: 'Français', flag: '🇫🇷' }, { code: 'en', name: 'English', flag: '🇺🇸' }].map((l, i) => (
          <div key={l.code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: i===0 ? '#F0B11F20' : '#F8F8F8', border: i===0 ? '2px solid #F0B11F' : 'none', borderRadius: 12, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#111' }}>
              <div style={{ fontSize: 22, color: '#111', fontWeight: 600 }}>{l.flag}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#111' }}>{l.name}</div>
            </div>
            {i===0 && <IoCheckmarkCircle size={22} color="#F0B11F" />}
          </div>
        ))}
      </div>
    )
  },
  {
    key: 'card-topup-confirm',
    title: 'Card Top-up • Confirm',
    content: (
      <div style={{ display: 'grid', gap: 10 }}>
        <h3 style={{ margin: 0, color: '#111' }}>Confirmer le transfert</h3>
        <div style={row}><span style={labelStyle}>Cryptomonnaie :</span><span style={{ fontWeight: 600 }}>USDT</span></div>
        <div style={row}><span style={labelStyle}>Solde actuel :</span><span>120.5000 USDT</span></div>
        <div style={row}><span style={labelStyle}>Montant à transférer :</span><span>10.0000 USDT</span></div>
        <div style={row}><span style={labelStyle}>Commission (0.20%) :</span><span>0.0200 USDT</span></div>
        <div style={row}><span style={labelStyle}>Frais de réseau :</span><span>1.0000 USDT</span></div>
        <div style={{ height: 1, background: '#eee', margin: '6px 0' }} />
        <div style={row}><span style={{ ...labelStyle, fontWeight: 700 }}>Solde après transfert :</span><span style={{ fontWeight: 700 }}>109.4800 USDT</span></div>
        <div style={row}><span style={{ ...labelStyle, fontWeight: 700 }}>Montant crédité sur la carte :</span><span style={{ fontWeight: 700, color: '#22C55E' }}>8.98 USD</span></div>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button style={{ ...secondaryBtn, flex: 1 }}>Annuler</button>
          <button style={{ ...primaryBtn, flex: 1 }}>Confirmer</button>
        </div>
      </div>
    )
  },
  {
    key: '3ds-log-detail',
    title: '3DS Log • Details',
    content: (
      <div style={{ display: 'grid', gap: 10 }}>
        <h3 style={{ margin: 0, color: '#111' }}>Détails du Log</h3>
        <div>
          <div style={sectionTitle}>Niveau</div>
          <div style={{ color: '#FF3B30', fontWeight: 600 }}>ERROR</div>
        </div>
        <div>
          <div style={sectionTitle}>Timestamp</div>
          <div>12/07/2025, 10:24:11</div>
        </div>
        <div>
          <div style={sectionTitle}>Message</div>
          <div>Payment challenge failed due to timeout</div>
        </div>
        <div>
          <div style={sectionTitle}>Données</div>
          <pre style={{ background: '#F5F5F5', padding: 10, color: '#111', borderRadius: 8, maxHeight: 200, overflow: 'auto' }}>{`{\n  "txId": "abc123",\n  "status": "ERROR"\n}`}</pre>
        </div>
      </div>
    )
  },
  {
    key: 'country-selector',
    title: 'Country Selector',
    content: (
      <div style={{ display: 'grid', gap: 8 }}>
        <h3 style={{ margin: 0, color: '#111' }}>Sélectionner un pays</h3>
        {['France','Belgique','Suisse','Canada','Allemagne','Espagne','Italie','Royaume-Uni','États-Unis','Portugal'].map((c) => (
          <div key={c} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#F8F8F8', borderRadius: 12, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 24, height: 16, background: '#EEE', borderRadius: 3 }} />
              <div style={{ color: '#111', fontWeight: 600 }}>{c}</div>
            </div>
            <IoCheckmarkCircle size={18} color="transparent" />
          </div>
        ))}
      </div>
    )
  },
];

export default function ModalsGallery() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const current = modals.find(m => m.key === openKey) || null;

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ marginBottom: 12 }}>Modals Gallery</h2>
      <div style={{ display: 'grid', gap: 8, maxWidth: 560 }}>
        {modals.map(m => (
          <button key={m.key} onClick={() => setOpenKey(m.key)} style={{ textAlign: 'left', padding: 12, borderRadius: 8, border: '1px solid #e0e0e0' }}>
            {m.title}
          </button>
        ))}
      </div>

      {current && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'grid', placeItems: 'center' }} onClick={() => setOpenKey(null)}>
          <div style={{ width: '92%', maxWidth: 520, background: '#fff', borderRadius: 16, padding: 16, position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpenKey(null)} aria-label="close" style={{ position: 'absolute', right: 10, top: 10, background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <IoClose size={22} />
            </button>
            {current.content}
          </div>
        </div>
      )}
    </div>
  );
}


