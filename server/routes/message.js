const axios = require('axios');
const { getList, send } = require('../controllers/message');

global.response = [];

module.exports = (router) => {
  router.get('/messages', getList);
  router.post('/message/send', send);
  router.post('/message/post', (req, res) => {
    console.log(req.body);

    const { data } = axios.post('http://192.168.1.13:3001/bank', {
      ...req.body,
      callbackApi: 'http://192.168.1.14:3001/callback',
    });

    console.log(data);

    return res.send(data);
  });

  router.post('/callback', async (req, res) => {
    console.log(req.body);
    global.response.push(req.body);
    // return res.send(data);

    return res.send('sucess');
  });
};
