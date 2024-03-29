const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const loan_schema = new Schema({

    "member_id" : {type:Number}, 
    "loan_amnt" : {type:Number}, 
    "funded_amnt_inv" : {type:Number}, 
    "term" :  {type:String},  
    "int_rate" : {type:Number}, 
    "installment" : {type:Number}, 
    "grade" : {type:String}, 
    "emp_title" :  {type:String}, 
    "emp_length" :  {type:String}, 
    "home_ownership" :  {type:String}, 
    "annual_inc" : {type:Number}, 
    "verification_status" :  {type:String}, 
    "issue_d" :  {type:String},  
    "loan_status" :  {type:String},  
    "desc" :  {type:String}, 
    "purpose" :  {type:String}, 
    "title" :  {type:String}, 
    "addr_state" :  {type:String}, 
    "last_pymnt_d" :  {type:String}, 
    "last_pymnt_amnt" :  {type:String}, 
},
{
        collection:'leadingclub',
    })

module.exports = mongoose.model("loan_schema",loan_schema)