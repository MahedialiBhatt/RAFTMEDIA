const Post = require("../models/postModel");

async function insertResource(title, content) {
  let resData;
  try {
    const res = await Post.create({
      title: title,
      content: content,
    });
    resData = res;
  } catch (err) {
    throw err;
  }
  return resData;
}

async function getAllResources(page, limit, sortBy, sortOrder) {
  try {
    const offset = (page - 1) * limit;
    const order = [[sortBy, sortOrder]];
    const allPost = await Post.findAll({
      offset,
      limit,
      order,
    });
    return allPost;
  } catch (error) {
    throw error;
  }
}

async function getResourceById(id) {
  let resData;
  try {
    const res = await Post.findByPk(id);
    resData = res;
  } catch (err) {
    throw err;
  }
  return resData;
}

async function deleteResourceById(id) {
  try {
    const postRes = await Post.findByPk(id);
    if (!postRes) {
      return;
    }
    await postRes.destroy();
  } catch (err) {
    throw err;
  }
}

async function updateResourceById(id, title, content) {
  try {
    let post = await Post.findByPk(id);
    if (!post) {
      return;
    }
    post.title = title;
    post.content = content;
    await post.save();
    return post;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  insertResource,
  getResourceById,
  getAllResources,
  deleteResourceById,
  updateResourceById,
};
