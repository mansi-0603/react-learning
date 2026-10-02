# Tailwind CSS

Tailwind CSS is a utility-first CSS framework.

Instead of writing custom CSS classes, Tailwind provides small utility classes that can be combined directly in JSX.

## Example

Traditional CSS:

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}
```

React:

```jsx
<button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
  Click Me
</button>
```

## Common Tailwind Classes

### Colors

```jsx
<p className="text-red-500">Hello</p>

<div className="bg-blue-500">
  Content
</div>
```

### Spacing

```jsx
<div className="p-4 m-4">
  Content
</div>
```

* `p-4` → padding
* `m-4` → margin

### Flexbox

```jsx
<div className="flex justify-center items-center">
  Content
</div>
```

* `flex` → enables Flexbox
* `justify-center` → horizontal alignment
* `items-center` → vertical alignment

### Responsive Design

```jsx
<div className="text-sm md:text-lg lg:text-2xl">
  Responsive Text
</div>
```

Tailwind allows different styles at different screen sizes.

## Example Card

```jsx
function Card() {
  return (
    <div className="max-w-sm p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold">
        React
      </h2>

      <p className="text-gray-600 mt-2">
        Learning React with Tailwind CSS.
      </p>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  );
}
```

## Why Tailwind?

* Faster UI development
* Utility classes
* Responsive design
* Consistent spacing and sizing
* Less custom CSS
* Easy component-level styling
