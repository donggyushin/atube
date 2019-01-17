import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    required: "text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  video: {
    type: Schema.Types.ObjectId,
    ref: "Video"
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
