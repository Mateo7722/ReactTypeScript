/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import type { ItemForm } from "../types"
import { useList } from "../hooks/useList"
import Error from "./Error"
import { toast } from "react-toastify"

export default function Form() {

    const {state, dispatch} = useList()

    const initialState: ItemForm = {
        name: '',
        gender: '',
        type: ''
    }

    const [form, setForm] = useState<ItemForm>(initialState)
    const [error, setError] = useState(false)

    useEffect(() => {

        if(state.activeItem){
            const selectedItem = state.list.filter(item => item.id === state.activeItem)[0]
            setForm(selectedItem)
        }

    }, [state.activeItem])

    const handleChange = (e:  ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(form).includes('')){
            setError(true)
            return
        }
        
        //Revisa si estamos editando o creando un nuevo item
        if(state.activeItem === ''){
            dispatch({type: 'add-item', payload: {item: form}})
            toast.success(`${form.name} agregado con exito`)
        }else{
            dispatch({type: 'edit-item', payload: {item: {...form, id: state.activeItem}}})
            toast.success(`${form.name} editado con exito`)
        }
        
        setForm(initialState)
        setError(false)

    }   


    return (

        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <h2 className="font-bold text-4xl mt-10 text-center">
                Añade un {''}
                <span className="text-orange-500">Pelicula</span>
                /
                <span className="text-mulberry-500">Serie</span>
            </h2>

            <form className="bg-white shadow-xl rounded-md p-5 mt-5" onSubmit={handleSubmit}>

                {error && (
                    <Error/>
                )}

                <div className="flex flex-col">
                    <label htmlFor="name" className="font-bold text-xl mb-1 mt-8">Nombre: </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Nombre del Pelicula/Serie"
                        className="rounded-md p-2 border-2 border-gray-200"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="gender" className="font-bold text-xl mb-1 mt-8">Genero: </label>
                    <input 
                        type="text" 
                        name="gender" 
                        id="gender"
                        placeholder="Genero del Pelicula/Serie - ej. Shonen"
                        className="rounded-md p-2 border-2 border-gray-200"
                        value={form.gender}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="type" className="font-bold text-xl mb-1 mt-8">Tipo: </label>
                    <select 
                        name="type" 
                        id="type" 
                        className="rounded-md p-2 border-2 border-gray-200"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Pelicula">Pelicula</option>
                        <option value="Serie">Serie</option>


                    </select>
                </div>

                <input type="submit" value='Guardar' className={`font-bold text-center text-lg text-white w-full rounded-sm mt-5 p-2 cursor-pointer transition-colors ${form.type === 'Serie' ? 'bg-mulberry-500 hover:bg-mulberry-300' : 'bg-orange-500 hover:bg-orange-300'}`}/>
            </form>
        </div>
    )
}
