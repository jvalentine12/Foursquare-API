$(document).ready(function(){
    $("#button").click(function(){
    
        var searchval = $("#search").val();
        console.log(searchval)
        var part1 = "https://api.foursquare.com/v2/venues/search?"
        var part2 = "client_id=102GA0KW5LFMNCIFOB4I3GRTZ0IEODRDS31RRLSJALEV1SCM&client_secret=DIKMWCOXGUZK3N3TKXV1Z3LOE40WLKT4AEHBEQQFJA5JL5SO&"
        var part3 = "v=20130815&near=40.7,-74&query="
        var URL = part1 + part2 + part3 + searchval ;
        alert(URL);
        $.getJSON(URL,function(response){
           
            var name = response.venues.name[0]
            var phone = response.venues.contact.phone
            var address = response.venues.location.address
            $("#results").append("<br>" + name + "<br>" + phone + "<br>" + address);
            console.log(response)
        });
    });
});