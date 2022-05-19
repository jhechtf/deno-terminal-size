# Deno Terminal Size

Get the size of the terminal in Deno. Useful for CLI apps written for the Deno
runtime.

## Usage

Include the library, and utilize either the `getHeight`, `getWidth` or `getSize`
function to determine the size of the terminal.

```ts
import {
  getHeight,
  getSize,
  getWidth,
} from 'https://deno.land/x/terminal_size/mod.ts';

const size = getSize();
const height = getHeight();
const width = getWidth();
```

## Sponsorship

Brought to you by Shenanigans.
