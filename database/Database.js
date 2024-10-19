// Database.js
import * as SQLite from 'expo-sqlite/legacy';
import uuid from 'react-native-uuid';

const db = SQLite.openDatabase('fancy.db');

const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS fancy (
                id TEXT PRIMARY KEY NOT NULL, 
                text TEXT NOT NULL, 
                category TEXT NOT NULL DEFAULT "", 
                completed BOOLEAN
            );`
        );
    });
};

const addTodo = (text, category) => {
    return new Promise((resolve, reject) => {
        const id = uuid.v4();
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO fancy (id, text, category, completed) VALUES (?, ?, ?, ?)',
                [id, text, category, false],
                (_, result) => resolve({ id, text, category, completed: false }),
                (_, error) => reject(error)
            );
        });
    });
};

const fetchTodos = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM fancy;',
                [],
                (_, { rows: { _array } }) => resolve(_array),
                (_, error) => reject(error)
            );
        });
    });
};

const removeTodo = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM fancy WHERE id = ?;',
                [id],
                () => resolve(),
                (_, error) => reject(error)
            );
        });
    });
};

const toggleTodo = (id, completed) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE fancy SET completed = ? WHERE id = ?;',
                [completed, id],
                () => resolve(),
                (_, error) => reject(error)
            );
        });
    });
};

const initializeDatabase = () => {
    createTable();
};

export { initializeDatabase, fetchTodos, addTodo, removeTodo, toggleTodo };
