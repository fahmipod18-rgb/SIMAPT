import { ShieldAlert, Search, Filter } from 'lucide-react';

export default function AuditLog() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-void-950 p-6 md:p-8">
      <header className="mb-6 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Audit Log</h1>
          <p className="text-void-200 text-sm mt-1">Rekam jejak aktivitas sensitif sistem.</p>
        </div>
      </header>

      <div className="mb-6 flex gap-3 shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-void-300" />
          <input 
            type="text" 
            className="w-full bg-void-900 border border-void-800 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
            placeholder="Cari user, aksi, atau entitas..."
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-void-900 border border-void-800 rounded-lg text-sm text-void-200 hover:text-white transition-colors">
          <Filter className="w-4 h-4" />
          Semua Modul
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-void-900 border border-void-800 rounded-xl relative">
        <div className="absolute top-0 left-8 bottom-0 w-px bg-void-800" /> {/* Vertical Timeline Line */}
        
        <div className="p-6 relative space-y-6">
          {[
            { id: 1, time: '14:23:45', date: 'Hari Ini', user: 'SPV_Budi', action: 'APPROVE_RETUR', entity: 'RET-202310-001', desc: 'Menyetujui retur 2 item rusak ke PBF', status: 'critical' },
            { id: 2, time: '10:15:02', date: 'Hari Ini', user: 'Admin_Master', action: 'UPDATE_HARGA', entity: 'MED-001 Amoxicillin', desc: 'Ubah harga dasar dari Rp 11.500 ke Rp 12.000', status: 'warning' },
            { id: 3, time: '09:00:12', date: 'Hari Ini', user: 'Kasir_Siti', action: 'VOID_SALE', entity: 'TRX-231026-045', desc: 'Pembatalan transaksi pembayaran tunai', status: 'critical' },
            { id: 4, time: '16:45:00', date: 'Kemarin', user: 'System', action: 'AUTO_BACKUP', entity: 'DB_SIMAPT', desc: 'Daily automated backup completed', status: 'info' },
          ].map((log) => (
            <div key={log.id} className="relative z-10 flex gap-6">
              <div className="w-20 shrink-0 text-right">
                <div className="text-xs font-mono text-void-200">{log.time}</div>
                <div className="text-[10px] text-void-400 mt-0.5 uppercase">{log.date}</div>
              </div>
              
              <div className="relative mt-1 shrink-0">
                <div className={`w-3 h-3 rounded-full border-2 border-void-900 absolute -left-1.5 -ml-[40px]
                  ${log.status === 'critical' ? 'bg-danger' : 
                    log.status === 'warning' ? 'bg-amber-400' : 
                    'bg-bio-teal'}
                `} />
              </div>
              
              <div className="flex-1 bg-void-950 border border-void-800 rounded-lg p-4 -mt-3 hover:border-void-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-sm font-medium text-white">{log.user}</span>
                    <span className="text-xs text-void-300 font-mono bg-void-800 px-1.5 py-0.5 rounded">{log.action}</span>
                  </div>
                  <span className="text-xs font-mono text-void-200">{log.entity}</span>
                </div>
                <p className="text-sm text-void-200">{log.desc}</p>
                {/* Expandable data view could go here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
