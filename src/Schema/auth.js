import joi from 'joi';

export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Truong name khong duoc de trong",
        "any.required": "Truong Name la bat buoc"
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Truong email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Truong password khong duoc de trong",
        "any.required": "Truong password la bat buoc",
        "string.min": "Truong password phai du {#limit} ky tu tro len"
    }),
    confirmPassword: joi.string().valid(joi.ref('password')).required().messages({
        "string.empty": "Truong confirmPassword khong duoc de trong",
        "any.required": "Truong confirmPassword la bat buoc",
        "any.only": "Truong confirmPassword khong giong truong password"
    }),
})

export const signinSchema = joi.object({
   
    email: joi.string().email().required().messages({
        "string.empty": "Truong email khong duoc de trong",
        "any.required": "Truong email la bat buoc",
        "string.email": "Email khong dung dinh dang"
    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Truong password khong duoc de trong",
        "any.required": "Truong password la bat buoc",
        "string.min": "Truong password phai du {#limit} ky tu tro len"
    })
})