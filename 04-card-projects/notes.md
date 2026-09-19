# Props Practice - Notes

Quick notes from the Job Cards project. Read these before starting the next practice project.

## 1. What props are

- Props are the data a parent passes to a child component, like function arguments.
- They are **read-only**. A child never changes its own props.
- Data flows one way: parent to child.

```jsx
<Card companyName="Meta" post="Frontend Engineer" />
```

## 2. Receiving props

Instead of writing `props.x` everywhere, destructure in the parameter list:

```jsx
// before
const Card = (props) => <h3>{props.post}</h3>;

// after
const Card = ({ post }) => <h3>{post}</h3>;
```

## 3. Passing many props: the spread operator

```jsx
// before: one by one, easy to mistype
<Card company={elem.companyName} post={elem.post} pay={elem.pay} ... />

// after: spread the whole object
<Card {...job} />
```

The prop names come straight from the object keys, so **`Card` must destructure the exact same names** as the data (`companyName`, not `company`).

## 4. Rendering a list

- Use `.map()` to turn an array into components.
- Every item needs a stable, unique `key`, placed on the **outermost element returned by map** (here `<Card />`, so no extra wrapper `div`).
- Avoid the array index as a key when the list can be reordered, filtered or edited. An `id` field is best.

```jsx
{jobOpenings.map((job) => (
  <Card key={`${job.companyName}-${job.post}`} {...job} />
))}
```

## 5. State inside a card (Save button)

```jsx
const [isSaved, setIsSaved] = useState(false);

<button onClick={() => setIsSaved((prev) => !prev)}>
  {isSaved ? "Saved" : "Save"}
  <Bookmark fill={isSaved ? "currentColor" : "none"} />
</button>
```

- Props come **from the parent**. State **belongs to the component**.
- Use the `prev => !prev` form when the new value depends on the old one.
- Each card has its own `isSaved`, so saving one card doesn't affect the others.

## 6. Mistakes I made, and the fixes

| Mistake | Why it's a problem | Fix |
| ------- | ------------------ | --- |
| CSS selectors didn't match the JSX (`.center h2`, `.tag h4` vs `h3`, `h5`, `.infor`) | Styles silently don't apply | Give elements clear class names and use the same ones in CSS and JSX |
| Passed `company=` but the data key was `companyName` | Mismatched names give `undefined` props | Keep prop names identical to the data keys |
| `column-width: 600` on a button | Invalid for this use, does nothing | Remove it |
| Fixed `height: 330px` on the card | Long titles overflow or clip | Use `min-height` |
| Data array inside the component | Re-created on every render | Move it to its own file (`data/jobs.js`) |
| `console.log(props)` left in | Noisy console, leftover debug code | Remove before committing |
| Unused `import React` | Not needed with the modern JSX transform | Remove it |

## 7. HTML and CSS things worth remembering

- Use **semantic tags**: `article` for a card, `ul`/`li` for a list of tags. Only the job title needs to be a heading.
- Always add `type="button"` to buttons that aren't submitting a form.
- Give images meaningful alt text: `alt={`${companyName} logo`}`.
- `object-fit: contain` keeps a logo whole. `cover` crops it.
- Buttons don't inherit the page font, so add `button { font: inherit; }`.
- Responsive grid with no media queries:
  ```css
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  ```
- CSS variables (`--text-muted`, `--radius-card`) let you change the theme in one place.
- Very light grey text (like `#aeaeae` on white) is hard to read. Aim for a darker grey such as `#6f6f6f`.
- Add a `:focus-visible` outline so keyboard users can see where they are.

## 8. Ideas for next time

- [ ] Add `PropTypes` (or TypeScript) to validate the props
- [ ] Split `Card` into smaller components: `SaveButton`, `TagList`
- [ ] Add an `id` to each job and use it as the key
- [ ] Add a search box or a filter (full-time / part-time)
- [ ] Add a "Saved only" toggle by lifting the saved state up into `App`
- [ ] Keep saved jobs after refresh (`localStorage`)
- [ ] Load the jobs from an API instead of a local array
- [ ] Show a fallback (company initial) when a logo fails to load