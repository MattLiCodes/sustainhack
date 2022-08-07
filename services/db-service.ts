import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from "react-native-sqlite-storage";
import { TaskItem } from "../models";

const tableName = "taskData";

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: "task-data.db", location: "default" });
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
          value TEXT NOT NULL
      );`;

  await db.executeSql(query);
};

export const getTaskItems = async (db: SQLiteDatabase): Promise<TaskItem[]> => {
  try {
    const taskItems: TaskItem[] = [];
    const results = await db.executeSql(
      `SELECT rowid as id,value FROM ${tableName}`
    );
    results.forEach((result) => {
      for (let index = 0; index < result.rows.length; index++) {
        taskItems.push(result.rows.item(index));
      }
    });
    return taskItems;
  } catch (error) {
    console.error(error);
    throw Error("Failed to get taskItems !!!");
  }
};

export const saveTaskItems = async (
  db: SQLiteDatabase,
  taskItems: TaskItem[]
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
    taskItems.map((i) => `${i.title}`);

  return db.executeSql(insertQuery);
};

export const deleteTaskItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const clearTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
