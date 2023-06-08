const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../views/firstPage.ejs');
const filePathToSecondPage = path.join(__dirname, '../views/secondPage.ejs');
let firstPage;
let secondPage;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return;
    }
  
    firstPage = data;
  });
  
fs.readFile(filePathToSecondPage, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return;
    }
  
    secondPage = data;
  });


// SWAGGER SPECIFICATIONS using openapi

const swaggerDoc = {

    openapi: "3.0.0",

    info: {
        title: "Zigy Task 1",
        version: "1.0.0",
        description: "Documentation for the routes implemented in this Zigy Task"
    },

    servers: [
        {
            url: `http://localhost:${process.env.port || 3000}`,
            description: "Local Development Setup"
        }
    ],

    tags : [
        {
            name : "App Routes",
            description: "Basic General Routes"

        }
    ],

    paths: {
        "/" : {
            get : {
                tags : ["App Routes"],
                description: "Gets the home page",
                responses: {
                    304:{
                        description: 'Redirected to home page',
                        content: {
                           "text/html" : {
                            schema: {
                                type: 'string',
                                example: firstPage
                            }
                           }
                        }
                    }
                }
            }
        },
        "/1" : {
            get : {
                tags : ["App Routes"],
                description: "Gets the home page",
                responses: {
                    200:{
                        description: 'OK',
                        content: {
                           "text/html" : {
                            schema: {
                                type: 'string',
                                example: firstPage
                            }
                           }
                        }
                    }
                }
            }
        },
        "/2" : {
            get : {
                tags : ["App Routes"],
                description: "Gets the second page",
                responses: {
                    200:{
                        description: 'OK',
                        content: {
                           "text/html" : {
                            schema: {
                                type: 'string',
                                example: secondPage
                            }
                           }
                        }
                    }
                }
            }
        },
    }
}


module.exports = swaggerDoc