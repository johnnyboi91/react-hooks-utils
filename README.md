> Just some react hooks utils... More coming soon (WIP).

## Install

```bash
npm install --save react-hooks-utilities
```

## Usage

### useStateWithCb:
```jsx
import React from 'react'
import { useStateWithCb } from 'react-hooks-utilities'

function testCallback(value) {
    const el = document.getElementById('test')
    el.innerText = `Current value is ${value}`
}

function Example() {
    const [state, setState] = useStateWithCb(0, testCallback)
    const increment = () => setState((prev) => prev + 1)
    const decrement = () => setState((prev) => prev - 1)
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p id="test"/>
        </div>
    )
}
```

### useDimensions:
```jsx
import React from 'react'
import { useDimensions } from 'react-hooks-utilities'

function Example() {
    const {
        ref,
        height,
        width
    } = useDimensions()
    return (
        <div ref={ref}>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    )
}
```

### useWindowDimensions:
```jsx
import React from 'react'
import { useWindowDimensions } from 'react-hooks-utilities'

function Example() {
    const {
        height,
        width,
        breakpoint
    } = useWindowDimensions()
    return (
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
            <p>Current breakpoint: {breakpoint}</p>
        </div>
    )
}
```

### useMouseCoordinates:
```jsx
import React from 'react'
import { useMouseCoordinates } from 'react-hooks-utilities'

function Example() {
    const {
        x,
        y
    } = useMouseCoordinates()
    return (
        <div>
            <p>{x}px</p>
            <p>{y}px</p>
        </div>
    )
}
```

Or visit this [link](https://johnnyboi91.github.io/react-hooks-utilities/) for live examples.

## Todo

- [ ] Move to TypeScript.
- [ ] Write tests.
- [ ] Update examples page.
- [ ] More hooks :sunny:

## License

MIT © [johnnyboi91](https://github.com/johnnyboi91)
