import { createPool } from "mysql2/promise";

export const pool = createPool({
    host:'172.17.0.2',
    user: 'root',
    password: 'password#0000',
    port: 3306,
    database:'registros_de_gastos'
});

