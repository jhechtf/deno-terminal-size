use deno_bindgen::deno_bindgen;

#[deno_bindgen]
pub struct TerminalSize {
    rows: u16,
    cols: u16,
}

#[deno_bindgen]
pub fn getWidth() -> u16 {
    return termsize::get().map(|s| s.cols).unwrap_or(0);
}

#[deno_bindgen]
pub fn getHeight() -> u16 {
    return termsize::get().map(|s| s.rows).unwrap_or(0);
}

#[deno_bindgen]
pub fn getSize() -> TerminalSize {
    return termsize::get()
        .map(|s| TerminalSize {
            cols: s.cols,
            rows: s.rows,
        })
        .unwrap_or(TerminalSize { rows: 0, cols: 0 });
}
