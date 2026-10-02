## useEffect

`useEffect` is a React Hook used to perform side effects in a component.

Common use cases include:

- Fetching data from an API
- Updating the document title
- Setting up event listeners
- Working with timers
- Synchronizing React state with external systems

### Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Side effect code
}, []);