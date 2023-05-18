const Project = require('../models/project')
const mongoose = require('mongoose')
const Orrg = require('../models/organisation')

// Get all projects 
const getProjects = async (req,res) =>{

    const project = await Project.find()
    res.status(200).json(project)
}

// Get a single project
const getProject = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such project'})
    }
    const project = await Project.findById(id)
    if(!project){
        return res.status(404).json({error : 'No Such Project'})
    }
    res.status(200).json(project)
}

// Create new project
const createProject = async (req, res) => {
    try {
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Please fill in all the fields' });
      }
  
      const project = await Project.create(req.body);
      const id = req.body.orgId;
      const org = await Orrg.findById(id);
      if (!org) {
        return res.status(404).json({ error: 'Organization not found' });
      }
      org.projects.push(req.body);
      await org.save();
      console.log("done");      
      res.status(200).json(project);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

// delete a project 
const deleteProject = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such project'})
    }
    const project = await Project.findOneAndDelete({_id:id})
    if(!project){
        return res.status(404).json({error : 'No Such Project'})
    }
    res.status(200).json({mssg:"Project deleted successfully"})
}

// update a project
const updateProject = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error : 'No such project'})
    }
    const project = await Project.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!project){
        return res.status(404).json({error : 'No Such Project'})
    }
    res.status(200).json(project)
}


module.exports = {
    getProject,
    getProjects,
    createProject,
    deleteProject,
    updateProject
}