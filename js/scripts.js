$(document).ready(function() {
    $(".addition").click(function(event) {
        let input1 = ($("#firstnumber").val());
        let input2 = ($("#secondnumber").val());
        let  result = parseInt(input1) + parseInt(input2);
        event.preventDefault()
       alert(result)
       $("#result").text(result);
       
      });

      $(".subtract").click(function(event) {
        let input1 = ($("#firstnumber").val());
        let input2 = ($("#secondnumber").val());
        let  result = parseInt(input1) - parseInt(input2);
        event.preventDefault()
       alert(result)
       $("#result").text(result);
       
      });

      $(".multiply").click(function(event) {
        let input1 = ($("#firstnumber").val());
        let input2 = ($("#secondnumber").val());
        let  result = parseInt(input1) * parseInt(input2);
        event.preventDefault()
       alert(result)
       $("#result").text(result);
       
      });

      $(".divide").click(function(event) {
        let input1 = ($("#firstnumber").val());
        let input2 = ($("#secondnumber").val());
        let  result = parseInt(input1) / parseInt(input2);
        event.preventDefault()
       alert(result)
       $("#result").text(result);
       
      });

    })