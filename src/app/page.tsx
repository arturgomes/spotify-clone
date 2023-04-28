import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon /> Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 ">
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
            <a className="text-sm text-zinc-400 hover:text-zinc-100" href="">Playlist 1</a>
          </nav>
        </aside>
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
          <div className='grid grid-cols-3 gap-4 mt-40'>
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
      </div >
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div >
  )
}
