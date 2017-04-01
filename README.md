# NewTS Server

## Setup
- in root directory create database.json file (copy and edit example.database.json)
- database.json is used for migrations and server mysql connection

## Start application
```
npm install
node index.js
```


## Migrations
- Create migration `node node_modules\db-migrate\bin\db-migrate create migration_name --sql-file`
- Run migrations: `node node_modules\db-migrate\bin\db-migrate up`
- Undo migration: `node node_modules\db-migrate\bin\db-migrate down`