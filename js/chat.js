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
		},4000);
	}
	else{
		$('input').fadeIn();
		$('input').focus();
	}
});

socket.on('message', function (data){

	console.log(data);

});