router.get('/user',function (req,res,next) {
    // setTimeout(function () {
    //     message = "测试可以了";
    //     res.json( req.query.username +'--'+ req.query.password + '--' +message );
    //     return;
    // },2000)
    message = "测试可以了";
    res.json( req.query.username +'--'+ req.query.password + '--' +message );
    return;
});
router.post('/user',function (req,res,next) {
    // setTimeout(function () {
    //     message = "测试可以了";
    //     res.json( req.body.username +'--'+ req.body.password + '--' +message );
    //     return;
    // },2000)

    message = "测试可以了";
    res.json( req.body.username +'--'+ req.body.password + '--' +message );
    return;
});
