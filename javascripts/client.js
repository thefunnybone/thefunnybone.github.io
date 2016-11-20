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
        $('body').animate({backgroundColor: '#019875', color: 'white'}, 'slow');
    })

    $("#pep").click(function(event){
    	event.preventDefault()
    	$(".ppic").css('display', 'block')
    	$('body').animate({backgroundColor: '#351A44', color: 'white'}, 'slow');
    })

    $("#contact-us-header").click(function(event){
    	event.preventDefault()
    	$('body').animate({backgroundColor: '#FAEBD7', color: 'black'}, 'slow');
    })

});