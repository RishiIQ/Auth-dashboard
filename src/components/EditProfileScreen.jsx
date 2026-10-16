export default function EditProfileScreen({ user, setUser, setCurrentScreen, handleUpdateProfile, loading }) {
  return (
    <div className="max-w-md mx-auto bg-emerald-100/20 border border-slate-200 p-8 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Edit Profile</h2>
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
          <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email</label>
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-green-600" required />
        </div>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={() => setCurrentScreen('profile')} className="flex-1 bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl text-xs cursor-pointer">Cancel</button>
          <button type="submit" disabled={loading} className="flex-1 bg-green-600 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer">Save</button>
        </div>
      </form>
    </div>
  );
}