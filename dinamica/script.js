$(document).ready(function(){
	
	/* Inserir novo tema na lista de aprendidadas*/
	$("#inserir").click(function(){
		var tema = $("#input").val();
		inserirTema(tema);
	});
		
});

var inserirTema = function(tema) {
	var linha = tema + "<div style='clear: both'></div>";
	$("#aprender").after(linha);
}