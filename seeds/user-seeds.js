const sequelize = require('../config/connection');
// const { User, Post } = require('../models');

const userdata = [
  {
    username: 'hfarnsworth',
    email: 'professor@planetexpress.com',
    password: 'password123'
  },
  {
    username: 'terminatorexterminator',
    email: 'jconnor@aol.com',
    password: 'password123'
  },
  {
    username: 'thechosen1',
    email: 'neo@nebuchadnezzar.net',
    password: 'password123'
  },
  {
    username: 'nothappyhogan',
    email: 'tony@starkindustries.com',
    password: 'password123'
  },
  {
    username: 'weaponmaster',
    email: 'forge@xavierinstitute.edu',
    password: 'password123'
  },
  {
    username: 'therealstarlord',
    email: 'peterquill@yahoo.com',
    password: 'password123'
  },
  {
    username: 'pleasereadthemanual',
    email: 'Q@sis.gov.uk',
    password: 'password123'
  },
  {
    username: 'tsla2themoon',
    email: 'emusk@tesla.com',
    password: 'password123'
  },
  {
    username: 'mustlovebats',
    email: 'bruce@wayneindustries.com',
    password: 'password123'
  },
  {
    username: 'hscorpio',
    email: 'hank@globexcorp.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;