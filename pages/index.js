import {StateHook, StateHookFromPreviousState} from '../components/StateHook';

export default function Home() {
  return (
      <div>
        <StateHook/>
        <StateHookFromPreviousState/>
      </div>
  )
}
