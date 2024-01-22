const ShortUrl = require('./models/shortUrl');

const getAllShortUrls = async () => {
    const shortUrls = await ShortUrl.find()

    return shortUrls;
}

module.exports = getAllShortUrls;