import Card from "./components/Card";
import { jobOpenings } from "./data/jobs";

const App = () => {
  return (
    <main className="job-grid">
      {jobOpenings.map((job) => (
        <Card key={`${job.companyName}-${job.post}`} {...job} />
      ))}
    </main>
  );
};

export default App;
