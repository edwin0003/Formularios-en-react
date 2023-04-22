import { useRef, useState } from "react";

const NoControlado = ()  => { 
    const [error, setError] = useState("")
    const form = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData(form.current);
        const {title, description, state} = Object.fromEntries([...data.entries()])
        console.log(title, description, state);
        //validar datos
        if(!title.trim()|| !description){
            return setError(<h1 style={{color:"red"}}>Llena todos los campos</h1>)
        }else{
            setError("")
        }
          

    }
    
    return(
    <form onSubmit={handleSubmit} ref={form}>
        <input type="text" placeholder="Ingrese TODO" className="form-control mb-2" name="title" defaultValue='Todo 01'/>
        <textarea className="form-select mb-2" placeholder="Ingrese Descripcion" name="description" defaultValue="Descripcion 01"/>
        <select className="form-control mb-2" defaultValue="Completado" name="state">
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">Procesar</button>
        {
            error!== "" && error
        }
    </form>
) }
export default NoControlado;