const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, 
    editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    // Create
    {
        method : 'POST',
        path : '/notes',
        handler : addNoteHandler,
        options:{
            cors:{
                origin: ["*"],
            }
        }

    },
    // Read
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },

    {
        method: 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    // Update
    {
        method: 'PUT',
        path : '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    // Delete
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler :deleteNoteByIdHandler,
    }
];

module.exports = routes;