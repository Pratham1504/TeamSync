const mongoose = require('mongoose');
const schema = mongoose.Schema;

const project = new schema({
    name: {
        required: true,
        type: String
    },

    description:{
        required :true,
        type:string
    },

    createdAt: {
        required: true,
        type: Date,
        default:Date.now()
    },

    createdBy:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, ref: `user`
    },

    updatedAt: {
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
    ],

    orgId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId, ref: `organisation`,
    }

})

module.exports = mongoose.model('project', project);