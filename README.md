# NewTS Server

## Start application
```
npm install
node index.js
```


## Migrations
- Create migration `node node_modules\db-migrate\bin\db-migrate create migration_name --sql-file`
- Run migrations: `node node_modules\db-migrate\bin\db-migrate up`
- Undo migration: `node node_modules\db-migrate\bin\db-migrate down`