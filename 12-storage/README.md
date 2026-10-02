# Local Storage & Session Storage in React

`localStorage` and `sessionStorage` are browser Web Storage APIs used to store data as key-value pairs.

Both provide the same four main methods:

```js
setItem()
getItem()
removeItem()
clear()
```

The main difference is **how long the stored data persists**.

---

# 1. localStorage

`localStorage` stores data in the browser and keeps it available even after refreshing the page or closing and reopening the browser.

## 1.1 setItem()

`setItem()` is used to store data.

### Store a String

```js
localStorage.setItem("username", "Sarthak");
```

### Store a Number

```js
localStorage.setItem("age", 18);
```

Values are stored as strings.

### Store an Object

Objects need to be converted into a JSON string.

```js
const user = {
  username: "Sarthak",
  age: 18,
  city: "Bhopal",
};

localStorage.setItem("user", JSON.stringify(user));
```

`JSON.stringify()` converts the JavaScript object into a JSON string.

---

## 1.2 getItem()

`getItem()` retrieves stored data using its key.

```js
const username = localStorage.getItem("username");

console.log(username);
```

For an object:

```js
const userData = JSON.parse(
  localStorage.getItem("user")
);

console.log(userData);
```

`JSON.parse()` converts the JSON string back into a JavaScript object.

If the key does not exist:

```js
const data = localStorage.getItem("unknown");

console.log(data); // null
```

### Object Data Flow

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
localStorage
       ↓
getItem()
       ↓
JSON.parse()
       ↓
JavaScript Object
```

---

## 1.3 removeItem()

`removeItem()` removes one specific item.

```js
localStorage.removeItem("username");
```

Only the `username` item is removed.

Other stored items remain.

---

## 1.4 clear()

`clear()` removes all data stored in `localStorage` for the current origin.

```js
localStorage.clear();
```

For example:

```js
localStorage.setItem("username", "Sarthak");
localStorage.setItem("age", "18");

localStorage.clear();
```

Both items are removed.

---

# 2. sessionStorage

`sessionStorage` works similarly to `localStorage`, but the stored data is associated with the current browser tab/session.

The data normally remains available while that tab is open, including after page refresh, but is removed when the tab/window session ends.

---

## 2.1 setItem()

Store a string:

```js
sessionStorage.setItem("username", "Sarthak");
```

Store a number:

```js
sessionStorage.setItem("age", 18);
```

Store an object:

```js
const user = {
  username: "Sarthak",
  age: 18,
  city: "Bhopal",
};

sessionStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

---

## 2.2 getItem()

Retrieve a string:

```js
const username = sessionStorage.getItem("username");

console.log(username);
```

Retrieve an object:

```js
const userData = JSON.parse(
  sessionStorage.getItem("user")
);

console.log(userData);
```

If the key does not exist:

```js
const data = sessionStorage.getItem("unknown");

console.log(data); // null
```

---

## 2.3 removeItem()

Remove one specific item:

```js
sessionStorage.removeItem("username");
```

Only the specified key is removed.

---

## 2.4 clear()

Remove all session storage data for the current origin/session:

```js
sessionStorage.clear();
```

---

# 3. Complete localStorage Example

```jsx
import React from "react";

const App = () => {

  const user = {
    username: "Sarthak",
    age: 18,
    city: "Bhopal",
  };

  // setItem()
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  // getItem()
  const userData = JSON.parse(
    localStorage.getItem("user")
  );

  console.log(userData);

  // removeItem()
  // localStorage.removeItem("user");

  // clear()
  // localStorage.clear();

  return <div>App</div>;
};

export default App;
```

---

# 4. Complete sessionStorage Example

```jsx
import React from "react";

const App = () => {

  const user = {
    username: "Sarthak",
    age: 18,
    city: "Bhopal",
  };

  // setItem()
  sessionStorage.setItem(
    "user",
    JSON.stringify(user)
  );

  // getItem()
  const userData = JSON.parse(
    sessionStorage.getItem("user")
  );

  console.log(userData);

  // removeItem()
  // sessionStorage.removeItem("user");

  // clear()
  // sessionStorage.clear();

  return <div>App</div>;
};

export default App;
```

---

# 5. localStorage vs sessionStorage

| Feature                        | localStorage  | sessionStorage               |
| ------------------------------ | ------------- | ---------------------------- |
| `setItem()`                    | Yes           | Yes                          |
| `getItem()`                    | Yes           | Yes                          |
| `removeItem()`                 | Yes           | Yes                          |
| `clear()`                      | Yes           | Yes                          |
| Stores key-value data          | Yes           | Yes                          |
| Values stored as strings       | Yes           | Yes                          |
| Survives page refresh          | Yes           | Yes                          |
| Persists after browser restart | Generally yes | No                           |
| Scope                          | Origin        | Origin + browser tab/session |

---

# 6. All Important Methods

## localStorage

```js
localStorage.setItem("key", "value");

localStorage.getItem("key");

localStorage.removeItem("key");

localStorage.clear();
```

## sessionStorage

```js
sessionStorage.setItem("key", "value");

sessionStorage.getItem("key");

sessionStorage.removeItem("key");

sessionStorage.clear();
```

---

# 7. Storing Arrays and Objects

Web Storage stores strings, so arrays and objects should be converted to JSON.

### Store

```js
const skills = ["C++", "React", "SQL"];

localStorage.setItem(
  "skills",
  JSON.stringify(skills)
);
```

### Retrieve

```js
const skills = JSON.parse(
  localStorage.getItem("skills")
);

console.log(skills);
```

The same approach works with `sessionStorage`.

---

# 8. Simple Difference

```text
localStorage
     ↓
Persistent browser storage
     ↓
Data generally remains after
closing and reopening the browser
```

```text
sessionStorage
     ↓
Session-based browser storage
     ↓
Data belongs to the current
browser tab/session
```

## Key Takeaway

Both APIs use the same four main methods:

```text
setItem()     → Store data
getItem()     → Retrieve data
removeItem()  → Remove one item
clear()       → Remove all items
```

The important difference is **persistence and scope**, not the API syntax.
