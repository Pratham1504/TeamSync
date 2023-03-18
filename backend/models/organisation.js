const mongoose = require('mongoose');
const schema = mongoose.Schema;

const organisation = new schema({
    name: {
        required: true,
        type: String
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
                required:true,
                type:String,
    },

    members:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `user`,
        }
    ],

    image: {
        required: true,
        type: String,
    },

    projects:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `project`,
        }
    ],

    membersInvited:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `userInvite`,
        }
    ]

})

module.exports = mongoose.model('organisation', organisation);