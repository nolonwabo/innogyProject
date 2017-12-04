var plumberTemp = document.querySelector('.plumberTemplate').innerHTML;
var plumbersTemp = Handlebars.compile(plumberTemp);

 var plumberList = document.querySelector('#plumbersList').innerHTML;
 var plumberInstance = Handlebars.compile(plumberList);

var table = document.getElementById('output');
var bookedPlumb = document.getElementById('display');

var addPlumberBtn = document.querySelector('#reg');
if(addPlumberBtn){
addPlumberBtn.addEventListener('click', function(){
  var final = '';
  var slot = '';
   $('.day:checked').each(function(){
       var values = $(this).val();
       final += values;
   });
   $('.slots:checked').each(function(){
     var values = $(this).val();
     slot += values;
   });
  var nameV = document.querySelector('.name').value;
  var contact_detailsV = document.querySelector('.contact_details').value;
  var weekDays = document.querySelector('.day').value;
  var slots = document.querySelector('.slots').value;

$.ajax({
         url: '/api/register',
         type: 'POST',
         async: true,
         dataType: "json",
         data: {
           name: nameV,
           contact_details: contact_detailsV,
           days: final,
           slots: slot
         },
         success: function(data) {
           showAllPlumbers();
         },
         error: function(error) {
           console.log(error);
           alert(error);
         }
     });
   })
 }


     function showAllPlumbers() {
       $.ajax({
         url: '/api/register',
         type: 'GET',
         success: function(allPlumbers) {
           table.innerHTML = plumberInstance({
             plumberData: allPlumbers.data
           })
         }
       });
     }
     showAllPlumbers();

     function bookPlumber(id) {
       $.ajax({
         url: '/api/plumbers/:id' + id,
         type: 'GET',
         success: function(bookedPlumber) {
           bookedPlumb.innerHTML =  plumbersTemp({
             plumberBooked: bookedPlumber.data
           })
         },
         error: function(error) {
           alert('error')
         }
       })
       showAllPlumbers();
     }
