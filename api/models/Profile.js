/**
 * Profile
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	/* e.g.
  	nickname: 'string'
  	*/
   firstName: 'string',
   lastName: 'string',
   sex: 'string',
   dateOfBirth: 'datetime',
   phone: 'string',
   streetAddress: 'string',
   optionalStreetAddress: 'string',
   city: 'string',
   state: 'string',
   zipCode: 'string',
   country: 'string',
   linkedin: 'string',
   twitter: 'string',
   github: 'string',
   stackoverflow: 'string',
   codernall: 'string',
   hackernews: 'string',
   treehouseProfile: 'string',
   treehouseEmail: 'string',
   codeschoolProfile: 'string',
   codeschoolEmail: 'string',
   tshirtSize: 'string',
   hoodieSize: 'string',
   healthClub: 'string',
   anythingElse: 'text',
   registrarUserId: 'integer',
   email: 'string',
   biography: 'text'
  }

};
