const Data = require('../model/Data');

const getAllData = async (req, res) => {
    const data = await Data.find();
    if (!data) return res.status(204).json({ 'message': 'No data found.' });
    res.json(data);
}

const createNewData = async (req, res) => {
    if (!req?.body?.companyname || !req?.body?.managementname || !req?.body?.baseFile) {
        return res.status(400).json({ 'message': 'Company Name, management Name, and logo are required' });
    }

    try {
        const result = await Data.create({
            companyname: req.body.companyname,
            managementname: req.body.managementname,
            baseFile: req.body.baseFile
        });

        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    getAllData,
    createNewData
}