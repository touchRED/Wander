var socket = io.connect('http://localhost:8080/');

var message;

$('#body').keypress(function(event){
	if(event.which == 13){
		message = $('input').val();
		socket.emit('chat', message);
		//console.log(message);
		$('input').val("");
		$('input').fadeOut();
		$('p#said').text(message);
		$('p#said').fadeIn();
		setTimeout(function(){
			$('p#said').fadeOut();
		},6000);
	}
	else{
		$('input').fadeIn();
		$('input').focus();
	}
});

socket.on('message', function (data){

	var bubble = $('<h1 class = '+data.id+' >'+data.data+'</h1>').appendTo('#bubbles');
	setTimeout(function(){
		$('h1.'+data.id+'').fadeOut();
		$('h1.'+data.id+'').css('display:none');
	},6000);

});