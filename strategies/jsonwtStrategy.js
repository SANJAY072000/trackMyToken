// importing the required modules
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


// fetching the setup file
const config=require('../setup/config');


// fetching the schema
const Hospital=require('../models/Hospital'),
Patient=require('../models/Patient');


// configuring the strategy
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secret;


// exporting the strategy
module.exports=passport=>{
passport.use(new JwtStrategy(opts,(jwt_payload, done)=>{
    Hospital.findById(jwt_payload.id)
            .then((err,hospital)=>{
                if (hospital)
                    return done(null, hospital);
                else
                    return done(null, false);
    })
    .catch(err=>console.log(err));
    Patient.findById(jwt_payload.id)
           .then((err,patient)=>{
               if(patient)
               return done(null,patient);
               else
               return done(null,false);
           })
           .catch(err=>console.log(err));
}));
};

