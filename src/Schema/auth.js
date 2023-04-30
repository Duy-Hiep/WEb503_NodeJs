import joi from 'joi';

export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Trường Name không được để trống",
        "any.required": "Trường Naem là bắt buộc"
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Trường Email không được để trống",
        "any.required": "Trường Email là bắt buộc",
        "string.email": "Email không đúng định dạng"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Trường password phải đủ {#limit} ký tự trở lên"
    }),
    confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
        "string.empty": "Trường confirmPassword không được để trống",
        "any.required": "Trường confirmPassword là bắt buộc",
        "any.only": "Trường confirmPassword không giống trường password"
    }),
})

export const signinSchema = joi.object({
   
    email: joi.string().email().required().messages({
        "string.empty": "Trường Email không được để trống",
        "any.required": "Trường Email là bắt buộc",
        "string.email": "Email không đúng định dạng"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Trường password phải đủ {#limit} ký tự trở lên"
    })
})