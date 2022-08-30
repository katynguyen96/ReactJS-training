import {useReducer, useEffect} from 'react'
import Context from './Context'
import reducer, {initState} from '../reducers/product.reducer'
import { KEY } from '../constants/constants'

const Provider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initState , () => {
    //get item in localstorage
    const localData = localStorage.getItem(KEY)
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    //set item into localstorage when products change
    localStorage.setItem(KEY, JSON.stringify(state))
  }, [state])
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
    )
  }

export default Provider
