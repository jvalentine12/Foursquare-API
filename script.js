$(document).ready(function(){
    $("#button").click(function(){
    
        var searchval = $("#search").val();
        
        var part1 = "https://api.foursquare.com/v2/venues/search?"
        var part2 = "client_id=102GA0KW5LFMNCIFOB4I3GRTZ0IEODRDS31RRLSJALEV1SCM&client_secret=DIKMWCOXGUZK3N3TKXV1Z3LOE40WLKT4AEHBEQQFJA5JL5SO&"
        var part3 = "v=20130815&near=40.7,-74&query="
        var URL = part1 + part2 + part3 + searchval ;
        
        $.getJSON(URL,function(response){
           console.log(response)
            var name = response.response.venues[0].name
            var phone = response.response.venues[0].contact.phone
            var address = response.response.venues[0].location.address
            $("#results").append("<br>" + name + "<br>" + phone + "<br>" + address);
            
        });
    });
});
