import { Modal } from "./modal"
import { useState } from "react"

export const Icon = ({item, fotito, id}:{item: string, fotito: string, id: number}) => {

    const [state, setState] = useState(false)

    const openModal = () => {
        setState(true)
    }

    return (
        <div>
            <div className="rounded-[10%] p-6 
        justify-center
        transition delay-50 duration-100 ease-in-out hover:scale-120">
            <button className="flex-col flex justify-center items-center cursor-pointer"
            onClick={openModal}>
            <img src={fotito} alt="foto" className="rounded-[10%] border-4 border-gray-500
            h-50 w-50"/>
            </button>
            </div>
            <p className="font-doto text-4xl">{item}</p>
            <Modal open={state} toClose={() => setState(false)} identifier={id}>
            </Modal>
        </div>
    )
}