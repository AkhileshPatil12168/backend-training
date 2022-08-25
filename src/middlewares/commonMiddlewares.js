
const mid1 = function (req, res, next) {
    
    const isFree = req.headers//["isfreeappuser"]
    if (!isFree["isfreeappuser"]) return res.send("header is requried")
    next()
}


module.exports.mid1 = mid1

