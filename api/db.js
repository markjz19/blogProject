// import pgPromise from "pg-promise"
// const pgp = pgPromise();
// export const db = pgp('postgres://postgres:123456@localhost:5432/blog')

import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: '123456',
  database:"blog"
})