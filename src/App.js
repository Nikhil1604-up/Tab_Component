import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const tabsData = [
    { label: "First", content: <h1>First Tab Content</h1> },
    { label: "Second", content: <h1>Second Tab Content</h1> },
    { label: "Third", content: <h1>Third Tab Content</h1> },
  ];

  function handleTabClick(index) {
    setSelectedTabIndex(index);
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setSelectedTabIndex((prevIndex) =>
        prevIndex === tabsData.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowLeft") {
      setSelectedTabIndex((prevIndex) =>
        prevIndex === 0 ? tabsData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        {tabsData.map((item, index) => (
          <div
            key={index}
            className={`tab ${index === selectedTabIndex ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="tab-content">{tabsData[selectedTabIndex].content}</div>
    </div>
  );
}
