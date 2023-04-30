import joi from 'joi'

export const productSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    categoryId: joi.string().required(),
})