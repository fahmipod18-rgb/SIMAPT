import { useState } from 'react';
import { Package, ShoppingCart, Activity, ShieldAlert, Users, Database, LayoutDashboard, FileText, ArrowRightLeft, LogOut } from 'lucide-react';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Penjualan from './pages/Penjualan';
import Pengadaan from './pages/Pengadaan';
import Penerimaan from './pages/Penerimaan';
import Stok from './pages/Stok';
import MasterData from './pages/MasterData';
import AuditLog from './pages/AuditLog';

export type Page = 
  | 'signin'
  | 'dashboard' 
  | 'penjualan'
  | 'pengadaan'
  | 'penerimaan'
  | 'stok'
  | 'master'
  | 'audit';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('signin');
  const [role, setRole] = useState<'KASIR' | 'SPV' | 'ADMIN' | null>(null);

  const handleLogin = (selectedRole: 'KASIR' | 'SPV' | 'ADMIN') => {
    setRole(selectedRole);
    if (selectedRole === 'KASIR') {
      setCurrentPage('penjualan');
    } else {
      setCurrentPage('dashboard');
    }
  };

  const handleLogout = () => {
    setRole(null);
    setCurrentPage('signin');
  };

  if (currentPage === 'signin' || !role) {
    return <SignIn onLogin={handleLogin} />;
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['SPV', 'ADMIN'] },
    { id: 'penjualan', label: 'Penjualan', icon: ShoppingCart, roles: ['KASIR', 'SPV', 'ADMIN'] },
    { id: 'pengadaan', label: 'Pengadaan', icon: FileText, roles: ['SPV', 'ADMIN'] },
    { id: 'penerimaan', label: 'Penerimaan', icon: ArrowRightLeft, roles: ['SPV', 'ADMIN'] },
    { id: 'stok', label: 'Monitoring Stok', icon: Package, roles: ['KASIR', 'SPV', 'ADMIN'] },
    { id: 'master', label: 'Master Data', icon: Database, roles: ['ADMIN'] },
    { id: 'audit', label: 'Audit Log', icon: ShieldAlert, roles: ['ADMIN'] },
  ].filter(item => item.roles.includes(role));

  return (
    <div className="flex h-screen w-full bg-void-950 overflow-hidden text-void-100">
      {/* Sidebar - Role-Based Shell */}
      <aside className="w-64 bg-void-900 border-r border-void-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-void-800 shrink-0">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-bio-teal-glow" />
            <span className="font-semibold text-lg tracking-tight text-white">SIMAPT<span className="text-bio-teal">.</span></span>
          </div>
        </div>

        <div className="p-4 border-b border-void-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-void-800 flex items-center justify-center border border-void-300">
              <Users className="w-5 h-5 text-void-200" />
            </div>
            <div>
              <div className="text-sm font-medium text-void-100">User_{role}</div>
              <div className="text-xs text-bio-teal font-mono mt-0.5">{role}</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as Page)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-left
                  ${isActive 
                    ? 'bg-bio-teal/10 text-bio-teal border border-transparent' 
                    : 'text-void-200 hover:bg-void-800 hover:text-void-100 border border-transparent'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-bio-teal' : 'opacity-70'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-void-800 shrink-0">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-void-200 hover:text-white hover:bg-void-800 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'penjualan' && <Penjualan />}
        {currentPage === 'pengadaan' && <Pengadaan />}
        {currentPage === 'penerimaan' && <Penerimaan />}
        {currentPage === 'stok' && <Stok />}
        {currentPage === 'master' && <MasterData />}
        {currentPage === 'audit' && <AuditLog />}
      </main>
    </div>
  );
}
