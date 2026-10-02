## API Calling in React

API calling is used to fetch or send data between a React application and a backend/server.

A common approach is to use `fetch()` inside `useEffect()` when data needs to be fetched when a component loads.

### Basic Example

```jsx
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

### How It Works

1. `useEffect()` runs after the component renders.
2. `fetch()` sends a request to the API.
3. `response.json()` converts the response into JavaScript data.
4. `setUsers(data)` stores the API data in state.
5. React re-renders the component with the updated data.
6. `users.map()` displays the received data.

### API Calling with `async/await`

The same API call can be written using `async/await`:

```jsx
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchUsers();
}, []);
```

### Important

`useEffect` is commonly used for API calls that should happen because of a component lifecycle or a dependency change.

For example:

```jsx
useEffect(() => {
  fetchData();
}, []);
```

The empty dependency array `[]` means the effect runs after the initial mount.

If the API call depends on a value:

```jsx
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

the effect runs again whenever `userId` changes.
