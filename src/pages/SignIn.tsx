import { Activity, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

interface SignInProps {
  onLogin: (role: 'KASIR' | 'SPV' | 'ADMIN') => void;
}

export default function SignIn({ onLogin }: SignInProps) {
  return (
    <div className="min-h-screen w-full bg-void-950 flex flex-col items-center justify-center p-4">
      {/* Minimal ambient removed styled classes to respect HTML preservation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-void-900 border border-void-800 p-8 rounded-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-void-950 border border-void-800 rounded-2xl flex items-center justify-center mb-4">
            <Activity className="w-8 h-8 text-bio-teal" />
          </div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">SIMAPT</h1>
          <p className="text-void-300 text-sm mt-2">Sistem Operasional Apotek</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-void-200 uppercase tracking-wider">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-void-300" />
              <input 
                type="text" 
                className="w-full bg-void-950 border border-void-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
                placeholder="Masukkan username"
                defaultValue="admin_apotek"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-void-200 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-void-300" />
              <input 
                type="password" 
                className="w-full bg-void-950 border border-void-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
                placeholder="••••••••"
                defaultValue="password123"
              />
            </div>
          </div>

          <div className="pt-4 grid grid-cols-3 gap-3">
            <button 
              onClick={() => onLogin('KASIR')}
              className="px-4 py-2 bg-void-800 hover:bg-void-300 text-white rounded-lg text-sm font-medium transition-colors border border-void-800 hover:border-void-300"
            >
              Kasir
            </button>
            <button 
              onClick={() => onLogin('SPV')}
              className="px-4 py-2 bg-void-800 hover:bg-void-300 text-white rounded-lg text-sm font-medium transition-colors border border-void-800 hover:border-void-300"
            >
              SPV
            </button>
            <button 
              onClick={() => onLogin('ADMIN')}
              className="px-4 py-2 bg-bio-teal hover:opacity-90 text-void-950 rounded-lg text-sm font-bold transition-opacity"
            >
              Admin
            </button>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-void-300">Pilih role untuk eksplorasi UI (Mode Demo)</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
