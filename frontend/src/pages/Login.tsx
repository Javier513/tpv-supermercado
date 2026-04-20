import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Login pulsado! Si ves este mensaje, React está funcionando.');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#166534', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '12px', 
        width: '100%', 
        maxWidth: '400px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '32px', color: '#166534', marginBottom: '30px' }}>
          🛒 SuperMarket TPV
        </h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
          <button 
            type="submit"
            style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: '#15803d', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              fontSize: '18px'
            }}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}