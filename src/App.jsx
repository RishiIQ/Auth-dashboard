import { useState } from 'react';
import Header from './components/Header';

import Toast from './components/Toast';
import ConfirmModal from './components/ConfirmModal';

import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import DashboardScreen from './components/DashboardScreen';
import UserProfileScreen from './components/UserProfileScreen';
import EditProfileScreen from './components/EditProfileScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [user, setUser] = useState({ 
    name: 'Rishi Murugan', 
    email: 'rishi@stackly.com', 
    password: '123456',
    role: 'Admin', 
    department: 'Core Systems',
    status: 'Active',
    lastLogin: 'October 15, 2026 - 14:22 UTC'
  });

  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const [usersList, setUsersList] = useState([
    { id: 'USR-01', name: 'Rishi Murugan', email: 'rishi@stackly.com', role: 'Admin', status: 'Active', lastActive: 'Now' },
    { id: 'USR-02', name: 'Aarav Sharma', email: 'aarav.s@stackly.com', role: 'Developer', status: 'Active', lastActive: '2h ago' },
    { id: 'USR-03', name: 'Priya Sundaram', email: 'priya.s@stackly.com', role: 'Security Auditor', status: 'Inactive', lastActive: '3d ago' },
  ]);

  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogin = (e, email, password, rememberMe) => {
    e.preventDefault();
    if (!email.includes('@') || password.length < 6) {
      triggerToast('Please enter a valid email and password (min 6 chars).', 'error');
      return;
    }
    if (email !== user.email || password !== user.password) {
      triggerToast(`Invalid credentials. (Hint: ${user.email} / ${user.password})`, 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuthenticated(true);
      setCurrentScreen('dashboard');
      triggerToast('Successfully signed in!', 'success');
    }, 500);
  };

  const handleRegister = (e, name, email, password, confirmPassword) => {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || password.length < 6) {
      triggerToast('Please complete all fields correctly (Password min 6 chars).', 'error');
      return;
    }
    if (password !== confirmPassword) {
      triggerToast('Passwords do not match.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const newUser = {
        id: `USR-0${usersList.length + 1}`,
        name: name,
        email: email,
        role: 'Developer',
        status: 'Active',
        lastActive: 'Just now'
      };
      setUsersList([...usersList, newUser]);
      setUser({ ...user, name, email, password });
      triggerToast('Account created successfully! Please sign in.', 'success');
      setCurrentScreen('login');
    }, 500);
  };

  const handleForgot = (e, forgotEmail) => {
    e.preventDefault();
    if (!forgotEmail.includes('@')) {
      triggerToast('Please enter a valid registered email.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      triggerToast('Verification code dispatched to your email.', 'success');
      setCurrentScreen('reset');
    }, 500);
  };

  const handleReset = (e, resetCode, newResetPassword) => {
    e.preventDefault();
    if (resetCode.length !== 6) {
      triggerToast('Please enter the 6-digit verification code.', 'error');
      return;
    }
    if (newResetPassword.length < 6) {
      triggerToast('New password must be at least 6 characters long.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser({ ...user, password: newResetPassword });
      triggerToast('Password reset successful! Please sign in.', 'success');
      setCurrentScreen('login');
    }, 500);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (!user.name.trim() || !user.email.includes('@')) {
      triggerToast('Please provide a valid name and email.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      triggerToast('Profile updated successfully!', 'success');
      setCurrentScreen('profile');
    }, 500);
  };

  const handleChangePassword = (e, currentPassword, newPassword) => {
    e.preventDefault();
    if (currentPassword !== user.password) {
      triggerToast('Current password is incorrect.', 'error');
      return;
    }
    if (newPassword.length < 6 || newPassword === currentPassword) {
      triggerToast('New password must be at least 6 chars and different from current.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser({ ...user, password: newPassword });
      triggerToast('Password updated securely!', 'success');
      setCurrentScreen('profile');
    }, 500);
  };

  const handleLogout = () => {
    setModal({
      title: 'Terminate Session?',
      message: 'Are you sure you want to sign out? Your session state will be cleared.',
      onConfirm: () => {
        setIsAuthenticated(false);
        setCurrentScreen('login');
        triggerToast('Session successfully terminated.', 'success');
      }
    });
  };

  const screen = ['dashboard', 'profile', 'edit-profile', 'change-password'].includes(currentScreen) && !isAuthenticated ? 'login' : currentScreen;

  return (
    <div className="min-h-screen bg-green-300/20 text-slate-800 flex flex-col justify-between font-sans antialiased">
      <Toast toast={toast} />
      <ConfirmModal modal={modal} setModal={setModal} />

      <Header currentScreen={screen} setCurrentScreen={setCurrentScreen} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      <main className="max-w-4xl w-full mx-auto px-4 py-10 flex-1 my-auto">
        {screen === 'login' && <LoginScreen setCurrentScreen={setCurrentScreen} handleLogin={handleLogin} loading={loading} />}
        {screen === 'register' && <RegisterScreen setCurrentScreen={setCurrentScreen} handleRegister={handleRegister} loading={loading} />}
        {screen === 'forgot' && <ForgotPasswordScreen setCurrentScreen={setCurrentScreen} handleForgot={handleForgot} loading={loading} />}
        {screen === 'reset' && <ResetPasswordScreen setCurrentScreen={setCurrentScreen} handleReset={handleReset} loading={loading} />}
        {screen === 'dashboard' && <DashboardScreen user={user} setCurrentScreen={setCurrentScreen} handleLogout={handleLogout} setModal={setModal} usersList={usersList} setUsersList={setUsersList} triggerToast={triggerToast} />}
        {screen === 'profile' && <UserProfileScreen user={user} setCurrentScreen={setCurrentScreen} />}
        {screen === 'edit-profile' && <EditProfileScreen user={user} setUser={setUser} setCurrentScreen={setCurrentScreen} handleUpdateProfile={handleUpdateProfile} loading={loading} />}
        {screen === 'change-password' && <ChangePasswordScreen setCurrentScreen={setCurrentScreen} handleChangePassword={handleChangePassword} loading={loading} />}
      </main>

      
    </div>
  );
}