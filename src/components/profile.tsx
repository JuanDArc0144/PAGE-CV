import profile_pic from "../images/prof-pic.jpeg"
import profile_pic_anime from "../images/himeno.jpg"
import { useState } from "react"

export const Profile = () => {
    const [pro_pic, setPro_pic] = useState(profile_pic) 

    const flip = () => {
        if (pro_pic === profile_pic){
            setPro_pic(profile_pic_anime)
        } else {
            setPro_pic(profile_pic)
        }
        }
    return (
        <div className="flex p-8 justify-center bg-gray-950 rounded-4xl border-2">
            <br />
            <img id="foto" src={pro_pic} alt="yo merengues" 
            className="rounded-[40%] p-2" height={150} width={230} 
            onMouseEnter={flip} onMouseLeave={flip}/>
            <br />
            <p className="text-4xl font-doto content-center p-4">
                Hola soy Juan, me gustan los monos chinos, las computadoras y los videogames. 
                A veces me pierdo en mi mente por el proceso de desarrollo de la personalidad, pero
                depende más si ya me he tomado un café o no.
            </p>
            
        </div>
        
    )
    }
