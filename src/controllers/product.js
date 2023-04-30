import { productSchema } from '../Schema/product';
import Product from'../models/products'
import Category from'../models/category'


export const GetAll = async(req, res) => {
    const { _page = 1, _order = "asc", _limit=10, _sort="createAt"} = req.query

    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        }
    }
    try {
        const product = await Product.paginate({}, options);
        if(!product){
            return res.status(400).json({
                message:"Không tìm thấy sản phẩm "
            })
        }
        return res.status(201).json({
            message:"Lay sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Get = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId", "products[]")
        if(!product){
            return res.status(400).json({
                message:"Không tìm thấy sản phẩm này"
            })
        }
        return res.status(201).json({
            message:"Lấy sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Create = async(req, res) => {
    try {
        const {error} = productSchema.validate(req.body, {abortEarly: false});

        if(error){
            return res.status(400).json({
                message: error.details.map((err) => err.message)
            })
        }

        const product = await Product.create(req.body)

        await Category.findOneAndUpdate(product.categoryId, {
            $addToSet: {
                products: product._id
            }
        })

        return res.status(201).json({
            message: "Thêm sản phẩm thành công",
            product
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Remove = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.status(201).json({
            message: "Xóa sản phẩm thành công",
            product
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

export const Update = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.status(201).json({
            message: "Sửa sản phẩm thành công",
            product
        })

    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}