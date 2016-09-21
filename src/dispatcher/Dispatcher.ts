/// <reference path="../reference.d.ts" />
import flux = require('flux');
import Action = require('../actions/base/Action');

/**
 * The provided Flux Dispatcher is used 'as is' except that
 * it expects actions extending the Action class
*/ 
class Dispatcher extends flux.Dispatcher<Action> {}

//Export the singleton dispatcher
module.exports = new Dispatcher();


