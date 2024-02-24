/*console.log('Starting')


setTimeout(() => {
    console.log('2 Second Timer')
},2000)
setTimeout(() => {
    console.log('0 Second Timer')
},0)

console.log('Stopping')

const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a+b)
    },2000)
}
add(1,4, (sum) => {
    console.log(sum)
})*/
const request =require('request')

const geocode = (adress,callback) =>{
    const url = "Va;;s"

    request({url: url, json: true},(error,response) =>
        {
            if(error)
            {
                callback("balls",undefined)

            }
            else if(response.body.features.length === 0)
            {
                callback("bakks1",undefined)
            }
            else
            {
                callback(undefined,{latitude:1,longitude:1})
            }
        })

}

geocode('new york',(error,data) => {
    console.log('Error',error)
    console.log('Data',data)
})
