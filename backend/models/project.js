const mongoose = require('mongoose');
const schema = mongoose.Schema;

const project = new schema({
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
    
    boards:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `board`,
        }
    ],

    members:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `user`,
        }
    ]

})

module.exports = mongoose.model('project', project);