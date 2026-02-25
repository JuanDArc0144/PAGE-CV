import './App.css'
import { Header } from './components/header'
import { Profile } from './components/profile'
import { Icon } from './components/icon'
import videogames from "./images/App_Images/nier.gif"
import anime from "./images/App_Images/chainsaw.gif"
import coding from "./images/App_Images/coding.gif"
import uniroom from './images/App_Images/uniroom.gif'
import emergencity from './images/App_Images/emergencity.gif'
import sweepinbox from './images/App_Images/sweepinbox.gif'
function App() {

  return (
    <body className='bg-[url(./images/App_Images/bg.gif)] text-green-400'>
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
            <Icon item="VIDEOGAMES" fotito={videogames} id={0}></Icon>
            <Icon item="ANIME" fotito={anime} id={1}></Icon>
            <Icon item="PROGRAMAR" fotito={coding} id={2}></Icon>
        </div>
     </div>
      <div className='w-36 h-36'></div>
      {/* DIV de lso proyectos */}
      <div id='proyectos' className='bg-gray-950 p-32 rounded-4xl border-2 w-auto'>
        <h1 className='text-8xl font-doto'>
          PROYECTOS
        </h1>
        <div className='flex justify-center'>
        <Icon item='EMERGENCITY' fotito={emergencity} id={3}></Icon>
        <Icon item='UNIROOM' fotito={uniroom} id={4}></Icon>
        <Icon item='SWEEPINBOX' fotito={sweepinbox} id={5}></Icon>
      </div>
      </div>
    </body>
    )
}
export default App
