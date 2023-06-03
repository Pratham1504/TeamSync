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
        type:mongoose.Schema.Types.ObjectId, ref: `user`
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
            // type:mongoose.Schema.Types.ObjectId, ref: `organisation`,
            name:{required: true,type:String},
            description:{required: true,type:String},
            _id:{required: true,type: mongoose.Schema.Types.ObjectId, ref:`project`},
            createdAt:{required:true , type:String}
        }
    ],

    membersInvited:[
        {
            type:mongoose.Schema.Types.ObjectId, ref: `userInvite`,
        }
    ]

})

module.exports = mongoose.model('organisation', organisation);