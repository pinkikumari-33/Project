const jwt = require("jsonwebtoken")

const secretKey = "aojhfkvnijerhuvoifjvnjkdnzkjnpioweuredwlfhewo dcnsdjnvijfheurfjmidlasdkskjhfskjvdvdsjdnclskj "

class JwtProvider{
    constructor(secretKey){
        this.secretKey = secretKey
    }

    generateToken(payload){
        return jwt.sign(payload,this.secretKey,{expiresIn:"24h"})
    }

    getEmailFromjwt(token){
        try{
            const decodedToken = jwt.verify(token,this.secretKey)
            return decodedToken.sellerId
        }catch(err){
            throw new Error("Invalid Token")
        }
    }

    verifyToken(token){
        try{
            jwt.verify(token,this.secretKey)
        }catch(err){
            throw new Error("Invalid Token")
        }
    }
}

module.exports = new JwtProvider(secretKey)