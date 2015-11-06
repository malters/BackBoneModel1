var Restaurante = Backbone.Model.extend({
  defaults: {
	nombre: '',
	telefono: '',
	direccion: 0
  }
});

var restaurante1 = new Restaurante({
  nombre: 'Novodabo',
  telefono: '111 11 11 11',
  direccion: 'Plaza Arag�n'
});

$('#restaurante1-nombre').html(restaurante1.get('nombre'));
$('#restaurante1-telefono').html(restaurante1.get('telefono'));
$('#restaurante1-direccion').html(restaurante1.get('direccion'));

var restaurante2 = new Restaurante({
  nombre: 'Molino de San L�zaro',
  telefono: '222 22 22 22',
  direccion: 'Sin direcci�n'
});

$('#restaurante2-nombre').html(restaurante2.get('nombre'));
$('#restaurante2-telefono').html(restaurante2.get('telefono'));
$('#restaurante2-direccion').html(restaurante2.get('direccion'));