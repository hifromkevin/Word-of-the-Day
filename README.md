# Word-of-the-Day
Building a Word of the Day feature that truncates comments, using good OOP Principles.

## The Format
- The word, followed by a colon
- The comment
- The rating, converted from an integer into a star rating string, from 0-5 stars including half stars.
- The date, formatted as (month/day/year)
- If the formatted feedback is over 80 characters, omit the date
- If, when the date is omitted, it's still over 80 characters, truncate the comment until the whole formatted feedback is 80 characters

For example, the following JSON: 
```json
{
  "word": "swashbuckler",
  "comment": "Yar, a good word, matey! Shiver me timbers!",
  "date": "19 Sep 2019 12:12:00 GMT",
  "rating": 85
}
``` 

would be formatted like this:
```
swashbuckler: Yar, a good word, matey! Shiver me timbers! ★★★★½ (9/19/2019)
```

## To Run the App
- `npm install` to install dependencies
- `npm start` to run app
- `npm run test` to run testing

