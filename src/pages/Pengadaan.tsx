import { FileText, Search, Plus, Filter, ArrowRight } from 'lucide-react';

export default function Pengadaan() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-void-950 p-6 md:p-8">
      <header className="mb-6 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Pengadaan (PO)</h1>
          <p className="text-void-200 text-sm mt-1">Kelola purchase order ke supplier.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-void-800 hover:bg-void-900 text-void-100 rounded-lg text-sm font-medium transition-colors border border-void-800 hover:border-void-300">
          <Plus className="w-4 h-4" />
          Buat PO Baru
        </button>
      </header>

      <div className="mb-6 flex gap-3 shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-void-300" />
          <input 
            type="text" 
            className="w-full bg-void-900 border border-void-800 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
            placeholder="Cari nomor PO atau supplier..."
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-void-900 border border-void-800 rounded-lg text-sm text-void-200 hover:text-white transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-void-900 border border-void-800 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-void-950 sticky top-0 z-10">
            <tr className="border-b border-void-800 text-xs uppercase tracking-wider text-void-300">
              <th className="p-4 font-medium">Nomor PO</th>
              <th className="p-4 font-medium">Tanggal</th>
              <th className="p-4 font-medium">Supplier</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Total Est.</th>
              <th className="p-4 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'PO-202310-001', date: '24 Okt 2023', supplier: 'PT. Anugerah Farma', status: 'DRAFT', color: 'text-void-300 bg-void-800', amount: 4500000 },
              { id: 'PO-202310-002', date: '25 Okt 2023', supplier: 'Bina San Prima', status: 'SENT', color: 'text-amber-400 bg-amber-400/10', amount: 12500000 },
              { id: 'PO-202310-003', date: '26 Okt 2023', supplier: 'Enseval Putera', status: 'PARTIAL RCV', color: 'text-bio-teal bg-bio-teal/10', amount: 8200000 },
            ].map((row, i) => (
              <tr key={i} className="border-b border-void-800/50 last:border-0 hover:bg-void-800/30 transition-colors cursor-pointer group">
                <td className="p-4 font-mono text-sm text-white">{row.id}</td>
                <td className="p-4 text-sm text-void-200">{row.date}</td>
                <td className="p-4 text-sm text-void-100">{row.supplier}</td>
                <td className="p-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${row.color}`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-mono text-void-100 text-right">
                  Rp {row.amount.toLocaleString('id-ID')}
                </td>
                <td className="p-4 text-right">
                  <ArrowRight className="w-4 h-4 text-void-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
