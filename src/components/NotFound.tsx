import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center">
      <div className="text-center px-4">
        {/* Angka 404 */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-600 mb-4 animate-bounce">
            404
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindahkan atau URL salah.
          </p>
        </div>

        {/* Tombol navigasi */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Footer kecil */}
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            © 2025 Shawava Tritya. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;