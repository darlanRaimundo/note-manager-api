"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_schema_1 = require("./schemas/user.schema");
exports.userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('Users', user_schema_1.UsersSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=users.providers.js.map