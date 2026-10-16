import { AlertCircle } from 'lucide-react';

export default function ConfirmModal({ modal, setModal }) {
  if (!modal) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-red-100 border border-red-200 max-w-md w-full p-6 shadow-2xl rounded-2xl relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl"><AlertCircle className="w-5 h-5" /></div>
          <h3 className="text-base font-bold text-red-950/80">{modal.title}</h3>
        </div>
        <p className="text-xs text-slate-800 mb-6 leading-relaxed">{modal.message}</p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setModal(null)} className="px-4 py-2 text-xs font-bold bg-slate-100 text-slate-700 hover:bg-red-300 hover:text-black rounded-xl cursor-pointer">Cancel</button>
          <button onClick={() => { modal.onConfirm(); setModal(null); }} className="px-4 py-2 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded-xl cursor-pointer">Confirm</button>
        </div>
      </div>
    </div>
  );
}