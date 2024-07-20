import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { initialState, ListActions, listReducer, ListState } from "../reducers/list-reducer";


type ListContextProps = {
    state: ListState,
    dispatch: Dispatch<ListActions>
}

type ListProviderProps = {
    children: ReactNode
}

export const ListContext = createContext<ListContextProps>(null!)

export const ListProvider = ({children} : ListProviderProps) => {
    const [state, dispatch] = useReducer(listReducer, initialState)


    return (
        <ListContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ListContext.Provider>
    )
}