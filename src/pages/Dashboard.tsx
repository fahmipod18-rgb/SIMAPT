import { motion } from 'motion/react';
import { PackageSearch, TrendingUp, AlertCircle, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-void-950 p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-void-200 text-sm mt-1">Ringkasan operasional hari ini.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* High contrast key metric */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-void-900 border border-void-800 rounded-xl p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none hidden" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-void-200">Penjualan Hari Ini</span>
              <TrendingUp className="w-5 h-5 text-bio-teal" />
            </div>
            <div className="text-3xl font-light text-white font-mono">Rp 4.2M</div>
            <div className="text-xs text-bio-teal mt-2">+12% dari kemarin</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-void-900 border border-void-800 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-void-200">Stok Menipis</span>
              <AlertCircle className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-light text-white font-mono">24</div>
            <div className="text-xs text-void-300 mt-2">Item butuh pengadaan</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-void-900 border border-void-800 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-void-200">PO Aktif</span>
              <PackageSearch className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-light text-white font-mono">8</div>
            <div className="text-xs text-void-300 mt-2">Menunggu penerimaan</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-void-900 border border-void-800 rounded-xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-void-200">Retur Pending</span>
              <Clock className="w-5 h-5 text-rose-500" />
            </div>
            <div className="text-3xl font-light text-white font-mono">3</div>
            <div className="text-xs text-void-300 mt-2">Butuh persetujuan SPV</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-2 bg-void-900 border border-void-800 rounded-xl p-6">
            <h2 className="text-base font-medium text-white mb-6">Aktivitas Terbaru</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-void-800 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-bio-teal mt-2 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-void-100">Penerimaan barang dari PT. Anugerah Farma</p>
                    <p className="text-xs font-mono text-void-300 mt-1">RCV-202310-00{i} • 10:24 AM</p>
                  </div>
                  <div className="text-xs font-medium px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded">Selesai</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-void-900 border border-void-800 rounded-xl p-6 flex flex-col">
            <h2 className="text-base font-medium text-white mb-6">Aksi Cepat</h2>
            <div className="flex flex-col gap-3">
              <button className="text-left px-4 py-3 bg-void-950 border border-void-800 hover:border-bio-teal/50 rounded-lg transition-colors group">
                <div className="text-sm font-medium text-void-100 group-hover:text-bio-teal transition-colors">Buat PO Baru</div>
                <div className="text-xs text-void-300 mt-1">Order ke PBF</div>
              </button>
              <button className="text-left px-4 py-3 bg-void-950 border border-void-800 hover:border-bio-teal/50 rounded-lg transition-colors group">
                <div className="text-sm font-medium text-void-100 group-hover:text-bio-teal transition-colors">Tambah Master Obat</div>
                <div className="text-xs text-void-300 mt-1">Registrasi item baru</div>
              </button>
              <button className="text-left px-4 py-3 bg-void-950 border border-void-800 hover:border-bio-teal/50 rounded-lg transition-colors group">
                <div className="text-sm font-medium text-void-100 group-hover:text-bio-teal transition-colors">Cek Kartu Stok</div>
                <div className="text-xs text-void-300 mt-1">Lihat mutasi per item</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
