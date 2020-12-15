import React, { useState } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import s from './App.module.css';
import { FEEDBACK_OPTIONS } from './data/constans';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    switch (feedback) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        console.warn(`Тип поля feedback - ${feedback} не обрабатывается!`);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositivePercentage = () =>
    Math.round(good * (100 / countTotalFeedback()) || 0);

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentage()}
        />
      </Section>
    </div>
  );
}
