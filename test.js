// const request = require("request")
// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt"
// request({url , JSON :true},(error,response)=>{
// if(error){
//   console.log("ERROR WAS OCCURED")
// }
// else if(response.body.error){
//   console.log(response.body.error.message)
// }
// else {
//   console.log(response.body.location.name,response.body.current.condition.text)
// }
// })
//////////////////////////////////////////////////////////////////////////////////////////////
const request = require("request")
const geocodeurl="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

request({url:geocodeurl,json:true},(erorr,response)=>{
    if(erorr){
        cancelIdleCallback()
       // console.log("unable to connect to site")
    }
    else if(response.body.erorr){
        console.log(response.body.erorr.message)
    }
    else{
        //console.log(response.body.location.name,response.body.current.condition.text)
        const longtitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude , longtitude)
    }
})
//////////////////////////////////////////////////////////////////////////////////
//const request = require("request")
const forcast=(latitude,longtitude,callback)=>{
const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+latitude+","+longtitude
request({url , JSON :true},(error,response)=>{
if(error){
  //console.log("ERROR WAS OCCURED")
  callback("ERROR WAS OCCURED",undefined)
}
else if(response.body.error){
  //console.log(response.body.error.message)
  callback(response.body.error.message,undefined)
}
else {
    callback(undefined,response.body.location.name,response.body.current.condition.text)
  //console.log(response.body.location.name+" it is "+response.body.current.condition.text)
}
})
}
forcast( data.latitude , data.longtitude , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : " , data)
 } )





