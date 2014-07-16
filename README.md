# Gibson
## Overview

Gibson is a data broker service built on node.js with the [Sails.js](http://sailsjs.org) framework.

The database back-end is MongoDB

The purpose of the service is to provide an API for sharing common data
among the suite of Flatiron Labs applications and aggregate data in a
way that can be used to create advanced monitoring and buisiness
intelligence tools.

## Setup

1. Install node.js (`brew install node` is the preferred method)
2. Install [Sails.js](http://sailsjs.org) with NPM
3. Install MongoDB (`brew install mongodb` is the preferred method)
4. Clone the repository
5. Make sure MongoDB is running on the default port, or alternatively,
   set a URL to access a Mongo instance in a `MONGOHQ_URL` environment
variable.
6. type `sails lift` at the root of the repo, the server should start
7. navigate to http://localhost:1337 to see the site run.

## API

### API Overview

Sails supports a RESTful JSON API similar to Rails, with a couple of key
differences.

The routes are not pluralized, so where in a rails app you might
navigate to `/profiles` to view all profiles, in a sails app you
navigate to `/profile`

The common routes for any `blueprint` (rough equivalent of a rails
`scaffold`) are:

* `/resource` - view all of that resource (`index`)
* `/resource/:id` - show
* `/resource/update/:id` - update
* `/resource/destroy/:id` - destroy
* `/resource` (post) create

#### Schemaless Data Structure, Decoupled Development

Because the database is schemaless, Gibson will adapt to changing data
fields from Labs applications automatically. 

For example, in the case of profile data, it will accept any fields
given to it, meaning adding a new profile field to //Registrar does not
require changing any Gibson code to to support it. You would only need
to add support for that field into the //Registrar code that pushes
profiles to the Gibson.

Similarly, any apps consuming profile data can control in a fine-grained
way what they accept or care about.

The decoupled nature allows for true separate development tracks across
all applications, i.e. a change to profiles in //Registrar doesn't
immediately necessitate developer resources to provide parity elsewhere.

### Profiles API

Gibson has support for storing and retrieving profile data. 

* `GET gibsonURL/profile` to see all profiles
* `GET gibsonURL/profile/:id` to see a profile by ID (mongo id)
* `GET gibsonURL/profile/email/:email_address` to find a profile by
  email address
* `POST gibsonURL/profile` to create a new profile
