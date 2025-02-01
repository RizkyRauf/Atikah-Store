'use client'
import { useState } from 'react'
import ProductCard from './ProductCard'
import products from '@/data/products.json'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  const categories = ['all', ...new Set(products.products.map(product => product.category))]
  
  const filteredProducts = selectedCategory === 'all' 
    ? products.products 
    : products.products.filter(product => product.category === selectedCategory)

  return (
    <section id="products" className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category 
                  ? 'bg-rose-700 text-white' 
                  : 'bg-white text-rose-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
