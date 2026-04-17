import { useState } from 'react';
import { Database, UserCircle, Truck, Pill, Plus } from 'lucide-react';

export default function MasterData() {
  const [activeTab, setActiveTab] = useState<'obat' | 'supplier' | 'pengguna'>('obat');

  const tabs = [
    { id: 'obat', label: 'Data Obat', icon: Pill },
    { id: 'supplier', label: 'Supplier (PBF)', icon: Truck },
    { id: 'pengguna', label: 'Pengguna', icon: UserCircle },
  ] as const;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-void-950">
      <header className="p-6 md:p-8 shrink-0 bg-void-900 border-b border-void-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">Master Data</h1>
            <p className="text-void-200 text-sm mt-1">Kelola data referensi inti sistem.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-bio-teal hover:opacity-90 text-void-950 rounded-lg text-sm font-bold transition-opacity">
            <Plus className="w-4 h-4" />
            Tambah Data
          </button>
        </div>

        <div className="flex gap-1 border-b border-void-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'border-bio-teal text-bio-teal' 
                    : 'border-transparent text-void-300 hover:text-void-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="bg-void-900 border border-void-800 rounded-xl flex items-center justify-center p-12 h-64 border-dashed">
          <div className="text-center">
            <Database className="w-8 h-8 text-void-300 mx-auto mb-3" />
            <h3 className="text-white font-medium mb-1">Pilih data untuk dikelola</h3>
            <p className="text-sm text-void-300 max-w-sm">
              Area ini disiapkan untuk manajamen form {activeTab}. Menggunakan progressive disclosure agar form tidak menakutkan saat diedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
