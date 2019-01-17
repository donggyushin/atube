import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: {
    type: String,
    required: "This video requires title"
  },
  description: {
    type: String
  },
  fileURL: {
    type: String,
    required: "This video requires fileURL"
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
