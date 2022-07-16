const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'hfarnsworth',
    email: 'professor@planetexpress.com',
    password: 'password123'
  },
  {
    id: 2,
    username: 'terminatorexterminator',
    email: 'jconnor@aol.com',
    password: 'password123'
  },
  {
    id: 3,
    username: 'thechosen1',
    email: 'neo@nebuchadnezzar.net',
    password: 'password123'
  },
  {
    id: 4,
    username: 'I AM IRON MAN',
    email: 'tony@starkindustries.com',
    password: 'password123'
  },
  {
    id: 5,
    username: 'weaponmaster',
    email: 'forge@xavierinstitute.edu',
    password: 'password123'
  },
  {
    id: 6,
    username: 'therealstarlord',
    email: 'peterquill@yahoo.com',
    password: 'password123'
  },
  {
    id: 7,
    username: 'pleasereadthemanual',
    email: 'Q@sis.gov.uk',
    password: 'password123'
  },
  {
    id: 8,
    username: 'tsla2themoon',
    email: 'emusk@tesla.com',
    password: 'password123'
  },
  {
    id: 9,
    username: 'mustlovebats',
    email: 'bruce@wayneindustries.com',
    password: 'password123'
  },
  {
    id: 10,
    username: 'hscorpio',
    email: 'hank@globexcorp.com',
    password: 'password123'
  }
];

// If you are reading this, I appreciate you!

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;