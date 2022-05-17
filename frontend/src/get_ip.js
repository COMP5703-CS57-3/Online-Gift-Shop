const fs = require('fs');

function get_ip() {
    try {

        const data = fs.readFileSync('./node_modules/ip', 'utf8');

        // parse JSON string to JSON object
        const config = JSON.parse(data);

        console.log("name", config.ip)
        return config.ip

    } catch (err) {

        console.log(`Error reading file from disk: ${err}`);
        return '127.0.0.1'
    }
}

export default get_ip();
