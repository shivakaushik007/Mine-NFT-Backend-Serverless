/**
 * Method for creating new document
 * @method create
 * @param {any} model
 * @param {Object} data
 * @returns new document
 */
const create = (model, data) => {
  try {
    const createdRes = new model(data);
    createdRes
      .save()
      .then((res) => res)
      .catch((error) => console.log(error));
    return createdRes;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Method to get a document
 * @method get
 * @param {any} model
 * @param {Object} data
 * @returns Document from db
 */
const get = (model, data) => {
  try {
    return new Promise((resolve, reject) => {
      model
        .findOne(data)
        .then((res) => resolve(res))
        .catch((error) => {
          console.log(error.message);
          reject(false);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Method for updating document
 * @method update
 * @param {any} model
 * @param {any} query
 * @param {Object} data
 * @return updated document
 */
const update = (model, query, data) => {
  try {
    return new Promise((resolve, reject) => {
      model
        .updateOne(query, { $set: data })
        .then((res) => resolve(res))
        .catch((error) => {
          console.log({ message: error.message });
          reject(false);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Method to get all documents
 * @param {any} model
 * @method getAll
 * @returns all documents from db
 */
const getAll = (model, query) => {
  try {
    return new Promise((resolve, reject) => {
      model
        .find(query)
        .then((res) => resolve(res))
        .catch((error) => {
          console.log(error);
          reject(false);
        });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Method to delete a document
 * @param {any} model
 * @param {Object} query
 * @method getAll
 * @returns deleted response
 */
const deleteOne = (model, query) => {
  try {
    return new Promise((resolve, reject) => {
      model
        .deleteOne(query)
        .then((res) => resolve(res))
        .catch((error) => {
          console.log({ message: error.message });
          reject(false);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  create,
  get,
  getAll,
  update,
  deleteOne,
};
