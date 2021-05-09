let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

//Student Model 
let studentSchema = require('../models/Student');

//Create Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if(error) {
      return next(error)
    } else {
      //console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res, next) => {
  studentSchema.find((error, data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// /edit-student/:id'


// Get Single Student 
// router.route('/edit-student/:id').get((req, res, next) => {
//   studentSchema.findById(req.params.id, (error, data) => {
//     if(error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

 // To Get Employee Details By Employee ID
//  router.route('/edit-student/:id').get( (req, res, next)=> {
//     let id = req.params.id;
//     alert(req.params.id)
//     studentSchema.findById(id, (error, data) => {
//       if(error) {
//        return next(error);
//       } else {
//         res.json(data)
//       }
//     });
//  });

router.route('/edit-student/:id').get((req,res) => {
  studentSchema.findById(req.params.id)
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400).json('Error: '+err));
});

// Update Student 
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findOneAndUpdate(req.params.id, {
    $set: req.body
  },(error, data) => {
    if(error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
      console.log('Student created successfully');
    }
  })
})

//Delete Student 
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router