const costModel = require("./cost.model")

const addCost = async (req, res) =>{
    try{      
        const doc = await costModel.create(req.body)
        return res.status(201).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getCosts = async (req, res) =>{
    try{
        const docs = await costModel.find({})
        return res.status(200).json(docs)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getCost = async (req, res) =>{
    try{
        const doc = await costModel.findById(req.params.id)
        if(!doc){
            return res.status(400).send("Cost not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const editCost = async (req, res) =>{
    try{
        const doc = await costModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const deleteCost = async (req, res) =>{
    try{
        const doc = await costModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

module.exports = {
    addCost,
    getCosts,
    getCost,
    editCost,
    deleteCost
}