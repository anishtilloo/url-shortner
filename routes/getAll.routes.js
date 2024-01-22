const getAllShortUrlController = require('../controllers/getAll.controllers');

const Router = express.Router()

Router.get('/get-all-urls', getAllShortUrlController);