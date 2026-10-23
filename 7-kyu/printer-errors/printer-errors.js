function printerError(s) {
    const errors = [...s].filter(letter => letter < 'a' || letter > 'm').length;
    return `${errors}/${s.length}`;
}