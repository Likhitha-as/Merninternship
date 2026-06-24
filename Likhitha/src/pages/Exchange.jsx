// src/pages/Exchange.jsx
import { useState } from "react";

function Exchange() {
  const [loading, setLoading] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "Python",
    "UI Design",
  ];

  const handleRequest = (skill) => {
    setSelectedSkill(skill);
    setLoading(true);

    // fake backend delay (to look like real app)
    setTimeout(() => {
      setLoading(false);
      alert(`Exchange request sent for ${skill}`);
    }, 1500);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Skill Exchange</h1>
      <p>Select a skill to request exchange</p>

      {skills.map((skill, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{skill}</h3>

          <button
            onClick={() => handleRequest(skill)}
            disabled={loading}
          >
            {loading && selectedSkill === skill
              ? "Processing..."
              : "Request Exchange"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Exchange;