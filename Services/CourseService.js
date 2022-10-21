const course = require('../Models/Course');

var addCourse = async (value) => { 
    let data;
    try {
        data = await course.create({
            name: value.name,
            max_seat: value.maxSeat,
            start_date: value.startDate,
            description: value.description,
            instructor_id: value.instructorId,
        });
    } catch (err) {
        console.log(err);
    }

    if (data == null)
        return null;
    
    return data; 
}

let updateCourse = async (value) => {
    let data;
    try {
        data = await course.findOne({
            where: 
                {id: value.id}
        });

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

        console.log("------------------", data) 

        await data.save(); 
    } catch (err) {
        console.log(err);; 
    }
}

module.exports = {
    addCourse,
    updateCourse
}