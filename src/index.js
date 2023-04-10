const { readFileSync } = require("fs");

const FeedbackApp = require("./FeedbackApp.js");
const feedbackApiData = JSON.parse(readFileSync("feedback.json"));

feedbackApiData.map(feedback => {
  const App = new FeedbackApp(feedback.word, feedback.comment, feedback.date, feedback.rating);
  console.log(App.formatFeedback());
});