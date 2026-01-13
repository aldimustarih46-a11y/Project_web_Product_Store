import { Heart, Award, Truck, Shield, } from 'lucide-react';

export default function About() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6">
			<button 
  				onClick={() => window.location.href = '/'}
  				className="absolute top-6 left-6 flex items-center gap-2 rounded-md px-3 py-1 text-white transition-all duration-200 hover:bg-white/10 active:scale-95">
  				<span>← Kembali</span>
			</button>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Lebih dari sekadar toko sepatu, kami adalah partner perjalanan Anda menuju gaya hidup yang lebih percaya diri dan nyaman.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dimulai pada tahun 2015, kami memulai perjalanan dengan visi sederhana: menyediakan sepatu berkualitas tinggi yang terjangkau untuk semua orang. Dari toko kecil di sudut kota, kini kami telah melayani lebih dari 100,000 pelanggan di seluruh Indonesia.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Setiap pasang sepatu yang kami jual bukan hanya produk, tetapi representasi dari komitmen kami terhadap kualitas, kenyamanan, dan gaya. Kami percaya bahwa sepatu yang tepat dapat mengubah hari Anda.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl font-bold text-gray-800 mb-2">100K+</div>
              <div className="text-xl text-gray-600">Pelanggan Puas</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">Kami mencintai apa yang kami lakukan dan berkomitmen memberikan yang terbaik</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Kualitas</h3>
              <p className="text-gray-600 text-sm">Hanya produk terbaik yang layak untuk pelanggan kami</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Sepatu impian Anda sampai dengan aman dan tepat waktu</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Terpercaya</h3>
              <p className="text-gray-600 text-sm">Kepercayaan pelanggan adalah aset terbesar kami</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Memberikan pengalaman berbelanja sepatu online terbaik dengan menyediakan produk berkualitas, layanan pelanggan yang responsif, dan harga yang kompetitif. Kami ingin setiap langkah Anda penuh dengan kenyamanan dan percaya diri.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Model Sepatu</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Brand Ternama</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}