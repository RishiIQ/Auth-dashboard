import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginScreen({ setCurrentScreen, handleLogin, loading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  return (
    <div className="bg-emerald-100/20 border border-slate-200 p-8 rounded-3xl shadow-xl mt-12 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Sign in</h2>
      <form onSubmit={(e) => handleLogin(e, email, password, rememberMe)} className="space-y-6 mt-6">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rishi@stackly.com" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center my-2">
            <label className="block text-xs font-bold text-slate-600 uppercase">Password</label>
            <button type="button" onClick={() => setCurrentScreen('forgot')} className="text-xs font-semibold text-green-600 hover:underline cursor-pointer">Forgot?</button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type={showLoginPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="123456" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-16 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
            <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3.5 top-3 text-xs font-bold text-green-600 cursor-pointer">{showLoginPassword ? "HIDE" : "SHOW"}</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="rounded border-slate-300 text-green-600 w-4 h-4 cursor-pointer" />
          <label htmlFor="remember" className="text-xs text-slate-600 cursor-pointer">Remember device</label>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-green-500 hover:bg-green-700 text-black hover:text-white font-bold py-3 rounded-3xl text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2">
          {loading ? <span className="animate-spin">⏳</span> : <>Sign In <ArrowRight className="w-4 h-4" /></>}
        </button>
      </form>
      <p className="text-xs text-center text-slate-500 mt-6">Don't have an account? <button onClick={() => setCurrentScreen('register')} className="text-green-600 font-semibold hover:underline cursor-pointer">Register</button></p>
    </div>
  );
}