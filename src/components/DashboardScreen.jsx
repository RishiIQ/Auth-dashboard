import { useState } from 'react';
import { Search, Terminal } from 'lucide-react';

export default function DashboardScreen({ user, setCurrentScreen, handleLogout, setModal, usersList, setUsersList, triggerToast }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = usersList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-green-400 border border-slate-200 p-10 rounded-3xl shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block mb-0.5">● Session Active</span>
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, {user.name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrentScreen('profile')} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer">Profile</button>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl cursor-pointer">Logout</button>
        </div>
      </div>

      <div className="  p-10 bg-rose-100 rounded-2xl shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-base font-bold text-slate-900">User Access Directory</h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search user..." className="w-full bg-slate-50 border border-slate-900 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-green-600" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left ">
            <thead>
      <tr className="bg-red-300 text-slate-900 text-[11px] font-bold uppercase tracking-wider">
        <th className="py-3.5 px-8 rounded-l-2xl">ID</th>
        <th className="py-3.5 px-4">Name</th>
        <th className="py-3.5 px-4">Role</th>
        <th className="py-3.5 px-4">Status</th>
        <th className="py-3.5 px-8 text-right rounded-r-2xl">Actions</th>
      </tr>
    </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredUsers.length === 0 ? (
                <tr><td colSpan={5} className="py-8 text-center text-xs text-slate-400">No matching users found.</td></tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50 gap-2">
                    <td className="py-3 px-4 font-mono text-xs text-green-800 rounded-2xl ">{u.id}</td>
                    <td className="py-3 px-4 font-bold text-slate-900 text-xs rounded-l-2xl">{u.name}<span className="block font-normal text-slate-600 text-[11px]">{u.email}</span></td>
                    <td className="py-3 px-4 text-xs text-slate-800">{u.role}</td>
                    <td className="py-3 px-4 rounded-r-xl"><span className="px-2.5 py-0.5 text-[10px]  font-bold bg-emerald-50 text-emerald-700  border border-green-500 rounded-xl">{u.status}</span></td>
                    <td className="py-3 px-8 text-right rounded-2xl">
                      <button onClick={() => setModal({ title: `Revoke ${u.name}?`, message: `This removes session access for ${u.email}.`, onConfirm: () => { setUsersList(usersList.filter(item => item.id !== u.id)); triggerToast(`Revoked access for ${u.name}`); } })} className="text-xs font-semibold text-red-600 hover:underline cursor-pointer">delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}