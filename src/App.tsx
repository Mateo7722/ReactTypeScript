import { useEffect } from "react"
import Form from "./components/Form"
import List from "./components/List"
import { useList } from "./hooks/useList"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {state} = useList()

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list))
  }, [state.list])

  return (
    <>
      <h1 className="text-center font-bold text-4xl p-10 uppercase">Mis Peliculas y Series Pendientes</h1>

      <div className="flex flex-col lg:flex-row justify-evenly">
        <Form/>
        <List/>
      </div>


      <ToastContainer/>
    </>
  )
}

export default App
