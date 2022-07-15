const { Post } = require('../models');

const postdata = [
  {
    title: 'Tesla Announces Full Self Driving Available Nationwide By Christmas',
    text: 'For real this time!',
    user_id: 8
  },
  {
    title: "Tony Stark Dethrones Jeff Bezos As World's Sexiest Billionaire",
    text: 'Nobody is really sure how the wannabe Bond villain ever held the title to begin with. Per an unidentified source on the Amazon board of directors (one that definitely didnt get paid off by another billionaire), Stark is "At least 17x sexier than and 4x more buzzed than the next guy on the list"',
    user_id: 4
  },
  {
    title: 'GLOBAL WARMING IS FAKE!!!',
    text: 'Storm is just being petulant because nobody wants to invest in her wind farm startup. How the hell does me driving a JEEP and using fossil fuels to forge weapons all day make the earth hot?! IT JUST SNOWED YESTERDAY! WAKE UP SHEEPLE!',
    user_id: 6
  },
  {
    title: 'What Are Your Thoughts On Security?',
    text: 'Any kind of security! What kind of security do you use? Where do you hide your keys? Any luck finding a reliable staffing service for competent henchmen?',
    user_id: 10
  },
  {
    title: 'Musk Pays $1B To Back Out of Twitter Purchase',
    text: 'He otherwise would have had to purchase his favorite social media app for $44B. I heard a rumor that the board is now evaluating a new offer from Tony Stark. Terms undisclosed!',
    user_id: 7
  },
  {
    title: 'Twitter Stock Reaches New All-Time High',
    text: 'Share price up 300%+ overnight on the heels of record earnings report. $154 and still climbing!',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;