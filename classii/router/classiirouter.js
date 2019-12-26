const express = require('express');

var router = express.Router();

var classiimodel = require('../model/classii');
var studentModel = require( '../model/student');

var cors = require('cors')
var app = express()

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
router.get('/getclassii', cors(corsOptions), (req, res) => {

    classiimodel.find({}, (err, docs) => {
        if (!err) {
            console.log(docs);
            res.status(200).send(docs);
        }
    });
});

router.post('/postclassii', (req, res) => {

    classiimodel.find({ rollNumber: req.body.rollNumber }, (err, docs) => {
        if (docs.length == 0) {
            console.log(docs);
            var emp = new classiimodel();

            emp.studentName = req.body.studentName,
                emp.rollNumber = req.body.rollNumber,
                emp.rank = req.body.rank,
                emp.phoneNumber = req.body.phoneNumber,

                emp.save((err, docs) => {
                    if (!err) {
                        res.status(200).send({ msg: 'inserted successfully',data:docs });
                    }
                });
        } else {
            res.status(200).send({ msg: 'rollNumbar already exist' });
        }
    });
});

router.post('/putclassii', (req, res) => {
    classiimodel.findOneAndUpdate({ rollNumbar: req.body.rollNumbar }, req.body, { upsert: true }, (err, docs) => {

        res.status(200).send({ msg: 'updated successfully', data: docs });
    });

});

router.delete('/deleteclassii', (req, res) => {
    classiimodel.findOneAndDelete({ rollNumbar: req.body.rollNumbar }, (err, docs) => {
        res.status(200).send({ msg: 'deleted sucessfully', data: docs });
    });
});

router.post('/student',( req,res) => {
    studentModel.find({ rollNumber: req.body.rollNumber }, (err, docs) => {
        if (docs.length == 0) {
            console.log(req.body);
            var student = new studentModel();

            student.firstName = req.body.firstName,
            student.lastName = req.body.lastName,
            student.rollNumber = req.body.rollNumber,
            student.rank = req.body.rank,
            student.phoneNumber = req.body.phoneNumber,
            student.class = req.body.class,
            student.transportation = req.body.transportation,
            student.fee = req.body.fee

            student.save((err, doc) => {
                    console.log(doc);
                    if (!err) {
                        res.status(200).send({ msg: 'inserted successfully',data:doc });
                    }else{
                      res.send(err)
                    }
                });
        } else {
            res.status(200).send({ msg: 'rollNumbar already exist' });
        }
    });
})
router.get('/students-list', cors(corsOptions),(req,res) =>{
    studentModel.find({},(err,doc) => {
        if (!err) {
            console.log(doc);
            res.status(200).send(doc);
        }
    });
});

module.exports = router;