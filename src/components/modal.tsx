import {items} from "../assets/yoko-data"

import { useState } from "react"

export const Modal = ({open, identifier, toClose}:{open:boolean, identifier: number, toClose : any}) => {
    if (!open) return null

    return (
        <>
        {/* ID EXTERIOR (tengo q ajustar el scroll, ya luego) */}
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.7)] h-full overflow-hidden" />
        {/* ID INTERIOR (ajustando esa madre de flex)*/}
        <div className="bg-gray-600 fixed top-1/2 left-1/2 -translate-1/2 z-50
        animate-appear rounded-4xl p-10 h-280 w-400">
            <div className="flex flex-row-reverse items-stretch bg-amber-100">
                <div>
                    <h1 className="bg-cyan-400 scale-100 text-8xl font-doto text-black p-10
                    rounded-4xl">{items.at(identifier)?.title}</h1>
                    <p className="bg-blue-50 w-190 text-2xl font-light p-0.5">{items.at(identifier)?.description}</p>
                </div>
                <div className="bg-amber-800 flex justify-center items-center">
                    <img src={items.at(identifier)?.gallery} alt="imagen"
                    className="rounded-[10%]
                    w-300 h-200 "/>
                </div>
            </div>
            <div className=" h-50 flex items-end justify-end p-7">
                <button onClick={toClose} className="cursor-pointer text-5xl rounded-3xl border-4 p-6
                font-doto hover:bg-green-400 hover:text-black transition delay-100 duration-300">Go back to the CV</button>
            </div>
        </div>
        </>
    )
}