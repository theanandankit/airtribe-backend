const lead = require('../Models/Lead');
const learner = require('../Models/Learner');
const sequelize = require("sequelize");
const Op = sequelize.Op;

let addLead = async (value) => {

    return new Promise((resolve, reject) => {

        lead.create({

            status: value.status,
            course_id: value.courseId,
            learner_id: value.learnerId,

        }).then(data => {
            
            if (data)
                resolve(data);
            else
                reject(null);
        }).catch ((err => {
            
            console.log(err);;;
            reject(null);
        
        }))
    })
}

let updateLead = async (value) => {

    return new Promise((resolve, reject) => {
        lead.findOne({
            where: {
                id: value.id
            }
        }).then( data => {
        
        if (value.status != undefined)
            data.status = value.status;

        data.save();
        resolve(data);

        })
    }).catch(err => {
        console.log(err);;
        reject(null);
    })
}

let searchLeadByEmailName = async (value) => {

    return new Promise((resolve, reject)=>{

        let result;
        let nameSearch = value.name;
        let emailSearch = value.email;

        let searchValue = [];

        if (nameSearch) {
            searchValue.push({ '$learner.name$': {[Op.like]: '%' + nameSearch + '%'}});
        }

        if (emailSearch) {
            searchValue.push({ '$learner.email$': {[Op.like]: '%' + emailSearch + '%'}});
        }
    
        lead.findAll({
            where : {
                [Op.or]: searchValue,
            },
            include: [
                {
                    model: learner,
                    as: 'learner',
                    required: false,
                    right: true
                }
            ],

            raw: true,
            nest: true,

        }).then( data => {
    
            let jsonString = JSON.stringify(data);
            result = JSON.parse(jsonString);

            let value = [];

            result.forEach((i => {
                if (i.id)
                    value.push(i);
            }))

            resolve(value);
    
        }).catch (err=> {
            console.log(err);
            reject(null)
        })

    })
}

module.exports = {
    addLead,
    updateLead,
    searchLeadByEmailName
}