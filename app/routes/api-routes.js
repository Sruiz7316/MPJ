const express = require("express");
const app = express();
const db = require("../../models");
const passport = require("../../config/passport.js");

    app.post("/api/login", passport.authenticate("local"), function(req, res){
        return res.status(200).json("Login sucessful");
    })

    app.post("/api/signup", function(req, res){
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.status(201).json('Signup successful');
        }).catch(function(err){
            console.log("error occured", err)
            res.json(err);
        })
    })

    app.get("/logout", function(req, res){
        req.logout();
        res.redirect("/");
    })

    module.exports = app;

