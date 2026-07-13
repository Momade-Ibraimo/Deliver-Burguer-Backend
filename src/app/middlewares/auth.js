import Jwt2 from "jsonwebtoken";
import authConfig from '../../config/auth.js'


export default (req, res, next) => {
    const authToken = req.headers.authorization


    if (!authToken) {
        return res.status(401).json({ error: "Token not provided" })
    }

    const token = authToken.split(' ')[1]

    try {
      const decoded =  Jwt2.verify(token, authConfig.secret)
          
            req.userId = decoded.id
            req.userName = decoded.name

            return next()

   
        
    } catch (err) {
        return res.status(400).json({ error: 'Token is invalid' })
    }


}