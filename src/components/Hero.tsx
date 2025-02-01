import Image from 'next/image'

export default function Hero() {
  return (
    <>
      {/* Desktop Version - Only Banner Image */}
      <div className="hidden md:block pt-16 relative h-[60vh]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/banner.jpg"
            alt="Hero Cover"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
      </div>

      {/* Mobile Version - Text with Background Color */}
      <div className="md:hidden pt-16 bg-gradient-to-b from-fuchsia-950 to-white-600">
        <div className="px-4 py-12 flex flex-col items-center text-center"> {/* Added flex and alignment */}
          <h1 className="text-3xl font-bold text- mb-4">
            Welcome to Atikah Store
          </h1>
          <p className="text-lg text-gray-200 mb-6">
          Dapatkan tampilan yang anggun dan modern dengan dress batik terbaru kami! Terbuat dari bahan berkualitas tinggi, dress ini memberikan kenyamanan sepanjang hari. Desain yang unik dan trendi, dipadukan dengan potongan yang pas di tubuh, membuat Anda tampil percaya diri dalam setiap kesempatan.
          </p>
          <a 
            href="#products" 
            className="inline-block bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </>
  )
}
