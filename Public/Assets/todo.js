$(document).ready(function(){

     $('form').on('submit', function(){

           var item = $('form input');
           var todo = {item: item.val()};

           $.ajax({
               type: 'POST',
               url: '/todo',
               data: todo,
               success: function(data){
                location.reload();
               } 
           });

           return false;
     });

     $('li').on('click', function(){
         var item = $(this).text().replace(/ /g, "-");
         $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                location.reload();
            }
         });
     });
})

var dBtn = document.createElement("submit");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


	//delete function
	function deleteListItem(){
		li.classList.add("delete")
	}