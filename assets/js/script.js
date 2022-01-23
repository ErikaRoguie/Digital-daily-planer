//header is wider with keep what is there and add date and time to it
document.getElementById("currentDay").innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//line of blocks under header and spaced on center
// top is date and then each block has a time associated with 
// times are from 9-5( 8 time blocks)
let dt = moment();
dt.format("HH:mm");
var line = ["9", "10", "11", "12", "13", "14", "15", "16"]
console.log(line)



for (let i = 0; i < line.length; i++) {
    var id = "#" + line[i]
var storage = localStorage.getItem(line[i])
   $(id).children(".col-10").children("textarea").val(storage);
        if (line[i] == moment().hours()) {
      $(id).addClass('present')
        } else if(line[i] < moment().hours()) {
            $(id).addClass("past")
        }
    
    
     else {
        $(id).addClass("future")
        }
    };
$(".saveBtn").on("click", function() {
 var data=$(this).parent().siblings(".col-10").children("textarea").val();
    var hour=$(this).parent().parent().attr("id")
    localStorage.setItem(hour, data);
})




//getParent go to sibling grab textarea