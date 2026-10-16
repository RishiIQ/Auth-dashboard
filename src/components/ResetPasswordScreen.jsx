import { useState } from 'react';

export default function ResetPasswordScreen({ setCurrentScreen, handleReset, loading }) {
  const [resetCode, setResetCode] = useState('');
  const [newResetPassword, setNewResetPassword] = useState('');

  return (
    <div className="bg-emerald-100/20 border border-slate-200 p-8 rounded-2xl shadow-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Set new password</h2>
      <form onSubmit={(e) => handleReset(e, resetCode, newResetPassword)} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Verification Code (6 digits)</label>
          <input type="text" maxLength={6} value={resetCode} onChange={(e) => setResetCode(e.target.value.replace(/\D/g, ''))} placeholder="000000" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-mono tracking-widest focus:outline-none focus:border-green-600" required />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">New Password (Min 6 chars)</label>
          <input type="password" value={newResetPassword} onChange={(e) => setNewResetPassword(e.target.value)} placeholder="••••••••" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-green-400 hover:bg-green-700 text-black hover:text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider cursor-pointer">
          {loading ? <span className="animate-spin">⏳</span> : 'Update Credentials'}
        </button>
      </form>
      <div className="text-center mt-6">
        <button onClick={() => setCurrentScreen('login')} className="text-xs font-semibold text-green-600 hover:underline cursor-pointer">Back to sign in</button>
      </div>
    </div>
  );
}