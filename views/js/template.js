$(async function () {
    
    dataGlobalArray=[]
    let k = 0;
    
    $.ajax({
        url: "/rowdata",
        dataType: "json",
        type: "GET",
        success: function (data) {
            dataGlobalArray.push(...data)
        },
        error: function (err) {
            console.log(err.status);
        }
    });
   /*
   agency_1: [
            "Abla",
            "Abrucena",
            "Alboloduy",
            "Alcolea",
            "Alhabia",
            "Almócita",
            "Alsodux",
            "Bayárcal",
            "Beires",
            "Bentarique",
            "Canjáyar",
            "Fiñana",
            "Fondón",
            "Gérgal",
            "Huécija",
            "Illar",
            "Instinción",
            "Láujar de Andarax",
            "Nacimiento",
            "Ohanes",
            "Padules",
            "Paterna del Río",
            "Rágol",
            "Santa Cruz de Marchena",
            "Terque",
            "Tres Villas (Las)",
            "Dólar",
            "Ferreira",
            "Huéneja",
        ],
        agency_2:[
            "Adra",
            "Berja",
            "Dalías",
            "Ejido (El)",
            "Albondón",
            "Albuñol",
            "Murtas",
            "Sorvilán",
            "Turón",
            "Ugíjar",
        ] 
    */

    let agencyObj = {}

    function filterOccurrences(arr, n) {
        // Object to store occurrences of values
        const occ = {};
      
        // Return array after filter
        return arr.filter(val => {
          // If occurances object already contains current value
          if (occ[val]) {
            // Add +1 count to number of occurances of value
            occ[val]++;
          } else {
            // Else add key with count 1
            occ[val] = 1;
          }
      
          // Return boolean whether to include current value or not
          return occ[val] <= n;
        });
      }


    function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].toLowerCase() == nameKey.toLowerCase()) {
                return true;
            }
        }
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1); 
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    $("#myBtn").on("click",function(){
        const t0 = performance.now();
        console.log(dataGlobalArray);

        for (let i = 0; i < dataGlobalArray.length;) {
           
            console.log(i);
            //let keyArry = Object.keys(agencyObj);
           
            let lengthArr = []
            for (const [key, value] of Object.entries(agencyObj)) {
                
                lengthArr.push(...value)

              }
            

            let finalArr = filterOccurrences(lengthArr, 1);
            //console.log(finalArr.length);
            
            if(!search(dataGlobalArray[i].Población,finalArr)){
                finalResultData=[]
                k++;
                
                for(let z = 0; z<dataGlobalArray.length;z++){
                    let result = getDistanceFromLatLonInKm(dataGlobalArray[i].Latitud, dataGlobalArray[i].Longitud, dataGlobalArray[z].Latitud, dataGlobalArray[z].Longitud);

                    if (result < 25) {
        
                        finalResultData.push(dataGlobalArray[z].Población)
                        //console.log({name: dataGlobalArray[z],lof: result});

                        //$("#foo").append(`<pre>"${resultPlace.Población}",</pre>`);
                }

                }
                
                //console.log(finalResultData);
                agencyObj[`agency_${k}`] = finalResultData;
                
                //console.log(agencyObj.numKey);
               
                

            }






             //const children = [...new Set([...agencyObj.agency_1,...agencyObj.agency_2])]; 
            // console.log(children);
           /*
            let result = getDistanceFromLatLonInKm(resultObject.Latitud, resultObject.Longitud, dataGlobalArray[i].Latitud, dataGlobalArray[i].Longitud);

            if (result < 25) {
                //console.log();
                //console.log(result); 
                let resultPlace = dataGlobalArray[i]

                //resultPlace.destence = result;

                finalResultData.push(resultPlace)
                $("#foo").append(`<pre>"${resultPlace.Población}",</pre>`);
            }*/
            // for (var l = 0; l < agencyObj.agency_1.length && agencyObj.agency_2.length; l++) {
            //     if (agencyObj.agency_1[l].toLowerCase() !== dataGlobalArray[i].Población.toLowerCase()) {
            //        // return myArray[i];
            //        console.log(agencyObj.agency_1[l]);
            //        console.log(dataGlobalArray[i].Población);
            //     }
            // }


            i++;
        }

        
        // let minArr=[]

        // for (const [keyg, valueg] of Object.entries(agencyObj)) {  
        //     minArr.push(...valueg)
        // }
        // let grabage = filterOccurrences(minArr, 1);
        // console.log(grabage.length);
        

        //const intersection = secondResultData.filter(element => finalResultData.includes(element));

        console.log(agencyObj);
        const t1 = performance.now();
        console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
      



    })

    

    
    






   

    // for(let i = 0;i<finalResultData.length;i++){
        

    //     // for(let j=0;j<secondResultData.length;j++){
    //     //     // if(finalResultData[i] == secondResultData[i]){
    //     //     //     // console.log(finalResultData[i]);
    //     //     //     comapre.push(finalResultData[i])
                
    //     //     // }
            
    //     // }

    // }
    // const intersection = secondResultData.filter(element => finalResultData.includes(element));
    //     console.log(intersection);
    //console.log(comapre);


    




    



})