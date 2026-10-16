import { CheckCircle, AlertTriangle } from 'lucide-react';

export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-xs font-semibold ${toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
      {toast.type === 'success' ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-red-600" />}
      <span>{toast.message}</span>
    </div>
  );
}