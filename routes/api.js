/**
 * Created by lidy on 2016/9/22.
 */
var express = require('express'),
        Post = require('../models/post.js');
var router = express.Router();
router.get('/getNavInfo', function (req, res, next) {
        Post.getTopArticle(5, 'time', function (err, posts) {
                if (err) {
                        req.flash('error', err);
                        return res.redirect('/');
                }
                res.json(posts);
        });
});
module.exports = router;