export const Enjoy = ({item, fotito}:{item: string, fotito: string}) => {

    return (
        <div className="rounded-[10%] p-6 justify-center
        transition delay-50 duration-100 ease-in-out hover:scale-120">
            <img src={fotito} alt="foto" className="rounded-[10%] border-4 border-gray-500
            cursor-pointer h-50 w-50"/>
            <p className="font-doto text-4xl">{item}</p>
        </div>
    )
}