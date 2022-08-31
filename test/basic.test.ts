import { assert, expect, test } from 'vitest';
import { MikroORM } from '@mikro-orm/core';

console.log(process.cwd() + '/user.ts');

test('1', async () => {
  const orm = await MikroORM.init({
    type: 'better-sqlite',
    dbName: ':memory:',
    entities: [process.cwd() + '/user.ts'],
  });
  console.log(orm);
});

test('2', async () => {
  const ret = await import(process.cwd() + '/user.ts');
  console.log(ret.User);
});
