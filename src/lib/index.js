"use server";

import connectDB from "@/db";
import Project from "@/db/models";

export const getProjects = async () => {
  try {
    await connectDB();

    const projects = await Project.find();

    if (!projects) throw new Error("No project found");

    return JSON.stringify(JSON.parse(projects));
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
    };
  }
};

export const getProjectById = async (id) => {
  try {
    await connectDB();

    const project = await Project.find(id);

    if (!project) throw new Error("No project found");

    return JSON.stringify(JSON.parse(project));
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
    };
  }
};

export const createProject = async ({
  title,
  description,
  githubLink,
  thumbnail,
  techStack,
}) => {
  try {
    await connectDB();

    await Project.create({
      title,
      description,
      githubLink,
      thumbnail,
      techStack,
    });

    return {
      message: "Added to projects",
    };
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
    };
  }
};

export const deleteProject = async (id) => {
  try {
    if (!id) throw new Error("Id is not defined");

    await connectDB();

    await Project.findByIdAndDelete(id);

    return {
      message: "Project deleted successfully",
    };
  } catch (error) {
    console.log(error.message);
    return {
      message: error.message,
    };
  }
};
