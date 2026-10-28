import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const progress = sqliteTable('progress', { id:text('id').primaryKey(), done:integer('done').notNull().default(0), note:text('note').notNull().default('') });
