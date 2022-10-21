const instructor = require('../Models/Instructor');

let addInstructor = async (value) => {
    let data;

    try {
        data = await instructor.create({
            name: value.name,
            organisation: value.organisation,
            designation: value.designation,
            email: value.email,
            linkedIn_Profile: value.linkedInProfile,
        });
    } catch (err) {
        console.log(err);
        return null;
    }

    if (data == null || data == undefined)
        return null;
    
    return data;
}

module.exports = {addInstructor};