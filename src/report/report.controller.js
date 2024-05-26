const StudentModel = require("../student/student.model")
const GroupModel = require("../group/group.model")

const byGroupStudent = async (req, res) =>{
    try{          
    let result = await StudentModel.aggregate([
        {
            $group: { _id: "$group", count: { $sum: 1 } }
        },
    ])    
    await GroupModel.populate(result , {
    path: "_id",
        select: "name"
    })



        return res.status(201).json(result)
    } catch(err){
        console.log(err)
        return res.status(400).json(err)
    }
}

const byGroupPrice = async (req, res) =>{
    try{        
        const {month} = req.query  
    let result = await StudentModel.aggregate([
        { $unwind: { path: "$payments" } },
        {
            $match: {
                'payments.date' : month
            }
        },
        {
            $group: { _id: "$group", price: { $sum: "$payments.price" } }
        }
    ])    
    await GroupModel.populate(result , {
    path: "_id",
        select: "name"
    })
    for(let i of result){
        i['name'] = i._id.name
        delete i._id
    }

    return res.status(201).json(result)
    } catch(err){
    return res.status(400).json(err)
    }
}


module.exports = {
    byGroupStudent,
    byGroupPrice
}