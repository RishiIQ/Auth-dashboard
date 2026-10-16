import { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function RegisterScreen({ setCurrentScreen, handleRegister, loading }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-emerald-100/20 border border-slate-200 p-8 rounded-2xl shadow-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Create Account</h2>
      <form onSubmit={(e) => handleRegister(e, name, email, password, confirmPassword)} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rishi Murugan" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Work Email</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Password (Min 6 chars)</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type={showRegPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-16 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
            <button type="button" onClick={() => setShowRegPassword(!showRegPassword)} className="absolute right-3.5 top-3 text-xs font-bold text-green-600 cursor-pointer">{showRegPassword ? "HIDE" : "SHOW"}</button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-16 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3.5 top-3 text-xs font-bold text-green-600 cursor-pointer">{showConfirmPassword ? "HIDE" : "SHOW"}</button>
          </div>
        </div>
        <button type="submit" disabled={loading} className="w-full bg-green-400 hover:bg-green-700 text-black hover:text-white font-bold py-3 rounded-3xl text-xs uppercase tracking-wider transition-colors cursor-pointer">
          {loading ? <span className="animate-spin">⏳</span> : 'Register Account'}
        </button>
      </form>
      <p className="text-xs text-center text-slate-500 mt-6">Already registered? <button onClick={() => setCurrentScreen('login')} className="text-green-00 font-semibold hover:underline cursor-pointer">Sign in</button></p>
    </div>
  );
}