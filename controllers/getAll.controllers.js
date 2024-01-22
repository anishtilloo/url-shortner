const shortUrlsService = require('../services/getAll.services');

const getAllShortUrlController = async (req, res) => {
    try {
        const listOfAllShortUrl = await shortUrlsService();
        res.json({
            success: true,
            message: "Got all the urls",
            listOfAllShortUrl: listOfAllShortUrl,
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Something went wrong",
            errorMessage: error,
        })
    }
}

module.exports = getAllShortUrlController;