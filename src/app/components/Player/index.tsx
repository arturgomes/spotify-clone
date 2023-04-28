import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, ListMusic, MonitorSpeaker, Volume2, Maximize2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

import current from '../../data/current.json'
export default function index() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-3 flex items-center justify-between sticky bottom-0">
      <div className='flex flex-row items-center gap-5 w-96'>
        <div className='flex items-center gap-3'>
          <Image src={current?.musica_atual.imagem} width={56} height={56} alt="Capa do album Wasting Light" />
          <div className="flex flex-col">
            <strong className="font-normal">{current?.musica_atual.nome}</strong>
            <span className="text-xs text-zinc-400">{current?.musica_atual.autor}</span>
          </div>
        </div>
        <Heart width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className="flex items-center gap-6">
          <Shuffle width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
          <SkipBack width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
          <Play className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black" />
          <SkipForward width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
          <Repeat width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 group rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200  hover:bg-green-600 relative">
              <div className="h-1 rounded-full w-1 bg-zinc-200 absolute right-0 invisible group-hover:visible "></div>
            </div>

          </div>
          <span className="text-xs text-zinc-400">1:46</span>

        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Mic2 width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
        <ListMusic width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
        <MonitorSpeaker width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
        <div className="flex items-center gap-2">

          <Volume2 width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />
          <div className="h-1 group rounded-full w-24 bg-zinc-600 ">
            <div className="h-1 rounded-full w-10 bg-zinc-200 hover:bg-green-600 relative">
              <div className="h-1 rounded-full w-1 bg-zinc-200 absolute right-0 invisible group-hover:visible "></div>
            </div>



          </div>
        </div>

        <Maximize2 width={20} className=' text-zinc-400 hover:text-zinc-100 transition-colors' />

      </div>

    </footer>
  )
}
