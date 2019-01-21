const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://cymyvlgwxhslqc:6bd1917d4cedd88937be3812f3495ee452aaafe7a3f6dfa77c9cd1c98b4ae7b7@ec2-107-22-162-8.compute-1.amazonaws.com:5432/d5d5rmet15kpv0',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://cymyvlgwxhslqc:6bd1917d4cedd88937be3812f3495ee452aaafe7a3f6dfa77c9cd1c98b4ae7b7@ec2-107-22-162-8.compute-1.amazonaws.com:5432/d5d5rmet15kpv0',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
