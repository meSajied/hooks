import {useEffect, useState} from "react";
import axios from "axios";

export function EffectHook() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count === 0) {
			document.title = `Not clicked yet`
		} else if (count === 1) {
			document.title = `Clicked 1 time`
		} else if (count > 1) {
			document.title = `Clicked ${count} times`
		}
	})

	return (
			<div>
				<button onClick={() => setCount(count + 1)}>
					Count {count} </button>
			</div>
	)
}

export function EffectHookWithCondition() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		if (count === 0) {
			document.title = `Not clicked yet`
		} else if (count === 1) {
			document.title = `Clicked 1 time`
		} else if (count > 1) {
			document.title = `Clicked ${count} times`
		}
	}, [count])

	return (
			<div>
				<input type='text' value={name} onChange={e =>
						setName(e.target.value)}/>
				<button onClick={() => setCount(count + 1)}>
					Count {count} </button>
			</div>
	)
}

export function EffectRunOnlyOnce() {
	useEffect({
		// do something...
	}, []) // this parameter make the effects only once...
}

/*export function EffectWithCleanUp() {
	useEffect({
		// do something...

		return (() => {
			// return something for cleanup...
	})
	}, []) // this parameter make the effects only once...
}*/

export function DataFetchingWithUseEffect() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios
				.get('https://jsonplaceholder.typicode.com/posts')
				.then(res => {
					console.log(res)
					setPosts(res.data)
				})
				.catch(err => {
					console.log(err)
				})
	}, [])
	return (
			<div>
				<ul>
					{posts.map(post => (
							<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
	)
}

export function DataFetchingWithUseEffectAndButton() {
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick,
		setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
				.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then(res => {
					console.log(res)
					setPost(res.data)
				})
				.catch(err => {
					console.log(err)
				})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
			<div>
				<input type="text" value={id}
				       onChange={e => setId(e.target.value)}/>
				<button type="button"
				        onClick={handleClick}>Fetch Post
				</button>
				<div>{post.title}</div>
			</div>
	)
}