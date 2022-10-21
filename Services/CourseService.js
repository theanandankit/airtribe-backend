const course = require('../Models/Course');

var addCourse = async (value) => { 

    return new Promise((resolve, reject) => {

        course.create({
            
            name: value.name,
            max_seat: value.maxSeat,
            start_date: value.startDate,
            description: value.description,
            instructor_id: value.instructorId,

        }).then(data => {
            
            if (data)
                resolve(data);
            else 
                reject(null);

        }).catch(err => {

            console.log(err);;
            reject(null);

        })
    })
}

let updateCourse = async (value) => {

    return new Promise((resolve, reject) => {
        
        course.findOne({
            where: 
                {id: value.id}
        }).then( data => {
        
        if (value.name != undefined)
            data.name = value.name;
        if (value.maxSeat != undefined)
            data.max_seat = value.maxSeat;
        if (value.startDate != undefined)
            data.start_date = value.startDate; 
        if (value.description != undefined)
            data.description = value.description;
        if (value.instructorId != undefined)
            data.instructor_id = value.instructorId; 

        data.save(); 
        resolve(data);

        }).catch(err => {
            console.log(err);
            reject(null);;
        })
    })
}

module.exports = {
    addCourse,
    updateCourse
}