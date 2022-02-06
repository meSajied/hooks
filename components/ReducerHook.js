// code is imported from github.com/gopinav

import React, {useEffect, useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export function ReducerHook() {
	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
			<div>
				<div>Count = {count}</div>
				<button onClick={() => dispatch('increment')}>Increment</button>
				<button onClick={() => dispatch('decrement')}>Decrement</button>
				<button onClick={() => dispatch('reset')}>Reset</button>

				<div>Count = {countTwo}</div>
				<button onClick={() => dispatchTwo('increment')}>Increment</button>
				<button onClick={() => dispatchTwo('decrement')}>Decrement</button>
				<button onClick={() => dispatchTwo('reset')}>Reset</button>
			</div>
	)
}

const initialStateReducer = {
	loading: true,
	error: '',
	post: {}
}

const fetchReducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

export function DataFetchingWithUseReducer() {
	const [state, dispatch] = useReducer(fetchReducer, initialStateReducer)

	useEffect(() => {
		axios
				.get(`https://jsonplaceholder.typicode.com/posts/1`)
				.then(response => {
					dispatch({type: 'FETCH_SUCCESS', payload: response.data})
				})
				.catch(error => {
					dispatch({type: 'FETCH_ERROR'})
				})
	}, [])
	return (
			<div>
				{state.loading ? 'Loading' : state.post.title}
				{state.error ? state.error : null}
			</div>
	)
}