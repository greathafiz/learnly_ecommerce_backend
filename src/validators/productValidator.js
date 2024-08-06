import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().required(),
  imageURL: Joi.string().uri().required(),
  createdBy: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
});

export const updateProductSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  imageURL: Joi.string().uri(),
  createdBy: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
});
