const fs = require('fs');
const uuid = require("uuid/v4");
const result = {
        "defaultItem": {
            "width": "15px",
            "height": "15px",
            "backgroundColor": "#00B2A9"
    },
    "grid": [{
        "uuid": uuid(),
        "css": {},
    },{
        "uuid": uuid(),
        "css": {
        }
    },{
        "uuid": uuid(),
        "css": {},
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    },{
        "uuid": uuid(),
        "css": {}
    }]
    };
fs.appendFile('./temp/l.json', JSON.stringify(result,null, 2), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
  