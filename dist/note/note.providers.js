"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteProviders = void 0;
const note_schema_1 = require("./schemas/note.schema");
exports.noteProviders = [
    {
        provide: 'NOTE_MODEL',
        useFactory: (connection) => connection.model('Notes', note_schema_1.NoteSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=note.providers.js.map