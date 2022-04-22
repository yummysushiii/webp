$(document).ready(function(){
     $.ajax({
        method: "GET",
        url:'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=30&%24format=JSON', 
     })
     .done(function(msg){
         console.log(msg);
         var time;
         var total = 0;
         for(var i = 0; i < 20; i++){
            price = msg[i].Fares[0].Price;
            station = msg[i].DestinationStationName.Zh_tw;
            time = msg[i].TravelTime - total;
            
            $("#rail").append($("<n>", {id: i}));
            $("#" + i).append("--->" + "time:" + time + "min price:" + price + station);
            total = msg[i].TravelTime;
         }
     })
})

