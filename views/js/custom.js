
let selectedFile;
$(function () {
//    $("#getxlxs").on('change',function(event){
//     //console.log(event.target.files);
//     selectedFile = event.target.files[0]
    
//    })

//    $("#myBtn").on('click',function(){
//     let fileReader = new FileReader();
//     fileReader.readAsBinaryString(selectedFile)
//     fileReader.onloadend = (eventTwo)=>{
//         //console.log(eventTwo.target.result);
//         let data = eventTwo.target.result
//         let wordbook = XLSX.read(data,{type: "binary"})
//         //console.log(wordbook.Sheets.Hoja1);
        
//         let rawObject = XLSX.utils.sheet_to_row_object_array(wordbook.Sheets.Hoja1)
//         //console.log(rawObject);




//         $.ajax({
//             url: "/postquery", // Url of backend (can be python, php, etc..)
//             contentType: 'application/json',
//             dataType: 'json',
//             type: "POST", // data type (can be get, post, put, delete)
//             data: JSON.stringify(rawObject), // data in json format
//             cache: false,
//             async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
//             success: function (response, textStatus, jqXHR) {
//                 console.log(response);
//                 // setTimeout(() => {
//                 //     getValidStatus()
//                 // }, 3000);
                
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//                 console.log(textStatus);
//                 console.log(errorThrown);
//             }
//         });
//     }

//    })


});


/*

$.ajax({
            url:"/status",
            dataType: "json",
            type:"GET",
            success: function(data){
                //console.log(data);
                //return data
                data.forEach(e => {
                    // console.log("am get req");
                    if(e.validation == "NOT IDENTIFIED"){
                        console.log("iam if");
                        $('#validetion_deactector').text(`${e.validation}`);
                        $('#suggestion_text').text(`:( Suggestion:  ${e.who_is}`)
                    }else{
                        console.log("iam else");
                        $('#validetion_deactector').text(`${e.validation}`)
                    }                    
                });
                // if(data == undefined){
                //     getValidStatus()
                // }else{
                //     console.log(data);
                    
               // return data

                // }
            },
            error: function(err){
                console.log(err.status);
            }
        });
 */





/*
$.ajax({
                    url: "/postquery", // Url of backend (can be python, php, etc..)
                    contentType: 'application/json',
                    dataType: 'json',
                    type: "POST", // data type (can be get, post, put, delete)
                    data: JSON.stringify({user_data: str}), // data in json format
                    cache: false,
                    async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
                    success: await function (response, textStatus, jqXHR) {
                        console.log(response);
                        setTimeout(() => {
                            getValidStatus()
                        }, 3000);
                        
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                    }
                });
 */
