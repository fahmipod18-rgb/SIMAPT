import { FileBarChart2, Search, Filter, AlertTriangle } from 'lucide-react';

export default function Stok() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-void-950 p-6 md:p-8">
      <header className="mb-6 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Monitoring Stok</h1>
          <p className="text-void-200 text-sm mt-1">Pantau ketersediaan dan mutasi barang.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-void-800 hover:bg-void-300 text-white rounded-lg text-sm font-medium transition-colors border border-void-800 hover:border-void-300">
            Stock Opname
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-bio-teal hover:opacity-90 text-void-950 rounded-lg text-sm font-bold transition-opacity">
            <FileBarChart2 className="w-4 h-4" />
            Kartu Stok
          </button>
        </div>
      </header>

      <div className="mb-6 flex gap-3 shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-void-300" />
          <input 
            type="text" 
            className="w-full bg-void-900 border border-void-800 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
            placeholder="Cari nama obat atau SKU..."
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-void-900 border border-void-800 rounded-lg text-sm text-void-200 hover:text-white transition-colors">
          <Filter className="w-4 h-4" />
          Kategori
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-void-900 border border-amber-500/30 text-amber-500 rounded-lg text-sm hover:bg-amber-500/10 transition-colors">
          <AlertTriangle className="w-4 h-4" />
          Stok Menipis
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-void-900 border border-void-800 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-void-950 sticky top-0 z-10">
            <tr className="border-b border-void-800 text-xs uppercase tracking-wider text-void-300">
              <th className="p-4 font-medium">SKU / Nama Obat</th>
              <th className="p-4 font-medium">Kategori</th>
              <th className="p-4 font-medium">Rak</th>
              <th className="p-4 font-medium text-right">Stok Fisik</th>
              <th className="p-4 font-medium text-right">Min. Stok</th>
              <th className="p-4 font-medium text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sku: 'MED-001', name: 'Amoxicillin 500mg Strip', cat: 'Antibiotik', rak: 'A-01', stok: 45, min: 50, status: 'MENIPIS', statusColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
              { sku: 'MED-002', name: 'Paracetamol 500mg Strip', cat: 'Analgesik', rak: 'B-02', stok: 120, min: 20, status: 'AMAN', statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
              { sku: 'MED-003', name: 'Cetirizine 10mg Strip', cat: 'Antihistamin', rak: 'C-04', stok: 0, min: 10, status: 'KOSONG', statusColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20' },
              { sku: 'MED-004', name: 'Omeprazole 20mg Kapsul', cat: 'Gastro', rak: 'A-03', stok: 85, min: 30, status: 'AMAN', statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
            ].map((row, i) => (
              <tr key={i} className="border-b border-void-800/50 last:border-0 hover:bg-void-800/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium text-white">{row.name}</div>
                  <div className="text-xs text-void-300 font-mono mt-0.5">{row.sku}</div>
                </td>
                <td className="p-4 text-sm text-void-200">{row.cat}</td>
                <td className="p-4 text-sm text-void-200">{row.rak}</td>
                <td className={`p-4 text-sm font-mono font-medium text-right ${row.stok === 0 ? 'text-rose-400' : 'text-white'}`}>
                  {row.stok}
                </td>
                <td className="p-4 text-sm font-mono text-void-300 text-right">{row.min}</td>
                <td className="p-4 text-center">
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded border tracking-wide uppercase ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
