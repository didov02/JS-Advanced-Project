const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '3306',
    user: 'root',
    password: '15948264815926q6',
    database: 'mysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();