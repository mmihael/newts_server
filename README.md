# NewTS Server

## Setup
- in root directory create database.json file (copy and edit example.database.json)
- database.json is used for migrations and mysql connection
- create .tsrc file (copy and edit example.tsrc file) which will be used to pass app config

## Start application
```
npm install
node index.js
```

## Migrations
Migrations and all sql modifications should be run by db-migrate node module
- Create migration `node node_modules\db-migrate\bin\db-migrate create migration_name --sql-file`
  - Now edit files for up and down in /migrations/sqls
  - DO NOT modify files inside /migrations directory
- Run migrations: `node node_modules\db-migrate\bin\db-migrate up`
- Undo migration: `node node_modules\db-migrate\bin\db-migrate down`