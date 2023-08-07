import React, { useState } from "react";

const Paginacion = ({pagina, setPagina, maximo}) => {

    const [input, setInput] = useState(1)

    const nextPage = () =>{
        setInput(input + 1)
        setPagina(pagina + 1)
    }
    const previousPage = () =>{
        setInput(input - 1)
        setPagina(pagina - 1)
    }

    return (
    <div>
        <button onClick={previousPage}>Previous</button>
        <input name="page" autoComplete='off' value={input}/>
        <p></p>
        <button onClick={nextPage}>Next</button>
    </div>
    )
}

export default Paginacion
