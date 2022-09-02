let axios = require("axios")

const changeMeme = async (req, res) => {
    try {
        const template_id = req.query.template_id
        const text0 = req.query.text0
        const text1 = req.query.text1
        const username = req.query.username
        const password = req.query.password

        let link = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}& text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let chetan = await axios(link)
        res.status(200).send({data : chetan.data})
    } catch (err) {
        console.log(err) 
        res.status(500).send({ msg: err.message })
    }

}
module.exports.changeMeme=changeMeme