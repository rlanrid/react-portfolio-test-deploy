const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        comment: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "comments", timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };