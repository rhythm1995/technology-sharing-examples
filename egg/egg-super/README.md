# sequelize-example

The [egg] example project that uses [egg-sequelize] plugin. It will show you how to use sequelize in egg project, use [migrations] to help you manage changes of database and use [factory-girl] to help you write test cases more maintainable.

## QuickStart

### Dependencies

- install mysql and create database

```bash
brew install mysql # macOS
brew service start mysql

mysql
  > create database `egg_sequelize`;
  > create database `egg-sequelize-example-unittest`;
```

- install dependencies

```bash
npm install
```

### Start Server and Run Test

- prepare database structure

```bash
# for develop
npm run sequelize -- db:migrate
# for unittest
NODE_ENV=test npm run sequelize -- db:migrate
```

- start project

```bash
npm run dev
```

- run test

```bash
npm test
```

[egg]: https://eggjs.org
[egg-sequelize]: https://github.com/eggjs/egg-sequelize
[sequelize]: http://docs.sequelizejs.com/
[migrations]: http://docs.sequelizejs.com/manual/tutorial/migrations.html
[factory-girl]: https://github.com/aexmachina/factory-girl
