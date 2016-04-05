'use strict';

var root = '/subscription';

module.exports = {

  /*
  Create Sbscription
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['customer', 'plan']
    },
 /*
  Enable Subscription
  */
  enable: {
      method: 'post',
      endpoint: root,
      params: ['code', 'token']
    },
 /*
  Disable Subscription
  */
  disable: {
      method: 'post',
      endpoint: root,
      params: ['code', 'token']
    },

  /*
  Get plan
  */
  get: {
      method: 'get',
      endpoint: [root, '/{id}'].join(''),
      args: ['id']
  }

 };
