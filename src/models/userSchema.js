// const { Schema, model } = require('mongoose')
import {Schema,model,SchemaTypes} from 'mongoose'
const objId = SchemaTypes.ObjectId

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        avatar: { type: Number, required: true },
        card_id: { type: String, required: true },
        password: { type: String, required: true },
        commerce: { type: Boolean, required: true,default:false },
        commerce_id: { type: [objId], required: true, ref: 'Commerce',default:'_' },
    },
    {
        timestamps: true,
    }
);

UserSchema.methods.changeName = function () {
    // console.log(`Testing name here ${this.name}`)
    return this.name = 'Testing here'
}
UserSchema.methods.presignedProfile = async function () {
    return this
}

export default model('User', UserSchema)

