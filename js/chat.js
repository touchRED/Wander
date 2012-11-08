var socket = io.connect('http://localhost:8080/');

var message;

$('#body').keypress(function(event){
	if(event.which == 13){
		message = $('input').val();
		socket.emit('move', message);
		//console.log(message);
		$('input').val("");
		$('input').fadeOut();
	}
	else{
		$('input').fadeIn();
		$('input').focus();
	}
});

socket.on('moving', function (data){

	console.log(data);

});