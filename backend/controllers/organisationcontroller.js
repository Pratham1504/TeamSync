const Organisation = require('../models/organisation')
const mongoose = require('mongoose');
const UserSchema = require('../models/user');


const organisationGet = async (req, res) => {

    const orgs = await Organisation.find();
    res.status(200).json(orgs);

}


const organisationGetId = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Organisation" })
    }

    const org = await Organisation.findOne({ _id: id });

    if (!org) {
        return res.status(201).json({ error: "NO SUCH ORGANISATION" });
    }
    res.json(org)
}

const organisationPut = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Organisation' })
    }
    // console.log("hey1");
    
    const org = await Organisation.findOneAndUpdate({ "_id": id }, { ...req.body });
    // console.log("hey2");

    if (!org) {
        res.status(201).json({ error: "NO SUCH ORGANISATION" });
    }
    // res.status(200).json(org);
    res.json(org)
}

const organisationPost = async (req, res) => {

    try {
        const org = await Organisation.create(req.body);
        res.status(200).json(org);
        // console.log("d");
        
    }
    catch (error) {
        res.status(201).json({ error: error.message });
    }
}

const organisationDelete = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' })
    }

    const org = Organisation.findOneAndDelete({ _id: id });
    if (!org) {
        return res.status(204).json({ error: "NO SUCH ORGANISATION" });
    }
    return res.status(200).json({ message: "Deleted successfully" });
}

module.exports = {
    organisationGet,
    organisationGetId,
    organisationPost,
    organisationDelete,
    organisationPut
}