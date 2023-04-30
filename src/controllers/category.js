import { categorySchema } from '../Schema/category';
import Category from'../models/category'

export const GetAll = async(req, res) => {
    try {
        const category = await Category.find({});
        if(!category){
            return res.status(400).json({
                message:"Không tìm thấy danh mục nào"
            })
        }
        return res.status(201).json({
            message:"Lấy danh mục thành công",
            category
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Get = async(req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("products", "categoryId[]")
        if(!category){
            return res.status(400).json({
                message:"Không tìm thấy danh mục nào"
            })
        }
        return res.status(201).json({
            message:"Lấy danh mục thành công",
            category
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Create = async(req, res) => {
    try {
        const {error} = categorySchema.validate(req.body, {abortEarly: false});

        if(error){
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }

        const category = await Category.create(req.body)

        return res.status(201).json({
            message: "Thêm danh mục thành công",
            category
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Remove = async(req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)

        return res.status(201).json({
            message: "Xóa danh mục thành công",
            category
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Update = async(req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.status(201).json({
            message: "Sửa danh mục thành công",
            category
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}