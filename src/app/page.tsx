import Main from './components/Main'
import Side from './components/Side'
import Player from './components/Player'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Side />
        <Main />
      </div >
      <Player />
    </div >
  )
}
