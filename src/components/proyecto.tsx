export const Proyecto = ({name, image}:{name: string, image: string}) => {
    return (
        <div className="rounded-[10%] p-6 justify-center 
        transition delay-50 duration-100 ease-in-out hover:scale-120">
            <img src={image} alt="proyect_imagen" 
            className="rounded-[10%] border-4 border-gray-500
            cursor-pointer h-50 w-50"/>
            <h1 className="text-4xl font-doto">{name}</h1>
        </div>
    )
}