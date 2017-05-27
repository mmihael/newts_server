# Setup

- Install node, npm and mysql
- Clone repository and change working directory to root of repo
- run `npm install` to install dependencies
- Copy example.database.json and rename it to database.json
- Copy example.tsrc and rename it to .tsrc
- Modify database.json and .tsrc as needed
- Create mysql database named same as main.database inside database.json ('newts' is default db name)
- run `node node_modules\db-migrate\bin\db-migrate up` from root of project to create tables
- now run `node index.js` this will start app server
- check http://localhost:3001/ it should serve example html page from /public dir
