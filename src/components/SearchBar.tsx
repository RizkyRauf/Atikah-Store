'use client'
import { useState, Dispatch, SetStateAction } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface SearchBarProps {
  onSearch: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-4">
      <div className="relative">
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-3 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  )
}
