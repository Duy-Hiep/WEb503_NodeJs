import jwt from 'jsonwebtoken';
import User from '../models/auth';

export const checkPerMission = async(req, res, next) => {
    try {
        if(!req.headers.authorization){
            return res.status(400).json({
                message: "Bạn chưa đăng nhập"
            })
        }

        const token = req.headers.authorization.split(" ")[1];

        const {id} = jwt.verify(token, '123456')

        const user = await User.findById(id)

        if(user.role !== 'admin'){
            return res.status(400).json({
                message: "Bạn không có quyền để thực hiện chức năng này"
            })
        }

        req.user = user

        next()
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    
}