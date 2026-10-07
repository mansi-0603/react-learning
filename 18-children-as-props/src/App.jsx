import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar>
      <h2>This is h2</h2>
      <h2>This is children</h2>
    </Navbar>
    <main className="content">
      <h1>Theme-aware navbar demo</h1>
      <p>Use the toggle in the navbar to switch between light and dark mode.</p>
    </main>
  </>
);

export default App;
