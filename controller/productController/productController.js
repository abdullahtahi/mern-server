const { response,request } = require("express")

exports.getProduct=(request,response)=>{
    response.status(200).json({
        success:true,
        message:'this is a all product route'
    })
}
exports.getSingleproduct=(request,response)=>{
response.status(200).json({
    success:true,
    message:"This is a  Single product route"
})
}