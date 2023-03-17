const mongoose = require('mongoose');
const schema = mongoose.Schema;

const board = new schema({
    Name: {
        required: true,
        type: String
    },

    createdAt: {
        required: true,
        type: Date,
        default:Date.now()
    },

    updatedAt: {
        required: true,
        type: Date,
        default:Date.now()
    },

    employeeList:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `User`,

        }
    ],

    managerList:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `User`,

        }
    ],

    image: {
        required: true,
        type: String,
    },

    tasks:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `Project`,
        }
    ],
    members:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `user`,
        }
    ]

})

module.exports = mongoose.model('board', board);