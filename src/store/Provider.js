import {useReducer, useEffect} from 'react'
import Context from './Context'
import reducer, {initState} from '../reducers/reducer'

const Provider = ({children}) => {

	const [state, dispatch] = useReducer(reducer, initState , () => {
		//get item in localstorage
		const localData = localStorage.getItem('products')
		return localData ? JSON.parse(localData) : []
	})

	useEffect(() => {
		//set item into localstorage when state change
		localStorage.setItem('products', JSON.stringify(state))
	}, [state.products])
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
		)
	}

export default Provider