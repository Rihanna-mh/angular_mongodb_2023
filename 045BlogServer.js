var express = require('express');
var mongodb = require('mongoose');
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongodb.connect('mongodb+srv://rihanna88:gjrrZ01ThvSjUEKi@cluster0.r7z6r8r.mongodb.net/MyFirstMongoDb?retryWrites=true&w=majority');

// schema for BlogInfo
var BlogInfoSchema = mongodb.Schema({
    Author_name: String,
    Headline: String,
    Industry: String,
    Body: String,
    Introduction: String,
    H2_1: String,
    H2_1_para: String,
    H2_2: String,
    H2_2_para: String,
    H2_3: String,
    H2_3_para: String,
    H2_4: String,
    H2_4_para: String,
    H2_5: String,
    H2_5_para: String,
    Conclusion: String,
});

var BlogInfo = mongodb.model('bloginfos', BlogInfoSchema)

app.get('/', async function(req,res){
    res.send("Welcome to the home page");
});

app.post('/save_data',cors(), async function(req,res){
    console.log(req.body.industry)
    var Newblog = new BlogInfo({
        Author_name : req.body.blog_author,
        Headline : req.body.blog_headline,
        Industry : req.body.blog_industry,
        Body : req.body.blog_body,
        Introduction: req.body.blog_intro,
        H2_1: req.body.blog_h2_1,
        H2_1_para: req.body.blog_h2_1_para,
        H2_2: req.body.blog_h2_2,
        H2_2_para: req.body.blog_h2_2_para,
        H2_3: req.body.blog_h2_3,
        H2_3_para: req.body.blog_h2_3_para,
        H2_4: req.body.blog_h2_4,
        H2_4_para: req.body.blog_h2_4_para,
        H2_5: req.body.blog_h2_5,
        H2_5_para: req.body.blog_h2_5_para,
        Conclusion: req.body.blog_conc,
    });
    var saved_info = await Newblog.save()
    res.send("Data saved");
});

app.get('/get_one_filtered_record', async function (req,res) {
    console.log(req.query.u_filter)
  var filter_data = req.query.u_filter
  const alluser = await BlogInfo.find({Industry: filter_data});
  if (alluser){
    //   var my_data_string = alluser.Headline  ;
      return res.status(200).json(alluser);
      
  }
  else{
      var my_data_string = "No data for this filter"
      return res.status(200).json(my_data_string);
  }
  
  })

  app.get('/get_all_data', async function (req,res) {
    const alluser = await BlogInfo.find();
    return res.status(200).json(alluser);

  })

app.listen(9000);