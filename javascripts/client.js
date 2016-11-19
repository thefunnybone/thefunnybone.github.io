$( document ).ready(function() {
    $("#clickpic").click(function(event){
    	event.preventDefault()
    	$(".pictures").css('display', 'block')
    })

    $(".gallery-text").click(function(event){
    	event.preventDefault()
    	$(".pictures").css('display', 'none')
    })

    $("#hannah").click(function(event){
    	event.preventDefault()
    	$(".hpic").css('display', 'block')
    })

    $("#pep").click(function(event){
    	event.preventDefault()
    	$(".ppic").css('display', 'block')
    })
});