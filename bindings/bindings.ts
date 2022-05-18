// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from 'https://deno.land/x/plug@0.5.1/plug.ts';
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== 'string') return v;
  return new TextEncoder().encode(v);
}
function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v);
}
function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as Deno.UnsafePointer);
  const lengthBe = new Uint8Array(4);
  const view = new DataView(lengthBe.buffer);
  ptr.copyInto(lengthBe, 0);
  const buf = new Uint8Array(view.getUint32(0));
  ptr.copyInto(buf, 4);
  return buf;
}
const opts = {
  name: 'terminal',
  url: (new URL('../target/release', import.meta.url)).toString(),
  policy: undefined,
};
const _lib = await prepare(opts, {
  getHeight: { parameters: [], result: 'u16', nonblocking: false },
  getSize: { parameters: [], result: 'pointer', nonblocking: false },
  getWidth: { parameters: [], result: 'u16', nonblocking: false },
});
export type TerminalSize = {
  rows: number;
  cols: number;
};
export function getHeight() {
  let rawResult = _lib.symbols.getHeight();
  const result = rawResult;
  return result;
}
export function getSize() {
  let rawResult = _lib.symbols.getSize();
  const result = readPointer(rawResult);
  return JSON.parse(decode(result)) as TerminalSize;
}
export function getWidth() {
  let rawResult = _lib.symbols.getWidth();
  const result = rawResult;
  return result;
}
