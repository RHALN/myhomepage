$(document).ready(function () {
  clockUpdate();
  setInterval(clockUpdate, 1000);

  $('.text').keyup(function (e) {
    var val = $(this).val();
    if (e.keyCode == 13) {
      window.open(`https://www.google.com/search?q=${val}`, '_blank');
    }
  });

  // function
  function clockUpdate() {
    var d = new Date();
    var dayArray = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var monthArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];


    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }

    function addColorPalette(val) {
      $('body').addClass('body-' + val);
      $('.timestamp').addClass('timestamp-' + val);
      $('.message').addClass('message-' + val);
    }

    function removeColorPalette(val) {
      $('body').removeClass('body-' + val);
      $('.timestamp').removeClass('timestamp-' + val);
      $('.message').removeClass('message-' + val);
    }

    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var Day = d.getDay();
    var myDate = d.getDate();
    var Month = d.getMonth();
    var Year = d.getFullYear();

    $('.time').html(h + '.' + m + '<small>.' + s + '</small>');
    $('.date').html(`${dayArray[Day]}, ${myDate} ${monthArray[Month]} ${Year}`);

    if (h > 5 && h < 12) {
      $('.say-hello').html('Good Morning');
      $('.view-message').html('Sebuah pagi tidak lengkap jika tanpa senyumanmu.');
      $('.fa-moon').hide();
      $('.fa-sun').show();
      removeColorPalette('night');
      addColorPalette('morning');
    } else if (h > 12 && h < 17) {
      $('.say-hello').html('Good Afternoon');
      $('.view-message').html('Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.');
      $('.fa-moon').css("right", "25px");
      $('.fa-moon').css("font-size", ".8rem");
      $('.fa-sun').css("right", "45px");
      $('.fa-sun').css("font-size", ".9rem");
      removeColorPalette('morning');
      addColorPalette('afternoon');
    } else {
      $('.say-hello').html('Good Night');
      $('.view-message').html('Semoga tidurmu dan istirahatmu hingga pagi menyapa nanti, menjadikan sebuah senyum cerah di wajah cantikmu.');
      $('.fa-sun').hide();
      $('.fa-moon').show();
      removeColorPalette('afternoon');
      addColorPalette('night');
    }
  }
});
