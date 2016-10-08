$(function () {
    $('#loaded').html((new Date()).toTimeString());
    $('#makeajax').click(function()  {
       $('#ajaxresult').load('data.html');
    });
    
    // makeajax.addEventListener('click', function(e) {
    //   e.preventDefault();
    //   var xhr = new XMLHttpRequest();
    //   xhr.onreadystatechange = function() {
    //       if (xhr.readyState === 4 && xhr.status === 200 ) {
    //           ajaxresult.innerHTML = xhr.responseText;
    //       }
    //   }
    //   xhr.open('GET', 'data.html', true);
    //   xhr.send();
    // });
    
});