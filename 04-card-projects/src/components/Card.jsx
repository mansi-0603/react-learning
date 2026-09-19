import { useState } from "react";
import { Bookmark } from "lucide-react";

const Card = ({
  brandLogo,
  companyName,
  datePosted,
  post,
  tag1,
  tag2,
  pay,
  location,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const tags = [tag1, tag2];

  return (
    <article className="card">
      <div className="card-top">
        <img
          className="card-logo"
          src={brandLogo}
          alt={`${companyName} logo`}
          loading="lazy"
        />
        <button
          type="button"
          className={`save-btn ${isSaved ? "is-saved" : ""}`}
          onClick={() => setIsSaved((prev) => !prev)}
        >
          {isSaved ? "Saved" : "Save"}
          <Bookmark size={12} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="card-body">
        <p className="card-company">
          {companyName} <span>{datePosted}</span>
        </p>
        <h3 className="card-title">{post}</h3>
        <ul className="card-tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="card-bottom">
        <div>
          <p className="card-pay">{pay}</p>
          <p className="card-location">{location}</p>
        </div>
        <button type="button" className="apply-btn">
          Apply now
        </button>
      </div>
    </article>
  );
};

export default Card;