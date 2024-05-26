const StudentModel = require("../student/student.model")
const moment = require("moment")
const axios = require("axios")
const SendPaymentMessage = async () => {
    try{
        let student = await StudentModel.find({}).populate('group', "name")
        
        for(let i of student){
            let text = 
            `Technoback.uz\n
            Hurmatli : ${i.fullname} sizning ${moment().format("MMMM")} oyning tolovini 
            amalga oshirishingizni so'raymiz\nGuruh: ${i.group.name}`
            let body = {
                mobile_phone: `998${i.phone}`,
                message: text,
                from : 4546
            }

            axios.post("https://notify.eskiz.uz/api/message/sms/send", {
                headers: {
                    authorization: `Bearer TOKEN_IS_REQUIRED`
                },
                data: body
            }).then((res)=>{console.log(res.data)})
            .catch((err)=>console.log(err));
            
        }          
           
    }catch(err) {
        return res.status(400).json(err)
    }
}


module.exports ={
    SendPaymentMessage
}