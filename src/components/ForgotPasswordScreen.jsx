import { useState } from 'react';

export default function ForgotPasswordScreen({ setCurrentScreen, handleForgot, loading }) {
  const [forgotEmail, setForgotEmail] = useState('');

  return (
    <div className="bg-emerald-100/20 border border-slate-200 p-8 rounded-2xl shadow-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Forgot password?</h2>
      <p className="text-xs text-slate-500 mb-6">Enter your registered email to receive a recovery code.</p>
      <form onSubmit={(e) => handleForgot(e, forgotEmail)} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email</label>
          <input type="email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-green-400 hover:bg-green-700 text-black hover:text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider cursor-pointer">
          {loading ? <span className="animate-spin">⏳</span> : 'Send Reset Instructions'}
        </button>
      </form>
      <div className="text-center mt-6">
        <button onClick={() => setCurrentScreen('login')} className="text-xs font-semibold text-green-600 hover:underline cursor-pointer">Back to sign in</button>
      </div>
    </div>
  );
}