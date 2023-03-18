const mongoose = require('mongoose');
const schema = mongoose.Schema;

const organisation = new schema({
    name: {
        required: true,
        type: String
    },

    createdAt: {
        required: true,
        type: Date
    },

    don:{
                required:true,
                type:String,
    },
    employeeList:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `User`,

        }
    ],

    image: {
        required: true,
        type: String,
    },

    projects:[
        {
            required: true,
            type: mongoose.Schema.Types.ObjectId, ref: `Project`,
        }
    ],
    membersInvited:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `Invites`,
        }
    ]

})

module.exports = mongoose.model('organisation', organisation);