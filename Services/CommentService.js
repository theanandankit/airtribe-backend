const comment = require('../Models/Comment');

let addComment = async (value) => {

    return new Promise((resolve, reject) => {

        comment.create({

            comment_value: value.value,
            lead_id: value.leadId,

        }).then(data => {
            
            if (data)
                resolve(data);
            else
                reject(null);;
        }).catch(err => {
            
            console.log(err)
            reject(null);
            
        })
    })
}

module.exports = {addComment}; 