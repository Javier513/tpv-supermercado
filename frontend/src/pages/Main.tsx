import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(currentUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-emerald-700">🛒 SuperMarket TPV</h1>
          <p className="text-gray-600 mt-1">
            Bienvenido, <span className="font-semibold">{user.name}</span> 
            <span className="ml-3 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
              {user.role.toUpperCase()}
            </span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition"
        >
          Cerrar sesión
        </button>
      </header>

      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Pantalla Principal - TPV Supermercado</h2>
        <p className="text-gray-600">Aquí empezaremos a añadir las secciones de Frutería, Panadería, etc.</p>
        
        <div className="mt-10 grid grid-cols-2 gap-6 max-w-2xl">
          <button className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-left">
            <div className="text-4xl mb-4">🍎</div>
            <h3 className="text-xl font-semibold">Frutería</h3>
            <p className="text-gray-500">Pesar productos por kg</p>
          </button>

          <button className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition text-left">
            <div className="text-4xl mb-4">🥖</div>
            <h3 className="text-xl font-semibold">Panadería</h3>
            <p className="text-gray-500">Añadir unidades</p>
          </button>
        </div>
      </div>
    </div>
  );
}