export const Header = () => {

    return (
        <div className="flex content-center justify-center">
            <h1 className="text-6xl font-doto p-1 animate-pulse">
                J_A_S_H_44
            </h1>
            <div className="flex justify-end w-200">
                <a href="#gustos" className="text-4xl font-doto p-1.5 animate-pulse cursor-pointer">
                    GUSTOS
                </a>
                <div className="w-10"></div>
                <a href="#proyectos" className="text-4xl font-doto p-1.5 animate-pulse cursor-pointer">
                    PROYECTOS
                </a>
                <div className="w-10"></div>
            </div>
        </div>
    )
}