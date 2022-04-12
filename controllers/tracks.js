const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({data});
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS');
  }
};

const getItem = () => {};

/**
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEM');
  }
};

const updateItem = () => {};
const deleteItem = () => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }