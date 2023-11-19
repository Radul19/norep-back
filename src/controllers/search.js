import User from "../models/userSchema"
import { deleteImage, deleteImages, uploadImage, uploadImages } from "../helpers/uploadImages";


export const test = (req, res) => {


    console.log('#test')
    res.send('WORKING')
}


// export const namehere = async (req,res)=>{
//     console.log('#namehere')
//     res.send('ok')
// }