const postRepo = require("../repository/postRepo");
const cache = require("memory-cache");

async function insertResource(title, content) {
  cache.clear();
  return await postRepo.insertResource(title, content);
}

async function getAllResources(page, limit, sortBy, sortOrder) {
  const cacheKey = `/post?limit=${limit}&page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log(cachedData);
    return cachedData;
  }
  const resData = await postRepo.getAllResources(
    page,
    limit,
    sortBy,
    sortOrder
  );
  cache.put(cacheKey, resData);
  return resData;
}

async function getResourceById(id) {
  const cacheKey = `/post/id`;
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const resData = await postRepo.getResourceById(id);
  cache.put(resData);
  return resData;
}

async function deleteResourceById(id) {
  cache.clear();
  return await postRepo.deleteResourceById(id);
}

async function updateResourceById(id, title, content) {
  cache.clear();
  return await postRepo.updateResourceById(id, title, content);
}

module.exports = {
  insertResource,
  getAllResources,
  getResourceById,
  deleteResourceById,
  updateResourceById,
};
