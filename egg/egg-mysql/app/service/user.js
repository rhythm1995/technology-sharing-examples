const Service = require('egg').Service;

class UserService extends Service {
  async find() {
		const user = await this.app.mysql.query(`
			select * from user
		`);
		console.log(user)
    return { user };
	}
}

module.exports = UserService;