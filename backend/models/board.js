const mongoose = require('mongoose');
const schema = mongoose.Schema;

const board = new schema({
    name: {
        required: true,
        type: String
    },

    description:{
        required :true,
        type:String
    },

    createdAt: {
        required: true,
        type: Date,
        default:Date.now()
    },

    updatedAt: {
        type: Date,
        default:Date.now()
    },

    createdBy:{
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `User`
    },

    managerList:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `User`

        }
    ],

    tasks:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `task`,
        }
    ],

    projectId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId, ref: `project`,
    }
   

})

module.exports = mongoose.model('board', board);