$( document ).ready(function() {
    $("#clickpic").click(function(event){
    	event.preventDefault()
    	$(".pictures").css('display', 'block')
    })

    $(".gallery-text").click(function(event){
    	event.preventDefault()
    	$(".pictures").css('display', 'none')
    })
});