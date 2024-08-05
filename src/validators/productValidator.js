import Joi from "joi";

export const product = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().required(),
  imageURL: Joi.string().uri().required(),
  createdBy: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
});
