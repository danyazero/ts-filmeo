import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export async function openDb () {
    return open({
        filename: './database.db',
        driver: sqlite3.Database
    })
}

export const crossHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3000/, http://192.168.0.229:3000/',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}