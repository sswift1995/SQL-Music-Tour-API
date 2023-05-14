const bands = require('express').Router();
const db = require('../models');
const { Band } = db;

//FIND ALL BANDS
bands.get('/', async (req, res) => {
try {
    const foundBands = await Band.findAll();
    res.status(200).json(foundBands);
    } catch (error) {
        res.status(500).json(error);
    }
})

//FIND A Band
bands.gt('/:id', async (req, res) => {
try{
    const foundBand = await Band.findOne({
        where: {band_id: req.params.id}
    })
} catch(error) {
    res.status(500).json(error);
}
})


//CREATE A BAND
bands.post('/', async (req, res) => {try {
    const newBand = await Band.create(req.body);
    res.status(200).json({
        message: 'Successfully inserted a new band.',
        data:newBand
    });
}catch (error){
    res.status(500).json(error);
}
})

//UPDATE
bands.put('/:id', async (req, res)=> {
    try {
        const updatedBands = await Band.update(req.body, {
           where: {
                band_id: req.params.id
           } 
        })
        res.status(200).json({
            message: 'Successfully updated ${updateBands} band(s)'
        })
       } catch(error) {
        res.status(500).json(error);
       }
 })

//DELETE
bands.delete('/:id', async (req,res) => {
    try {
        const deletedBand = await Band.destroy({
           where: {
                band_id: req.params.id
           } 
        });
        res.status(200).json({
            message: 'Successfully deleted ${deletedBand} band(s)'
        });
       } catch(error) {
        res.status(500).json(error);
       }
 })




// EXPORT
module.exports = bands