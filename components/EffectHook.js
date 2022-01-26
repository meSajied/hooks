import {useEffect, useState} from "react";

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