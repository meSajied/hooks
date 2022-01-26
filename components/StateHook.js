import {useState} from "react";

export function StateHook() {
	const [count, setCount] = useState(0);

	return (
			<div>
				<button onClick={() => setCount(count + 1)}>
					Count {count} </button>
			</div>
	)
}

export function StateHookFromPreviousState() {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	return (
			<div>
				Count: {count}
				<button onClick={() => setCount(initialCount)}>
					Reset
				</button>

				<button onClick={() => setCount(prev => prev + 1)}>
					Increment
				</button>

				<button onClick={() => setCount(prev => prev - 1)}>
					Decrement
				</button>
			</div>
	)
}


export function StateHookWithObject() {
	const [name, setName] = useState(
			{firstName: '', lastName: ''});

	return (
			<form>
				<input type='text' value={name.firstName}
				       onChange={e => setName({
					       ...name,
					       firstName: e.target.value
				       })}/>

				<input type='text' value={name.lastName}
				       onChange={e => setName({
					       ...name,
					       lastName: e.target.value
				       })}/>

				<h2>
					Your name is {name.firstName} {name.lastName}
				</h2>
			</form>
	)
}

export function StateHookWithArray() {
	const [Items, setItems] = useState([]);
	const hello = 0;

	function addItem() {
		setItems([...Items, {
			key: Items.length,
			value: hello + 1
		}])
	}

	return (
			<div>
				<button onClick={addItem}> Add A Number</button>
				<ul>
					<li>
						{Items.map(item =>
								<li key={item.id}> {item.value} </li>
						)}
					</li>
				</ul>

			</div>
	)
}