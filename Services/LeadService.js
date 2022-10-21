const lead = require('../Models/Lead');

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
        data = await lead.findone({where: {
            id: value.id
        }});

        if (value.status != undefined)
            data.status = value.status;

        result = await lead.update(data, {where: {
            id: value.id
        }});
    } catch (err) {
        condole.log(err);
        return null;
    }

    if (result == null || result == undefined)
        return null;

    return result; 
}

module.exports = {
    addLead,
    updateLead
}