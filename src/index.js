const { readFileSync } = require("fs");

const FeedbackApp = require("./FeedbackApp.js");
const feedbackApiData = JSON.parse(readFileSync("feedback.json"));

feedbackApiData.map(feedback => {
  const { word, comment, date, rating } = feedback;
  const App = new FeedbackApp({ word, comment, date, rating });
  console.log(App.formatFeedback());
});