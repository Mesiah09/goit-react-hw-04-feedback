import { useState } from 'react';
import Section from 'components/Section';
import Stats from 'components/Stats';
import Feedback from 'components/Feedback';
import Notification from 'components/Notification';
const options = ['good', 'neutral', 'bad'];
export function App() {
  const [reviews, setReviews] = useState({ good: 0, bad: 0, neutral: 0 });
  //
  function countTotalFeedback() {
    return reviews.good + reviews.bad + reviews.neutral;
  }
  function countPositiveFeedbackPercentage() {
    return (
      (reviews.good / (reviews.good + reviews.bad + reviews.neutral)) * 100
    );
  }
  const onLeaveFeedback = option => {
    setReviews(prev => {
      let res = { ...prev };
      res[option] += 1;
      return res;
    });
  };
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div className="app">
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Stats
            good={reviews.good}
            neutral={reviews.neutral}
            bad={reviews.bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
