
function changebackground1() {
    var x = document.getElementsByClassName("module parallax parallax-1")[0];
    x.style.backgroundImage = "url(img/demo/_small/IntoAthaya.jpg)";
}

function mvrPower() {
    //Listen when a button, with a class of "myButton", is clicked
    
    //Send the AJAX call to the server
      $.ajax({
      //The URL to process the request
        'url' : 'http://mvr-androidmessages.us-west-2.elasticbeanstalk.com/androidmessages.php',
      //The type of request, also known as the "method" in HTML forms
      //Can be 'GET' or 'POST'
        'type' : 'GET',
      //Any post-data/get-data parameters
      //This is optional
      /*  'data' : {
          'paramater1' : 'value',
          'parameter2' : 'another value'
        },
      */
      //The response from the server
        'success' : function(data) {
        //You can use any jQuery/JavaScript here!!!
          if (data == "success") {
            alert('request sent!');
          }
        }
      });
    }

/* function contactLink() {
    //var conts = document.getElementsByClassName("container");
    var mods = document.getElementsByClassName("module");

    while (i < 3) {
    mods[0].parentNode.removeChild(mods[0]);
    i++
    }
    
    //containers[3].parentNode.removeChild(containers[3]);

}

*/
