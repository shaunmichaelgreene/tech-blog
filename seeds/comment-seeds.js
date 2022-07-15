const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'YE$$$!!! TO THE MOOOOOOON!',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text: 'Wait wasnt this first announced with an ETA of like, 5 years ago? ',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'SHUT UP, BOT',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text: 'THIS CANNOT BE ALLOWED TO HAPPEN! This is the first step of skynets plan. Why wont any of you listen to me?! SHUT IT DOWN',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Relax dude, its never gonna happen anyway. https://www.consumerreports.org/autonomous-driving/timeline-of-tesla-self-driving-aspirations-a9686689375/',
    user_id: 7,
    post_id: 1
  },
  {
    comment_text: 'Does it come in black?',
    user_id: 9,
    post_id: 1
  },
  {
    comment_text: 'lol good one, brucie',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text: 'You have my word that FSD will be available by 2024!',
    user_id: 8,
    post_id: 1
  },
  {
    comment_text: 'bro... wtf',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Supervillains get no respect. IM A BILLIONAIRE TOO, DAMMIT!',
    user_id: 10,
    post_id: 2
  },
  {
    comment_text: '^ FACTS',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'I dont want to live on this planet anymore...',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Wow, this is news to me! Thank you to whoever posted this.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text:
      'Please ignore the troll',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'It. Doesnt. Matter. The machines will wipe us out long before global warming does. TRUST ME!',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Did you say... machines?',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: "Good news everyone! I'll send my crew to go get another ice cube.",
    user_id: 1,
    post_id: 3
  },
  {
    comment_text:
      'I see a suit of armor around the world.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'There is no security that can stop me.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'THIS IS HOW IT STARTS. DO NOT LET THE MACHINES GET ONLINE.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text:
      'whatever you have in mind, I can probably hack it',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'you can never have enough. i am the knight. i mean night. ignore that.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'good lord bruce, you are old',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'wow this isnt helpful at all',
    user_id: 10,
    post_id: 4
  },
  {
    comment_text: 'Dodged a major bullet. This company isnt worth even $10B after all of the bot accounts!',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: "We'll see about that.",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "I'm selling all of my dogecoin to buy TWTR",
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: "Wanna be on the board?",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "Can we sit in hammocks instead of chairs?",
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: "That's obviously the first order of business",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "Can I come too?",
    user_id: 9,
    post_id: 5
  },
  {
    comment_text: "No. You spy too much and have no respect for privacy. Go brood alone on a gargoyle head somewhere.",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "holy sh*t you actually bought it",
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: "Wish I had $39M just lying around...",
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: "Hey @Neo, I gave Jarvis the day off. What do you know about getting rid of bots?",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "I know kung fu.",
    user_id: 3,
    post_id: 5
  },
  {
    comment_text: "Sold! This I've gotta see. Anyone else want a board seat?",
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: "Whatever. I don't care. Waste of money anyways. I look forward to buying it for pennies on the dollar when it tanks in a year!",
    user_id: 8,
    post_id: 5
  },
  {
    comment_text:
      'HAHAHAHAHAHAHAHAHAHA',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      '<THIS MESSAGE HAS BEEN REMOVED BY THE MODERATOR FOR A TERMS OF USE VIOLATION: EXCESSIVE PROFANITY>',
    user_id: 8,
    post_id: 6
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;