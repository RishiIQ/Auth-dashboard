export default function Header({ currentScreen, setCurrentScreen, isAuthenticated, handleLogout }) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-xs sticky top-0 z-30">
      <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => isAuthenticated && setCurrentScreen('dashboard')}>
        <div className="w-8 h-8 bg-green-600 text-white font-bold rounded-lg flex items-center justify-center text-sm">A</div>
        <h1 className="text-base font-bold text-slate-900">Access Control Console</h1>
      </div>
      {isAuthenticated && (
        <nav className="flex items-center gap-2">
          <button onClick={() => setCurrentScreen('dashboard')} className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${currentScreen === 'dashboard' ? 'bg-green-50 text-green-600' : 'text-slate-600 hover:bg-slate-100'}`}>Dashboard</button>
          <button onClick={() => setCurrentScreen('profile')} className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${['profile', 'edit-profile', 'change-password'].includes(currentScreen) ? 'bg-green-50 text-green-600' : 'text-slate-600 hover:bg-slate-100'}`}>Profile</button>
          <button onClick={handleLogout} className="px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">Logout</button>
        </nav>
      )}
    </header>
  );
}