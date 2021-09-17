"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtsecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwttutorial',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};
