var addPlumberBtn = document.querySelector('.add-plumber-btn');
addPlumberBtn.addEventListener('click', function(){
  var nameV = document.querySelector('.name');
    var contact_detailsV = document.querySelector('.contact_details');



$.ajax({
         url: '/api/register',
         type: 'POST',
         async: true,
         dataType: "json",
         data: {
           name: nameV.value,
           contact_details: contact_detailsV.value,
         },
         console.log("0000000000000");
         success: function(data) {
         },
         if(responseStatus=="success"){
             window.location= "./layout/work.html";
         }
         error: function(error) {
           console.log(error);
           alert(error);
         }
       })
     });


     function showAllPlumbers() {
       $.ajax({
         url: '/api/plumber',
         type: 'GET',
         success: function(allPlumbers) {
           table.innerHTML = shoesList({
             shoeData: allShoes.data
           })
         }
       });
     })
