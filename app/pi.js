module.exports = function() { 

var PI = {
        somaDoisNumeros : function( num1, num2 ){
			return Number(num1) + Number(num2);
		},

        diminuir10: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },      
        
                diminuir9: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },  
                diminuir8: function(numero) {
                    var valor = Number(numero);
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;
                    valor -= 1;

                    return valor;
        },  
        
        subtraiDoisNumeros: function(num1,num2) {
                var resultado= Number(num1)-Number(num2);
                return resultado;             
        },
        
        multiplicaDoisNumeros: function(num1,num2) {
                var resultado= Number(num1)*Number(num2);
                return resultado;             
        },
        
        divideDoisNumeros: function(num1,num2) {
                var resultado= Number(num1)/Number(num2);
                return resultado;             
        }
            };
return PI;
};
