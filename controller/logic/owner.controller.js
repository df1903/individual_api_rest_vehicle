/** Dto */
const ownerDto = require("../../model/dto/owner.dto");
const config = require("config");

/** Helper */
const notHelper = require("../helpers/notification.helper")

exports.createOwner = (req, res, next) => {
    let own = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };
    ownerDto.create(own, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
        }
        notHelper.sendSMS(own.phone)
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.updateOwner = (req, res, next) => {
    let own = {
        document: req.body.document,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
    };
    ownerDto.update({_id: req.body.id}, own, (err, data) => {
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
    
    ownerDto.getAll({}, (err, data) => {
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

exports.getByDocument = (req, res, next) => {
    
    ownerDto.getByDocument({document: req.params.document}, (err, data) => {
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

exports.deleteOwner = () => {
    ownerDto.delete({_id: req.body.id}, (err, data) => {
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
