import {StateHook, StateHookFromPreviousState, StateHookWithObject} from '../components/StateHook';

export default function Home() {
  return (
      <div>
        <StateHook/>
        <StateHookFromPreviousState/>
        <StateHookWithObject/>
      </div>
  )
}
