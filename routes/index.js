var express = require('express');
var router = express.Router();

const articles = {
  i1: {
      title: 'Article Number One',
      url: '#',
      description: `Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      content: 'Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      screengrab: 'https://www.fillmurray.com/700/240',
      mobile_screengrab: '#'
  },
  i2: {
      title: 'Article Number Two',
      url: '#',
      description: `Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      content: 'Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      screengrab: 'https://www.fillmurray.com/700/240',
      mobile_screengrab: '#'
  }
}

const colours = [
  "#F44336",
  "#E91E63",
  "#673AB7",
  "#03A9F4",
  "#009688",
  "#4CAF50",
  "#FFC107",
  "#FF9800",
  "#FF5722"
];

router.get('/', function(req, res, next) {
  res.render('index', {
      articles,
      colours
  });
});

router.get('/:article_id', function(req, res, next) {
  let article = articles[req.params.article_id];
  console.log(article.title);
  res.render('article', {
    article,
    colours
  });
});

module.exports = router;
