//jekueri tolong cari kan saya navling
// dimana saat di clik jalan kan fungsi berikut ini
$('.nav-link').on('click', function () {

  //jekueri tolong carikan saya klas navling hapus class 'active'
  // tersebut
  $('.nav-link').removeClass('active');

  //dan class yang diklik ini / class yang bersangkutan
  //tambah klas 'active'
  $(this).addClass('active');

  let kategori = $(this).html();
  $('h1').html(kategori);



});