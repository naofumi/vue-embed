import { useState } from 'https://esm.sh/preact@10.19.2/hooks';
import { h } from 'https://esm.sh/preact@10.19.2';

export function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    h('button', {onClick: () => setCount(count + 1)},
      `Clicked ${count} times`)
  )
}
