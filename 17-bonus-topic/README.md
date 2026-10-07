# Props Drilling in React

## Props drilling kya hai?

Props drilling ek pattern hai jisme data (props) parent component se
multiple intermediate child components ke through neeche flow karta hai,
jab tak woh us deeply nested component tak na pahunch jaye jise uski
actually zaroorat hai. Beech ke components us data ko khud use nahi karte,
bas aage pass karte hain.

## Is project mein flow

```
App (theme state yahin hai)
 └── Navbar        (sirf pass karta hai)
      └── Menu     (sirf pass karta hai)
           └── ThemeButton  (theme padhta hai, setTheme call karta hai)
```

## Data child se parent ki taraf kaise jata hai?

Props ka flow **hamesha parent -> child** hota hai. Child directly parent
ka data change nahi kar sakta. Lekin parent ek **function** (jaise `setTheme`)
props mein bhej sakta hai, aur child usse call karke parent ko update
karwa deta hai. Is project mein `ThemeButton` button click par `setTheme`
call karta hai, aur state `App` mein update hoti hai.

## Problem

Layers badhne par har beech wale component ko aise props lene aur pass
karne padte hain jo uske kaam ke nahi hain. Code messy hota hai aur maintain
karna mushkil.

## Solution

- **Context API** (`createContext` + `useContext`) - built-in, chhote/medium apps ke liye
- State management libraries (Redux, Zustand) - bade apps ke liye
