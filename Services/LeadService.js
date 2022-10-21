const lead = require('../Models/Lead');
const learner = require('../Models/Learner');
const sequelize = require("sequelize");
const Op = sequelize.Op;

let addLead = async (value) => {
    let data;
    try {
        data = await lead.create({
            status: value.status,
            course_id: value.courseId,
            learner_id: value.learnerId, 
        })
    } catch (err) {
        console.log(err);
        return null;
    }

    if (data == null || data == undefined)
        return null;

    return data; 
}

let updateLead = async (value) => {
    let data;
    let result;

    try {
        data = await lead.findOne({where: {
            id: value.id
        }});

        if (value.status != undefined)
            data.status = value.status;

        await data.save(); 
    } catch (err) {
        console.log(err);
        return null;
    }

    if (result == null || result == undefined)
        return null;

    return result; 
}

let searchLeadByEmailName = async (value) => {
    
    return new Promise((resolve, reject)=>{

        let result;
        let nameSearch = value.name;
        let emailSearch = value.email; 
    
        lead.findAll({
            where : {
                [Op.or]: [
                    { '$learner.name$': {[Op.like]: '%' + nameSearch + '%'}},
                    { '$learner.email$': {[Op.like]: '%' + emailSearch + '%'}},
                ]
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
            resolve(result);
    
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