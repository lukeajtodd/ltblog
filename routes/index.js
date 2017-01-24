var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      articles: {
          articleOne: {
              title: 'Article Number One',
              url: '#',
              description: `Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
              screengrab: 'https://www.fillmurray.com/700/240',
              mobile_screengrab: '#'
          },
          articleTwo: {
              title: 'Article Number Two',
              url: '#',
              description: `Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
              screengrab: 'https://www.fillmurray.com/700/240',
              mobile_screengrab: '#'
          }
      },
      colours: [
        "#F44336",
        "#E91E63",
        "#673AB7",
        "#3F51B5",
        "#03A9F4",
        "#009688",
        "#4CAF50",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#607D8B"
      ]
   });
});

module.exports = router;
