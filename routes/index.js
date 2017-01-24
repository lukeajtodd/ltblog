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
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B"
      ]
   });
});

module.exports = router;
