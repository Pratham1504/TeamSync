const mongoose = require('mongoose');
const schema = mongoose.Schema;
const date = new Date()
const bcrypt = require('bcrypt')
const validator = require('validator')


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
        type: String,
        default:date.toLocaleString()
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
        required: true,
        type: String,
        default:date.toLocaleString()
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
    invites:[
        {
            required:true,
            type:mongoose.Schema.Types.ObjectId, ref: `userInvite`,
        }
    ]

})

// static signup method
user.statics.signup = async function (prop){
    // console.log(prop)

    //validation
    if(!prop.email || !prop.password){
        throw Error('All feilds must be filled')
    }
    if(!validator.isEmail(prop.email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(prop.password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({email:prop.email})
    if(exists){
        throw Error('Email already exists')
    }
        const  salt = await bcrypt.genSalt(10)
        prop.password = await bcrypt.hash(prop.password,salt)
       
        const user = await this.create(prop)
        return user
}   

//static login method
user.statics.login = async function (prop) {
    validation
    if(!prop.email || !prop.password){
        throw Error('All feilds must be filled')
    }
    const user = await this.findOne({email:prop.email})
    
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(prop.password,user.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model('user', user);