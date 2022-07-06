// const { Post } = require('../models');

const postdata = [
  {
    title: 'Tesla Announces Full Self Driving Available Nationwide By Christmas',
    body: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 8
  },
  {
    title: "Tony Stark Dethrones Jeff Bezos As World's Sexiest Billionaire",
    body: 'https://nasa.gov/donec.json',
    user_id: 4
  },
  {
    title: 'GLOBAL WARMING IS FAKE!!!',
    body: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 6
  },
  {
    title: 'What Are Your Thoughts On Security?',
    body: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 10
  },
  {
    title: 'Musk Pays $1B To Back Out of Twitter Purchase',
    body: 'He otherwise would have had to purchase his favorite social media app for $40B. I heard a rumor that the board is now evaluating a new offer from Tony Stark. Terms undisclosed!',
    user_id: 7
  },
  {
    title: 'Twitter Stock Reaches New All-Time High',
    body: 'Share price up 300%+ overnight on the heels of record earnings report. $154 and still climbing!',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;