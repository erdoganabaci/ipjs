fetch("https://ipinfo.io/json")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);

        }
        return response.json();

    })
    .then(function(myJson) {
        //document.getElementById("changeDayi").innerHTML = JSON.stringify(myJson);
        document.getElementById("ipAdress").innerHTML = "Ip Adress: " + myJson.ip;
        document.getElementById("hostName").innerHTML = "Hostname: " + myJson.hostname;
        document.getElementById("city").innerHTML = "City: " + myJson.city;
        document.getElementById("org").innerHTML = "Organization: " + myJson.org;
        document.getElementById("postal").innerHTML = "Postal Code: " + myJson.postal;
        document.getElementById("timezone").innerHTML = "Timezone: " + myJson.timezone;




        console.log(myJson.ip);
        //var ip = String(myJson.ip);
        //document.getElementById("changeDayi").innerHTML = ip;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });