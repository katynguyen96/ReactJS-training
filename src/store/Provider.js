import {useReducer, useEffect} from 'react'
import Context from './Context'
import reducer, {initState} from '../reducers/reducer'

function Provider({children}) {
	const [state, dispatch] = useReducer(reducer, initState , () => {
		const localData = localStorage.getItem('products')
		return localData ? JSON.parse(localData) : []
	})
	useEffect(() => {
		localStorage.setItem('products', JSON.stringify(state))
	}, [state])
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
		)
	}

export default Provider