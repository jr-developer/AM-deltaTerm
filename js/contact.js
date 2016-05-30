jQuery(function() {
  jQuery('.error').hide();
  jQuery(".button").click(function() {
		// validate and process form
		// first hide any error messages
    jQuery('.error').hide();
		
	  var name = jQuery("input#name").val();
		if (name == "") {
      jQuery("span#name_error").show();
      jQuery("input#name").focus();
      return false;
    }
	  var email = jQuery("input#email").val();
	  if (email == "") {
      jQuery("span#email_error").show();
      jQuery("input#email").focus();
      return false;
    }
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email)) {
	jQuery("span#email_error2").show();
    jQuery("input#email").focus();
      return false;
	}
	  var phone = jQuery("input#phone").val();
		if (name == "") {
      jQuery("span#phone_error").show();
      jQuery("input#phone").focus();
      return false;
    }
	  var msg = jQuery("textarea#msg").val();
	  if (msg == "") {
	  jQuery("span#msg_error").show();
	  jQuery("textarea#msg").focus();
	  return false;
    }
  })
  
  $('#btnCalculate').click(function() {
	  var bag = 50;
	  var a_charges = new Array()
	  a_charges["52"]= 15 ; a_charges['53']= 15 ; a_charges['54']= 30 ; a_charges['55']= 30 ;
	  a_charges['56']= 45 ; a_charges['57']= 45 ; a_charges['58']= 45 ; a_charges['59']= 60 ; a_charges['60']= 60 ;
	  a_charges['61']= 75 ; a_charges['62']= 75 ; a_charges['63']= 90 ; a_charges['64']= 90 ; a_charges['65']= 90 ;
	  a_charges['66']= 90 ; a_charges['67']= 105 ; a_charges['68']= 120 ; a_charges['69']= 120 ; a_charges['70']= 135 ;
	  a_charges['71']= 135 ; a_charges['72']= 150 ; a_charges['73']= 150 ; a_charges['74']= 165 ; a_charges['75']= 165 ;
	  a_charges['76']= 180 ; a_charges['77']= 180 ; a_charges['78']= 180 ; a_charges['79']= 195 ; a_charges['80']= 195 ;
	  a_charges['81']= 210 ; a_charges['82']= 210 ; a_charges['83']= 225 ; a_charges['84']= 225 ; a_charges['85']= 240 ;
	  a_charges['86']= 240 ; a_charges['87']= 240 ; a_charges['88']= 255 ; a_charges['89']= 255 ; a_charges['90']= 270 ;
	  a_charges['91']= 270 ; a_charges['92']= 285 ; a_charges['93']= 285 ; a_charges['94']= 300 ; a_charges['95']= 300 ;
	  a_charges['96']= 315 ; a_charges['97']= 315 ; a_charges['98']= 330 ; a_charges['99']= 330 ; a_charges['100']= 330 ;
	  var price = a_charges[$("input#txtWeight").val()];
	  if(price > 51 || price < 100){
	  	$("#charges").html('<h1>$'+ price + '.00</h1>');
		return false;
	  }else{
		  $("#charges").html('<h5>The amount of lb must be between 52 and 100</h5>');
	  	return false;
	  }
	  
  })
  
});// JavaScript Document