export default class {
    static getMap(zipCode, deviceWidth) {
        return {
            mapUrl: "https://maps.googleapis.com/maps/api/staticmap?center=%7B%7B" + zipCode + "%7D%7D&zoom=11&size=" + deviceWidth + "x200&maptype=roadmap&scale=2"
        };
    }

    static async getDistanceAndDuration(zipCode) {
        var promise = new Promise((resolve, reject) =>{
            navigator
            .geolocation
            .getCurrentPosition(function (pos) {
                let rest;
                fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+pos.coords.latitude+","+pos.coords.longitude+"&destinations="+zipCode+"&key=[API KEY]")
                .then(res =>{
                    resolve(res)
                })
                .catch(err =>{
                    reject(err)
                })
            });
        })
        return promise;
    }
}