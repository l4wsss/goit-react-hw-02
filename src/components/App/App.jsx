import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const App = () => {
  const [option, setOption] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(option));
  }, [option]);

  const handleLeaveFeedback = (feedback) => {
    if (feedback === "good") {
      setOption({ ...option, good: option.good + 1 });
    } else if (feedback === "neutral") {
      setOption({ ...option, neutral: option.neutral + 1 });
    } else if (feedback === "bad") {
      setOption({ ...option, bad: option.bad + 1 });
    }
  };

  const handleReset = () => {
    setOption({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const feedbackOptions = ["good", "neutral", "bad"];

  const feedbackTotal = option.good + option.bad + option.neutral;

  const precentPositiveFeedback = Math.round(
    (option.good / feedbackTotal) * 100
  );

  return (
    <div>
      <Description />
      <Options
        handleLeaveFeedback={handleLeaveFeedback}
        feedbacks={feedbackOptions}
        handleReset={handleReset}
        total={feedbackTotal}
      />
      {feedbackTotal ? (
        <Feedback
          feedbackData={option}
          total={feedbackTotal}
          precentPositiveFeedback={precentPositiveFeedback}
        />
      ) : (
        <Notification>No feedback yet.</Notification>
      )}
    </div>
  );
};

export default App;
