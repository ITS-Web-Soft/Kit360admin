$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#product-form").validator();


  // when the form is submitted
  $("#product-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
      // https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

      var messageAlert = "alert-success";
      var messageText =
        "Your message was sent, thank you. I will get back to you soon.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#product-form").find(".messages").html(alertBox);
        // empty the form
        $("#product-form")[0].reset();
      }

      return false;
    }
  });
});
//table funtion
$(function () {
  $('#example').dataTable({
    paging: false,
    fixedHeader: {
      header: true
    },
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'excel',
        text: 'Excel <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
      },
      {
        extend: 'pdf',
        text: 'PDF <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
      },
      
      'copy',
      'pdf',
      'colvis'
    ],
    
  });
});

    $(function () {
        $('#category-table').dataTable({
          paging: false,
          fixedHeader: {
            header: true
          },
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'excel',
              text: 'Excel <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
            },
            {
              extend: 'pdf',
              text: 'PDF <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
            },
            
            'copy',
            'pdf',
            'colvis'
          ],
          
        });
      });
//table funtion end
//On click btn          
function divToggle(id) {
  //console.log("divToggle: "+document.getElementById(id).className);
  if(document.getElementById(id).className=='d-none') {
    document.getElementById(id).classList.remove('d-none');
    document.getElementById(id).classList.add('d-show');
  }
  else {
    document.getElementById(id).classList.remove('d-show');
    document.getElementById(id).classList.add('d-none');
  }
}
//on click end   
// btn color change script
    $(document).ready(function(){

$(".pushme").click(function () {
$(this).text("DON'T PUSH ME");
});

$(".pushme-with-color").click(function () {
$(this).text("DON'T PUSH ME");
$(this).addClass("btn-danger");
$(this).removeClass("btn-warning");
});

$(".with-color").click(function () {    
if($(this).hasClass("btn-warning"))
{
   $(this).addClass("btn-danger");
   $(this).removeClass("btn-warning");
}
else{
   $(this).addClass("btn-warning");
   $(this).removeClass("btn-danger");
}
});

$(".pushme").click(function(){
$(this).text(function(i, v){
return v === 'Add Product' ? 'Show Table' : 'Add Product'
});
});
});
//end
function goNextTab(currtab, nexttab) {

  var curr = $('li.active');

  curr.removeClass('active');
  if (curr.is("li:last")) {
      $("li:first-child").addClass('active');
  } else {
      curr.next().find("a").click();
      curr.next().addClass('active');
  }



  $('#' + currtab).attr('aria-expanded', 'false');
  $('#' + nexttab).attr('aria-expanded', 'true');

}

