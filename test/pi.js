var PI = require( "../app/pi.js" )();
var expect = require( 'chai' ).expect;

describe( "PI", function() {

    
    describe( "Calculos", function() {
        it( "Deveria retornar 5 ao somar 2 + 3", function(){
            var valorEsperado = 5;    
            var valorRetornado = PI.somaDoisNumeros( 2, 3 );
            expect( valorEsperado ).to.equal( valorRetornado );
        });
        
        it('Deve retornar 1 quando for passado o numero 10', function() {
			var numero = 10;

			var resultado = PI.diminuir10(numero);
            var valorEsperado=1;
            expect( valorEsperado ).to.equal( resultado );
		});
                it('Deve retornar 1 quando for passado o numero 9', function() {
			var numero = 9;

			var resultado = PI.diminuir9(numero);
            var valorEsperado=1;
            expect( valorEsperado ).to.equal( resultado );
		});
                it('Deve retornar 1 quando for passado o numero 8', function() {
			var numero = 8;

			var resultado = PI.diminuir8(numero);
            var valorEsperado=1;
            expect( valorEsperado ).to.equal( resultado );
		});
});

});
