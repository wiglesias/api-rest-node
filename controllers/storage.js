const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LIST_ITEMS")
  }
};

/**
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DETAIL_ITEM");
  }
};

/**
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData);

  res.send({data});
};

const updateItem = async (req, res) => {};

/**
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }