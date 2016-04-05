'use strict';

var root = '/<page></page>';

module.exports = {

  /*
  Create plan
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['name', 'description', 'amount']
    },

  /*
  Get plan
  */
  get: {
      method: 'get',
      endpoint: [root, '/{id}'].join(''),
      args: ['id']
  },

  /*
  List plan
  */
  list: {
      method: 'get',
      endpoint: root
    },

  /*
  Update plan
  */
  update: {
      method: 'put',
      endpoint: [root, '/{id}'].join(''),
      params: ['name', 'description', 'amount', 'active'],
      args: ['id']
    }
};
