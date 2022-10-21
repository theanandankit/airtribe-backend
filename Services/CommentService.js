const comment = require('../Models/Comment');

let addComment = async (value) => {
    let data;

    try {
        data = await comment.create({
            comment_value = value.value,
            lead_id = value.leadId,

        })
    } catch (err) {
        console.log(err)
        return null;
    }

    if (data == null || data == undefined)
        return null;

    return data;
}

module.exports = {addComment}; 