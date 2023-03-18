const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date,
        default:Date.now()
    },
    image: {
        required: true,
        type: String
    },
    verified: {
        required: true,
        type: Boolean,
        default:false
    },
    updatedAt: {
        type: Date,
    },
    orgs:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `organisation`,
        }
    ],
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `task`,
        }
    ],
    projects:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `project`,
        }
    ],
    sentInvites:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `userInvite`,
        }
    ],

    image: {
        required: true,
        type: String,
    },

    invites:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `userInvite`,
        }
    ]

})

module.exports = mongoose.model('user', user);