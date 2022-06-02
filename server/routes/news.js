
const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


//User model
const User = require('../models/User');

newsr.post('/news', (req, res) => {
    const {name, surname, email, password, password2} = req.user;
});

newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?'  +
          'country=us&' + 'language=en&' +'from=2022-05-18' + '&'  +  'sortBy=popularity&'+
          'apiKey=45034baabd62474c8d51d6ca7c41c259';

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    //console.log(req.body.search)


    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=45034baabd62474c8d51d6ca7c41c259`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})





    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get('/news/:category',async(req,res)=>{
    var category = req.params.category;
    try {
        var url = 'http://newsapi.org/v2/top-headlines?country=us&language=en&category=' + category + '&apiKey=45034baabd62474c8d51d6ca7c41c259';

        const news_get =await axios.get(url)
        res.render('category',{articles:news_get.data.articles})

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

newsr.get

module.exports=newsr