const instructor = require('../Models/Instructor');

let addInstructor = async (value) => {

    return new Promise((resolve, reject) => {

        instructor.create({

            name: value.name,
            organisation: value.organisation,
            designation: value.designation,
            email: value.email,
            linkedIn_Profile: value.linkedInProfile,

        }).then(data => {
            
            if (data)
                resolve(data);
            else 
                reject(null);
        }).catch(err => {

            console.log(err);
            reject(null);
        })
    })
}

module.exports = {addInstructor};