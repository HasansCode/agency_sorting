$(function () {

    var dataGlobalArray = []
    let finalResultData = [
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
    ]
    let secondResultData = [
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
        "Aldeire",
        "Calahorra (La)",
        "Dólar",
        "Ferreira",
        "Huéneja",
        "Nevada",
    ]
    let thirdCity = [
        "Adra",
        "Berja",
        "Dalías",
        "Ejido (El)",
        "Albondón",
        "Albuñol",
        "Murtas",
        "Sorvilán",
        "Turón",
        "Ugíjar"
    ]
    $.ajax({
        url: "/rowdata",
        dataType: "json",
        type: "GET",
        success: function (data) {
            //console.log(data);
            dataGlobalArray.push(...data)
        },
        error: function (err) {
            console.log(err.status);
        }
    });


    function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].Población.toLowerCase() == nameKey.toLowerCase()) {
                return myArray[i];
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

    $("#myBtn").on("click", function () {
        let searchQuery = $("#searchName").val();
        //console.log(searchQuery); 
        //console.log(dataGlobalArray);
        var resultObject = search(searchQuery, dataGlobalArray);
        console.log(resultObject);
        finalResultData.splice(0, finalResultData.length)

        for (let i = 0; i < dataGlobalArray.length; i++) {
            // console.log(i);
            let result = getDistanceFromLatLonInKm(resultObject.Latitud, resultObject.Longitud, dataGlobalArray[i].Latitud, dataGlobalArray[i].Longitud);

            if (result < 25) {
                //console.log();
                //console.log(result); 
                let resultPlace = dataGlobalArray[i]

                //resultPlace.destence = result;

                finalResultData.push(resultPlace)
                $("#foo").append(`<pre>"${resultPlace.Población}",</pre>`);
            }

        }

        //console.log(finalResultData + "");
        // $.ajax({
        //     url: "/postquery", // Url of backend (can be python, php, etc..)
        //     contentType: 'application/json',
        //     dataType: 'json',
        //     type: "POST", // data type (can be get, post, put, delete)
        //     data: JSON.stringify({user_data: searchQuery}), // data in json format
        //     cache: false,
        //     async: false, // enable or disable async (optional, but suggested as false if you need to populate data afterwards)
        //     success: function (response, textStatus, jqXHR) {
        //         console.log(response);


        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         console.log(jqXHR);
        //         console.log(textStatus);
        //         console.log(errorThrown);
        //     }
        // });
    });


    let comapre = []

    // for(let i = 0;i<finalResultData.length;i++){
        

    //     // for(let j=0;j<secondResultData.length;j++){
    //     //     // if(finalResultData[i] == secondResultData[i]){
    //     //     //     // console.log(finalResultData[i]);
    //     //     //     comapre.push(finalResultData[i])
                
    //     //     // }
            
    //     // }

    // }
    const intersection = secondResultData.filter(element => finalResultData.includes(element));
        console.log(intersection);
    //console.log(comapre);




    // var array = [
    //     { name:"string 1", value:"this", other: "that" },
    //     { name:"string 2", value:"this", other: "that" },
    //     { name:"string 3", value:"this", other: "that" }
    // ];



})