const learner = require('../Models/Learner');
const course_learner = require('../Models/course_learner'); 

let addLearner = async (value) => {
    let data;
    let update; 

    try {
        data = await learner.create({
            name: value.name,
            institute: value.institute,
            designation: value.designation,
            email: value.email,
            phone: value.email,
            linkedIn_Profile: value.linkedInProfile,
        })

        if (data == null || data == undefined)
            return null;

        update = await course_learner.create({
            course_id: value.courseId,
            learner_id: data.id,
        });

    } catch (err) {
        console.log(err);
        return null;
    }

    if (update == null || update == undefined)
        return null;

    return {data, update}; 
}

module.exports = {addLearner}; 