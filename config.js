"use strict";
module.exports = {
    db: {
        type: 'mongodb',
        connectUri: 'mongodb://nuoiday:12347890@localhost/nuoiday',
        dbOptions: {
            poolSize: 10
        }
    },
    preload: {
        port: 3000,
        theme: 'default'
    }
};
