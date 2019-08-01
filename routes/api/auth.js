// importing the required modules
const express=require('express'),
passport=require('passport'),
router=express.Router(),
bcrypt=require('bcryptjs'),
jsonwt=require('jsonwebtoken'),
nodemailer=require('nodemailer');


// fetching the schemas
const Hospital=require('../../models/Hospital'),
Patient=require('../../models/Patient');


// fetching the setup file
const config=require('../../setup/config');


/*
@type - POST
@route - /api/auth/register/hospital
@desc - a route to register hospital
@access - PUBLIC
*/
router.post('/register/hospital',(req,res)=>{
    Hospital.findOne({hEmail:req.body.hEmail})
            .then(hospital=>{
                if(hospital)
                return res.status(200).json({hospitalAlreadyRegistered:'Your hospital is already registered'});
                const newHospital= new Hospital({
                    hName:req.body.hName,
                    hLocation:req.body.hLocation,
                    hEmail:req.body.hEmail,
                    hPassword:req.body.hPassword
                });
                bcrypt.genSalt(10,(err, salt)=>{
                    bcrypt.hash(newHospital.hPassword, salt, (err, hash)=>{
                        if(err)throw err;
                        newHospital.hPassword=hash;
                        newHospital.save()
                        .then(hospital=>{
                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'sanjaysinghbisht751@gmail.com',
                                pass: 'jay07san@'
                            }
                            });
                            
                            var mailOptions = {};
                            mailOptions.from='sanjaysinghbisht751@gmail.com';
                            mailOptions.to=hospital.hEmail;
                            mailOptions.subject='Thanks for registering your hospital or clinic to TrackMyToken';
                            mailOptions.text=`Welcome to TrackMyToken ! Your credentials are : email - ${hospital.hEmail} and password - ${req.body.password}`;
                            transporter.sendMail(mailOptions, (error, info)=>{
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('Email sent: ' + info.response);
                            }
                            });
                                    return res.status(400).json(hospital);
                                })
                                   .catch(err=>console.log(err));
                    });
                });
            })
            .catch(err=>console.log(err));
});


/*
@type - POST
@route - /api/auth/login/hospital
@desc - a route to login hospital
@access - PUBLIC
*/
router.post('/login/hospital',(req,res)=>{
    const hEmail=req.body.hEmail,hPassword=req.body.hPassword;
    Hospital.findOne({hEmail})
            .then(hospital=>{
                if(!hospital)
                return res.status.json({hospitalNotRegistered:'Your hospital is not registered'});
                bcrypt.compare(hPassword,hospital.hPassword)
                      .then(isCorrect=>{
                          if(isCorrect){
                            const payload={
                                id:hospital._id,
                                hName:hospital.hName,
                                hEmail:hospital.hEmail,
                                hPassword:hospital.hPassword,
                                hLocation:hospital.hLocation,
                                credits:hospital.credits
                            };
                            jsonwt.sign(payload,config.secret,{expiresIn:3600},(err,token)=>{
                                if(err)throw err;
                                res.status(200).json({success:true,
                                token:`Bearer ${token}`});
                            });
                          }
                          else
                          return res.status(200).json({passwordIncorrect:'Your hospital password is incorrect'});
                      })
                      .catch(err=>console.log(err));
            })
            .catch(err=>console.log(err));
});


/*
@type - POST
@route - /api/auth/register/patient
@desc - a route to register patient
@access - PUBLIC
*/
router.post('/register/patient',(req,res)=>{
Patient.findOne({pEmail:req.body.pEmail})
       .then(patient=>{
           if(patient)
           return res.status.json({patientAlreadyRegistered:'You are already registered'});
           const newPatient=new Patient({
               pName:req.body.pName,
               pEmail:req.body.pEmail,
               pPassword:req.body.pPassword
           });
           bcrypt.genSalt(10,(err, salt)=>{
            bcrypt.hash(newPatient.pPassword, salt, (err, hash)=>{
                if(err)throw err;
                newPatient.pPassword=hash;
                newPatient.save()
                .then(patient=>{
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'sanjaysinghbisht751@gmail.com',
                        pass: 'jay07san@'
                    }
                    });
                    var mailOptions = {};
                    mailOptions.from='sanjaysinghbisht751@gmail.com';
                    mailOptions.to=patient.pEmail;
                    mailOptions.subject=`Thanks ${patient.pName} for creating your account on TrackMyToken`;
                    mailOptions.text=`Welcome to TrackMyToken ! Your credentials are : email - ${patient.pEmail} and password - ${req.body.password}`;
                    transporter.sendMail(mailOptions, (error, info)=>{
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                    });
                            return res.status(400).json(patient);
                        })
                           .catch(err=>console.log(err));
            });
        });
       })
       .catch(err=>console.log(err));
});


/*
@type - POST
@route - /api/auth/register/patient
@desc - a route to register patient
@access - PUBLIC
*/







