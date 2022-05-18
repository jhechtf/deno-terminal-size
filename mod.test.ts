import { getSize, getHeight, getWidth } from './mod.ts';
import {
  assertNotEquals,
  assertEquals
} from './deps.ts';

Deno.test('Height + Width Individually', () => {
  const height = getHeight();
  const width = getWidth();
  assertNotEquals(height, 0);
  assertNotEquals(width, 0);
});

Deno.test('Check size object', () => {
  const size = getSize();
  assertEquals(size.cols, getWidth());
  assertEquals(size.rows, getHeight());
});
