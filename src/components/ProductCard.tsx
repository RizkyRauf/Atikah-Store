import Image from 'next/image'
import { Product } from '@/types'

export default function ProductCard({ title, description, price, imageUrl, affiliateLink }: Product) {
  return (
    <div className="border rounded-lg shadow-lg p-4 transition-transform hover:scale-105">
      <div className="relative h-48 mb-4">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded"
          unoptimized
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <a 
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 bg-rose-700 text-white text-center py-2 px-4 rounded hover:bg-blue-600"
      >
        Check it out
      </a>
    </div>
  )
}
