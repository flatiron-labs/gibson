var production = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    schema: false,
    url: process.env.MONGOHQ_URL
  }
};

var staging = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    schema: false,
    url: process.env.MONGOHQ_URL
  }
};

var development = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    schema: false,
    url: 'mongodb://localhost:27017/gibson'
  },

  disk: {
    module: 'sails-disk'
  }
};

var env = process.env.NODE_ENV;
if (env === 'production') {
  module.exports.adapter = production;
} else if (env === 'staging') {
  module.exports.adapter = staging;
} else {
  module.exports.adapter = development;
}
