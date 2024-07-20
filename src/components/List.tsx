import { useList } from "../hooks/useList";
import ItemList from "./ItemList";

export default function List() {

    const {state} = useList()
    const {list} = state

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-bold text-4xl mt-10 text-center">
                Tus {''}
                <span className="text-orange-500">Pelicula</span>
                /
                <span className="text-mulberry-500">Serie</span>
            </h2>
            {state.list.length === 0 ? (
                <p className="font-bold text-center text-lg mt-10">No hay Peliculas o Series</p>
            ) : (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5">
                {list.map(item => (
                    <ItemList
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            )}
        </div>
    )
}
