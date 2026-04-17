import { Search, ScanLine, ArrowRight, PackageCheck } from 'lucide-react';

export default function Penerimaan() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-void-950 p-6 md:p-8">
      <header className="mb-6 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-tight">Penerimaan Barang</h1>
          <p className="text-void-200 text-sm mt-1">Terima barang fisik dari supplier berdasarkan PO.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-bio-teal hover:opacity-90 text-void-950 rounded-lg text-sm font-bold transition-opacity">
          <PackageCheck className="w-4 h-4" />
          Terima Barang Baru
        </button>
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {/* Left Column: Activity stream / pending items */}
        <div className="col-span-1 md:col-span-2 flex flex-col bg-void-900 border border-void-800 rounded-xl overflow-hidden">
           <div className="p-4 border-b border-void-800 bg-void-950 shrink-0 flex items-center justify-between">
              <h2 className="text-sm font-medium text-void-100 uppercase tracking-wider">Menunggu Penerimaan</h2>
              <span className="text-xs font-mono bg-void-800 text-void-200 px-2 py-0.5 rounded">8 PO AKTIF</span>
           </div>
           <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-void-950 border border-void-800 rounded-lg p-4 group hover:border-bio-teal/50 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm font-mono text-white mb-1">PO-202310-00{i+2}</div>
                      <div className="text-sm text-void-100">Enseval Putera Megatrading</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-void-300 opacity-0 group-hover:opacity-100 group-hover:text-bio-teal transition-all" />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="text-xs text-void-300">
                      <span className="block mb-0.5">Est. Tanggal</span>
                      <span className="text-void-100 font-medium">Hari ini, 14:00</span>
                    </div>
                    <div className="text-xs text-void-300">
                      <span className="block mb-0.5">Total Item</span>
                      <span className="text-void-100 font-medium">24 Box</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right Column: Scan Quick Action */}
        <div className="bg-void-900 border border-void-800 rounded-xl p-6 flex flex-col">
          <h2 className="text-sm font-medium text-void-100 uppercase tracking-wider mb-6">Pencarian Cepat</h2>
          
          <div className="space-y-4">
            <div className="bg-void-950 border border-void-800 rounded-lg p-4 text-center">
               <ScanLine className="w-8 h-8 text-void-300 mx-auto mb-3" />
               <p className="text-sm font-medium text-white mb-2">Scan Surat Jalan / PO</p>
               <input 
                 type="text" 
                 className="w-full bg-void-900 border border-void-800 rounded py-2 text-center text-sm font-mono text-white focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all"
                 placeholder="Fokus kursor disini..."
               />
            </div>
            
            <div className="text-center pt-4 border-t border-void-800">
              <p className="text-xs text-void-300">Atau cari berdasarkan Nomor PO:</p>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-void-300" />
                <input 
                  type="text" 
                  className="w-full bg-void-950 border border-void-800 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-bio-teal transition-all"
                  placeholder="Ketik nomor PO..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
