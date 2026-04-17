import { useState } from 'react';
import { Search, Plus, Minus, X, CreditCard, Banknote, Receipt } from 'lucide-react';
import { motion } from 'motion/react';

interface CartItem {
  id: string;
  name: string;
  stok: number;
  qty: number;
  price: number;
}

export default function Penjualan() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Amoxicillin 500mg Strip', stok: 45, qty: 2, price: 12000 },
    { id: '2', name: 'Paracetamol 500mg Strip', stok: 120, qty: 1, price: 8500 },
  ]);

  const total = cart.reduce((acc, item) => acc + (item.qty * item.price), 0);

  return (
    <div className="flex-1 flex overflow-hidden bg-void-950">
      {/* Left Pane - Cart & Input */}
      <div className="flex-1 flex flex-col min-w-0 border-r border-void-800">
        <header className="p-4 border-b border-void-800 shrink-0 bg-void-900">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bio-teal" />
            <input 
              autoFocus
              type="text" 
              className="w-full bg-void-900 border border-void-800 rounded-lg py-3 pl-12 pr-4 text-white text-lg focus:outline-none focus:border-bio-teal focus:ring-1 focus:ring-bio-teal transition-all placeholder:text-void-300"
              placeholder="Scan barcode atau ketik nama obat (F2)..."
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-1 bg-void-800 text-void-200 rounded">
              READY
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-void-900 border border-void-800 rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-void-800 text-xs uppercase tracking-wider text-void-300">
                  <th className="p-4 font-medium">Item</th>
                  <th className="p-4 font-medium w-24">Harga</th>
                  <th className="p-4 font-medium w-32 text-center">Qty</th>
                  <th className="p-4 font-medium w-32 text-right">Subtotal</th>
                  <th className="p-4 w-12"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <motion.tr 
                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                    key={item.id} 
                    className={`border-b border-void-800/50 last:border-0 hover:bg-void-800/30 transition-colors ${idx === 0 ? '' : ''}`}
                  >
                    <td className="p-4">
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-void-300 mt-0.5">Stok: {item.stok}</div>
                    </td>
                    <td className="p-4 text-sm font-mono text-void-100">
                      {(item.price).toLocaleString('id-ID')}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2 bg-void-950 border border-void-800 rounded-lg p-1">
                        <button className="p-1 hover:bg-void-800 hover:text-white text-void-200 rounded"><Minus className="w-4 h-4" /></button>
                        <input type="text" className="w-8 text-center bg-transparent font-mono text-sm" value={item.qty} readOnly />
                        <button className="p-1 hover:bg-void-800 hover:text-white text-void-200 rounded"><Plus className="w-4 h-4" /></button>
                      </div>
                    </td>
                    <td className="p-4 text-right text-sm font-mono font-medium text-white">
                      {(item.price * item.qty).toLocaleString('id-ID')}
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 hover:bg-rose-500/20 text-void-300 hover:text-rose-400 rounded-lg transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Pane - Summary & Payment */}
      <div className="w-96 bg-void-900 shrink-0 flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6 text-void-200">
            <Receipt className="w-5 h-5" />
            <h2 className="font-medium">Ringkasan Transaksi</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-void-200">Subtotal</span>
              <span className="font-mono text-white">Rp {total.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-void-200">Diskon</span>
              <span className="font-mono text-white">Rp 0</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-void-200">Pajak (0%)</span>
              <span className="font-mono text-white">Rp 0</span>
            </div>
            
            <div className="pt-4 border-t border-void-800">
              <div className="text-sm text-void-200 uppercase tracking-wider mb-1">Total Bayar</div>
              <div className="text-4xl font-bold text-bio-teal">
                Rp {total.toLocaleString('id-ID')}
              </div>
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
             <label className="text-xs font-medium text-void-200 uppercase tracking-wider">Metode Pembayaran</label>
             <div className="grid grid-cols-2 gap-3">
               <button className="flex items-center justify-center gap-2 flex-col p-4 rounded-xl border border-bio-teal bg-bio-teal/10 text-bio-teal transition-colors">
                 <Banknote className="w-6 h-6" />
                 <span className="text-sm font-medium">Tunai (F3)</span>
               </button>
               <button className="flex items-center justify-center gap-2 flex-col p-4 rounded-xl border border-void-800 hover:border-void-300 text-void-200 hover:text-white bg-void-950 transition-colors">
                 <CreditCard className="w-6 h-6" />
                 <span className="text-sm font-medium">Non-Tunai (F4)</span>
               </button>
             </div>
          </div>
        </div>

        <div className="p-6 border-t border-void-800 bg-void-950">
          <button className="w-full py-4 bg-bio-teal hover:opacity-90 transition-opacity rounded-xl text-void-950 font-bold text-lg flex items-center justify-center gap-2">
            Bayar & Cetak (Enter)
          </button>
          <div className="text-center mt-3">
             <button className="text-xs text-void-300 hover:text-white transition-colors">Batalkan Transaksi (Esc)</button>
          </div>
        </div>
      </div>
    </div>
  );
}
