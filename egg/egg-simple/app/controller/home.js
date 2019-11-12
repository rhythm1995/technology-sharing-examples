'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
		const { ctx } = this;
		const json = [{
			userName: 'zhangsan',
			userId: 1,
			userAge: 22
		}, {
			userName: 'lisi',
			userId: 2,
			userAge: 25
		}, {
			userName: 'wangwu',
			userId: 3,
			userAge: 29
		}]
    ctx.body = json;
  }
}

module.exports = HomeController;
