const Board = require('../models/board')
const mongoose = require('mongoose')

// Get all boards 
const getBoards = async (req,res) =>{

    const board = await Board.find()
    res.status(200).json(board)
}

// Get a single Board
const getBoard = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such Board'})
    }
    const board = await Board.findById(id)
    if(!board){
        return res.status(404).json({error : 'No Such Board'})
    }
    res.status(200).json(board)
}

// Create new Board
const createBoard = async (req,res) => {
    if(req.body.length > 0){
        return res.status(400).json({error: ' Please Fill in all the Fields',emptyFields})
    }
    // add doc to db
    try{
        const board = await Board.create(req.body)
        res.status(200).json(board)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// delete a Board 
const deleteBoard = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such Board'})
    }
    const board = await Board.findOneAndDelete({_id:id})
    if(!board){
        return res.status(404).json({error : 'No Such Board'})
    }
    res.status(200).json({mssg:"Board deleted successfully"})
}

// update a Board
const updateBoard = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such Board'})
    }
    const board = await Board.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!board){
        return res.status(404).json({error : 'No Such Board'})
    }
    res.status(200).json(Board)
}


module.exports = {
    getBoard,
    getBoards,
    createBoard,
    deleteBoard,
    updateBoard
}