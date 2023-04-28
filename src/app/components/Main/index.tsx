import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function index() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="p-1 rounded-full bg-black/40">
          <ChevronLeft />
        </button>
        <button className="p-1 rounded-full bg-black/40">
          <ChevronRight />
        </button>
      </div>
      <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
        <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong>Wasting Light</strong>

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
            <Play />
          </button>
        </a>
      </div>
      <h2 className="font-semibold text-2xl mt-10">Made for Artur Oliveira</h2>
      <div className='grid grid-cols-8 gap-4 mt-4'>
        <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
        </a>
        <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
        </a>
        <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
        </a>
        <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
        </a>
        <a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album Wasting Light" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
        </a>
      </div>
    </main>
  )
}
