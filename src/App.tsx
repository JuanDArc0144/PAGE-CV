import './App.css'
import { Header } from './components/header'
import { Profile } from './components/profile'
import { Enjoy } from './components/enjoy'
import videogames from "./images/nier.gif"
import anime from "./images/chainsaw.gif"
import coding from "./images/coding.gif"
import { Proyecto } from './components/proyecto'
import uniroom from './images/uniroom.gif'
import emergencity from './images/emergencity.gif'
import sweepinbox from './images/sweepinbox.gif'

function App() {

  return (
    <body className='bg-[url(./images/bg.gif)] text-green-400'>
      {/* headercito */}
      <Header></Header>

      <div className='h-36 w-36' id="inicio"></div>

      <Profile></Profile>

      <div className='w-36 h-36'></div>
      {/* DIV de gustos */}
      <div id='gustos' className='bg-gray-950 p-32 rounded-4xl border-2 w-auto'>
       <h1 className="text-8xl font-doto">
        COSAS QUE ME GUSTAN
      </h1>
        <div className="flex justify-center">
            <Enjoy item="VIDEOJUEGOS" fotito={videogames}></Enjoy>
            <Enjoy item="ANIME" fotito={anime}></Enjoy>
            <Enjoy item="PROGRAMAR" fotito={coding}></Enjoy>
        </div>
     </div>
      <div className='w-36 h-36'></div>
      {/* DIV de lso proyectos */}
      <div id='proyectos' className='bg-gray-950 p-32 rounded-4xl border-2 w-auto'>
        <h1 className='text-8xl font-doto'>
          PROYECTOS
        </h1>
        <div className='flex justify-center'>
        <Proyecto name='EMERGENCITY' image={emergencity}></Proyecto>
        <Proyecto name='UNIROOM' image={uniroom}></Proyecto>
        <Proyecto name='SWEEPINBOX' image={sweepinbox}></Proyecto>
      </div>
      </div>
    </body>
    )
}
export default App
