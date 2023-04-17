class FeedbackApp {
  constructor({ word, comment, date, rating }) {
    this.word = word;
    this.comment = comment;
    this.date = new Date(date);
    this.rating = rating;
    this.maxLength = 80;
  }

  getDate = () => `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()}`;

  starRating = () => {
    let rating = this.rating;
    let visualRating = '';

    while (rating >= 20) {
      visualRating += '★';
      rating -= 20;
    }

    if (rating > 0) visualRating += '½';

    return visualRating;
  };

  truncateComment = (max) => {
    let truncatedComment = '';
    let commentLength = 0;
    let i = 0;
    const commentWords = this.comment.split(' ');

    while (i < commentWords.length - 1 && truncatedComment.length < max) {
      if (truncatedComment.length + commentWords[i].length < max) {
        truncatedComment = truncatedComment.length
          ? `${truncatedComment} ${commentWords[i]}`
          : commentWords[i]
      } else {
        truncatedComment = `${truncatedComment}...`;
        break;
      }
      i++;
    }

    return truncatedComment;
  }

  formatFeedback = () => {
    const wordLength = this.word.length;
    const commentLength = this.comment.length;
    const ratingLength = this.starRating(this.rating).length;
    const dateLength = this.getDate().length;

    if ((wordLength + commentLength + ratingLength + dateLength + 6) < this.maxLength) {
      return `${this.word}: ${this.comment} ${this.starRating(this.rating)} (${this.getDate(this.date)})`;
    }

    return (wordLength + commentLength + ratingLength) > this.maxLength
      ? `${this.word}: ${this.truncateComment(this.maxLength - wordLength - ratingLength - 3)} ${this.starRating(this.rating)}`
      : `${this.word}: ${this.comment} ${this.starRating(this.rating)}`;
  }
};

module.exports = FeedbackApp;
