/** Dto */
const vehicleDto = require("../../model/dto/vehicle.dto");
const config = require("config");

exports.createVehicle = (req, res, next) => {
    console.log(req.body.plate);
    let vhc = {
        owner: req.body.owner,
        plate: req.body.plate,
        model: req.body.model,
        color: req.body.color,
        type: req.body.type,
        mileage: req.body.mileage,
        brand: req.body.brand,
        capacity: req.body.capacity
    };
    vehicleDto.create(vhc, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.updateVehicle = (req, res, next) => {
    let vhc = {
        owner: req.body.owner,
        plate: req.body.plate,
        model: req.body.model,
        color: req.body.color,
        type: req.body.type,
        mileage: req.body.mileage,
        brand: req.body.brand,
        capacity: req.body.capacity
    };

    vehicleDto.create(vhc, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
    });
    vehicleDto.update({_id: req.body.id}, vhc, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
        
    });
};

exports.getAll = (req, res, next) => {
    
    vehicleDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
        
    });
};

exports.getByPlate = (req, res, next) => {
    
    vehicleDto.getByPlate({plate: req.params.plate}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};

exports.deleteVehicle = () => {
    vehicleDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        res.status(204).json()
    });
}
