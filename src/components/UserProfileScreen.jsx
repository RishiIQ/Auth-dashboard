export default function UserProfileScreen({ user, setCurrentScreen }) {
  return (
    <div className="max-w-xl mx-auto bg-white border border-slate-200 p-5 rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-yellow-100 p-6 text-black flex justify-between rounded-3xl items-center">
        <div>
          <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest block mb-1">Identity Record</span>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-xs text-slate-600 mt-0.5">{user.role} • {user.department}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setCurrentScreen('edit-profile')} className="px-3 py-2 bg-black hover:bg-black/70 text-white text-xs font-bold rounded-xl cursor-pointer">Edit</button>
          <button onClick={() => setCurrentScreen('change-password')} className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl cursor-pointer">Password</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-100 text-sm p-5 rounded-2xl mt-3">
        <div className="bg-red-100 p-5 rounded-2xl"><dt className="text-[10px] font-bold text-slate-800 uppercase mb-1">Email</dt><dd className="font-semibold text-blue-500">{user.email}</dd></div>
        <div className="bg-blue-100 p-5 rounded-2xl"><dt className="text-[10px] font-bold text-slate-800 uppercase mb-1">Status</dt><dd className="text-emerald-700 font-bold text-xs">Active</dd></div>
      </div>
    </div>
  );
}