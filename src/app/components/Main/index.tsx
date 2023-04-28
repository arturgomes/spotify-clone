import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import favorites from '../../data/favorites.json'
import genres from '../../data/genres.json'

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
        {favorites && favorites.recentes.map(favorite => (
          <a className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src={favorite.imagem} width={104} height={104} alt={`Capa do album ${favorite.nome}`} />
            <strong>{favorite.nome}</strong>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
              <Play />
            </button>
          </a>
        ))}

      </div>
      {
        genres && genres.sugestoes.map(lista => (
          <>
            <h2 className="font-semibold text-2xl mt-10">{lista.nome}</h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
              {lista.playlists.map(playlist =>
              (<a className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                <Image
                  src={playlist.imagem}
                  className="w-full"
                  width={120} height={120}
                  alt={`Capa do album ${playlist.nome}`} />
                <strong className="font-semibold">{playlist.nome}</strong>
                <span className='text-sm text-zinc-400'>Wollows, COIN, girl in red and more</span>
              </a>)
              )
              }


            </div>
          </>
        ))
      }

    </main>
  )
}
