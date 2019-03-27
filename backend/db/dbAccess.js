var fs = require('fs');

class DbAccess {
    write(filename, obj) {
        const objStr = JSON.stringify(obj);
        var fs = require('fs');
        fs.writeFile(filename, objStr, 'utf8', function() {return;});
    }

    read(filename, callback) {
        return fs.readFile(filename, 'utf8', callback);
    }
}

module.exports = DbAccess;