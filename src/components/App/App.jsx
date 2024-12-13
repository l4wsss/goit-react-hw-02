import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

const App = () => {
  const [good, setGood] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback?.good || 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback?.neutral || 0;
  });

  const [bad, setBad] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback?.bad || 0;
  });

  useEffect(() => {
    const feedbackData = {
      good,
      neutral,
      bad,
    };
    localStorage.setItem("feedback", JSON.stringify(feedbackData));
  }, [good, neutral, bad]);

  const handleLeaveFeedback = (option) => {
    if (option === "good") {
      setGood(good + 1);
    } else if (option === "neutral") {
      setNeutral(neutral + 1);
    } else if (option === "bad") {
      setBad(bad + 1);
    }
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const feedbackOptions = ["good", "neutral", "bad"];

  const feedbackTotal = good + bad + neutral;

  const precentPositiveFeedback = Math.round((good / feedbackTotal) * 100);

  return (
    <div>
      <Description />
      <Options
        handleLeaveFeedback={handleLeaveFeedback}
        options={feedbackOptions}
        handleReset={handleReset}
        total={feedbackTotal}
      />
      {feedbackTotal ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={feedbackTotal}
          precentPositiveFeedback={precentPositiveFeedback}
        />
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
};

export default App;
