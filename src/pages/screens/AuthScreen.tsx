import { IoPersonOutline, IoLockClosedOutline, IoEyeOutline } from 'react-icons/io5';

export default function AuthScreen() {
	return (
		<div style={{ minHeight: '100vh', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
			<div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 30px', maxWidth: 520, margin: '0 auto' , width: '100%' }}>
				{/* Заголовок */}
				<div style={{ textAlign: 'center', marginBottom: 20 }}>
					<h2 style={{ color: '#000', margin: '40px 0', fontSize: 24,  }}>Connexion</h2>
				</div>

				{/* Сообщение об ошибке (скрыто по умолчанию) */}
				<div style={{ display: 'none', flexDirection: 'row', alignItems: 'center', background: '#FFEBEE', padding: 15, borderRadius: 8, marginBottom: 15 }}>
					<span style={{ color: '#F44336', marginLeft: 10 }}>Erreur</span>
				</div>

				{/* Форма */}
				<div style={{ width: '100%', padding: '20px 0' }}>
					{/* Email */}
					<div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0E0E0', marginBottom: 30, paddingBottom: 8 }}>
					<IoPersonOutline style={{ marginRight: 10, color: '#333', fontSize: 22 }} />
						<input
							style={{ flex: 1, fontSize: 16, color: '#333333', padding: '8px 0', border: 'none', outline: 'none' }}
							placeholder="Email"
							type="email"
						/>
					</div>

					{/* Password */}
					<div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #E0E0E0', marginBottom: 10, paddingBottom: 8 }}>
						<IoLockClosedOutline style={{ marginRight: 10, color: '#333', fontSize: 22 }} />
						<input
							style={{ flex: 1, fontSize: 16, color: '#333333', padding: '8px 0', border: 'none', outline: 'none' }}
							placeholder="Mot de passe"
							type="password"
						/>
						<IoEyeOutline style={{ padding: 5, color: '#F0B11F', cursor: 'pointer', fontSize: 22 }} />
					</div>

					<div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
						<a style={{ color: '#000000', cursor: 'pointer', textDecoration: 'none' }}>Mot de passe oublié ?</a>
					</div>
				</div>

				{/* Нижний блок */}
				<div style={{ marginTop: 'auto' }}>
					<div style={{ textAlign: 'center', marginBottom: 20, color: '#000' }}>
						Vous n'avez pas de compte ?{' '}
						<a style={{ color: '#F0B11F', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>S'inscrire</a>
					</div>

					<button
						style={{
							background: '#F0B11F',
							borderRadius: 30,
							padding: '15px 16px',
							color: '#fff',
							width: '100%',
							fontWeight: 700,
						}}
					>
						Se connecter
					</button>
				</div>
			</div>
		</div>
	);
}
