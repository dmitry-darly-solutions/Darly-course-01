function parseURL() {
    const inputUrl = document.getElementById('object-parse-input').value;
    const result = inputUrl.match(/((^\w{2,5}:)\/{2}(([А-Яа-я\w-\.]+):?([0-9]{0,5})))(\/?[А-Яа-я\w-\.\/]+)/);
    const host = `<div>host: ${result[3]}<\div>`;
    const hostname = `<div>hostname: ${result[4]}<\div>`;
    const href = `<div>href: ${result[0]}<\div>`;
    const origin = `<div>origin: ${result[1]}<\div>`;
    const pathname = `<div>pathname: ${result[6]}<\div>`;
    const port = `<div>port: ${result[5]}<\div>`;
    const protocol = `<div>protocol: ${result[2]}<\div>`;
    document.getElementById('object-parse-result').innerHTML = `${host}${hostname}${href}${origin}
    ${pathname}${port}${protocol}`;
}