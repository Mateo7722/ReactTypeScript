import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Item } from '../types'
import { useList } from '../hooks/useList'
import { toast } from 'react-toastify'

type ItemListProps = {
  item: Item
}


export default function ItemList({item} : ItemListProps) {

  const {dispatch} = useList()

  const deleteItem = () =>{
    dispatch({type:'delete-item', payload:{id: item.id}})
    toast.error(`${item.name} ha sido eliminado`)
  }

  return (
    <div className='mt-10 min-w-40'>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
        <div className={`relative mx-4 -mt-6 mb-4 grid h-15 place-items-center overflow-hidden rounded-xl ${item.type === 'Serie' ? 'bg-mulberry-500' : 'bg-orange-500'} bg-clip-border text-white`}>
          <h3 className="block font-sans text-3xl text-center font-semibold leading-snug tracking-normal text-white antialiased">
            {item.name}
          </h3>
        </div>
        <p className='px-4 pt-0 text-lg'>Genero: <span className='font-bold'>{item.gender}</span></p>
        <p className='px-4 pt-0 text-lg'>Tipo: <span className='font-bold'>{item.type}</span></p>
        <div className='flex justify-center items-center p-4 mt-auto'>
          <button className='mx-2'>
            <PencilSquareIcon 
              className='h-8 w-8' 
              onClick={() => dispatch({type:'get-item-by-id', payload: {id: item.id}})}
            />
          </button>
          <button className='mx-2'>
            <XCircleIcon 
              className='h-8 w-8 text-red-600' 
              onClick={() => deleteItem()}

            />
          </button>
        </div>
      </div>
    </div>
  )
}
