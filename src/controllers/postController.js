const postService = require("../service/postService");

async function insertResource(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .send({ error: "Bad Request, Missing required field" });
    }
    const resData = await postService.insertResource(title, content);
    return res.send({
      message: "Data is inserted successfully",
      response: resData,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function getAllResources(req, res) {
  try {
    const {
      limit = 100,
      page = 1,
      sortBy = "createdAt",
      sortOrder = "ASC",
    } = req.query;
    const resData = await postService.getAllResources(
      page,
      limit,
      sortBy,
      sortOrder
    );
    return res.send({
      response: resData,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function getResourceById(req, res) {
  try {
    const resourceId = req.params.id;
    const resData = await postService.getResourceById(resourceId);
    return res.send({
      response: resData,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function deleteResourceById(req, res) {
  try {
    const resourceId = req.params.id;
    await postService.deleteResourceById(resourceId);
    return res.send({
      message: "Data is deleted successfully",
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

async function updateResourceById(req, res) {
  try {
    const resourceId = req.params.id;
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .send({ error: "Bad Request, Missing required field" });
    }

    const resData = await postService.updateResourceById(
      resourceId,
      title,
      content
    );
    return res.send({
      message: "Data is updated successfully",
      response: resData,
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

module.exports = {
  insertResource,
  getAllResources,
  getResourceById,
  deleteResourceById,
  updateResourceById,
};
