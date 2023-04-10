const assert = require('assert');
const FeedbackApp = require('../src/FeedbackApp');

describe('Feedback App', () => {
  const swashbuckler = {
    "word": "swashbuckler",
    "comment": "Yar, a good word, matey! Shiver me timbers!",
    "date": "19 Sep 2019 12:12:00 GMT",
    "rating": 85
  };

  const slubber = {
    "word": "slubber",
    "comment": "Slubber sounds like slobber. So gross! More pretty words, please!",
    "date": "10 Sep 2019 04:14:00 PST",
    "rating": 21
  };

  const textlationship = {
    "word": "textlationship",
    "comment": "I'm in a textlationship with my friend! We text all the time! I feel like it's every second! LMAO!",
    "date": "24 Aug 2019 20:54:00 GMT",
    "rating": 60
  };

  const hyperbolic = {
    "word": "hyperbolic",
    "comment": "How come teethpaste isn't in the dictionary?",
    "date": "22 Aug 2019 01:20:00 PST",
    "rating": 100
  };

  describe("Format feedback on one line", () => {
    it("should format the feedback to one line", () => {
      const { word, comment, date, rating } = swashbuckler;
      const App = new FeedbackApp({ word, comment, date, rating });

      assert.equal(
        App.formatFeedback(),
        "swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)"
      );
    });
  });

  describe("Remove date if over 80 characters", () => {
    it("should remove date if over 80 lines", () => {
      const { word, comment, date, rating } = slubber;
      const App = new FeedbackApp({ word, comment, date, rating });

      assert.equal(
        App.formatFeedback(),
        "slubber: Slubber sounds like slobber. So gross! More pretty words, please! ★½"
      );
    });
  });

  describe("Remove date and truncate if still over 80 characters", () => {
    it("should remove date and truncate comment if still over 80 characters", () => {
      const { word, comment, date, rating } = textlationship;
      const App = new FeedbackApp({ word, comment, date, rating });

      assert.equal(
        App.formatFeedback(),
        "textlationship: I'm in a textlationship with my friend! We text all the... ★★★"
      );
    });
  });

  describe("Check for five star word", () => {
    it("should render 5 stars", () => {
      const { rating } = hyperbolic;
      const App = new FeedbackApp({ rating });

      assert.equal(
        App.starRating(rating),
        "★★★★★"
      );
    });
  });
}); 
