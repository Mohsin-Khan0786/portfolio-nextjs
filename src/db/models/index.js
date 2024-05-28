"use server";

import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
});

const Project = models.project || model("Projects", projectSchema);

export default Project;
