function parseURL() {
    const inputUrl = document.getElementById('object-parse-input').value;
    const result = inputUrl.match(/((^\w{2,5}:)\/{2}(([А-Яа-я\w-\.]+):?([0-9]{0,5})))(\/?[А-Яа-я\w-\.\/]+)/);
    const host = result[3];
    const hostname = result[4];
    const href = inputUrl;
    const origin = result[1];
    const pathname = result[6];
    const port = result[5];
    const protocol = result[2];
    document.getElementById('object-parse-result').innerHTML = `<div>host: ${host}<\div>
                                                                <div>hostname: ${hostname}<\div>
                                                                <div>href: ${href}<\div>
                                                                <div>origin: ${origin}<\div>
                                                                <div>pathname: ${pathname}<\div>
                                                                <div>port: ${port}<\div>
                                                                <div>protocol: ${protocol}<\div>`;
    console.log("logging");
}