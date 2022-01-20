import React, {useState} from "react";

export function StateHook() {
	const [count, setCount] = useState(0);

	return (
			<div>
				<button onClick={() => setCount(count + 1)}> Count {count} </button>
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