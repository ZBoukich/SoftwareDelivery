/**
 * Created by Godfather on 13-5-2016.
 */


var request = require('supertest');
var app = require('C:/Users/Godfather/IdeaProjects/SoftwareDelivery/app.js');


describe( 'GET /', function(){
    it('respond with hello world',function(done){
        request(app).get('/').expect('Testing',done);
    });
});