$(document).ready(function () {
    "use strict";
    // Contact Us Form Dispaly

    // Contact form
    var data = "<div class='row'><div class='col-md-6 formWrapper'><label for='' class='form-label'>Your Name*</label><input type='text' name='' placeholder='Your Name*' class='control-form'></div><div class='col-md-6 formWrapper'><label for='' class='form-label'>Email Address</label><input type='text' name='' placeholder='E-mail Address*' class='control-form'></div><div class='col-md-6 formWrapper'><label for='' class='form-label'>Mobile / Contact Number</label><input type='text' name='' placeholder='Phone Number' class='control-form'></div><div class='col-md-6 formWrapper'><label for='' class='form-label'>Organization Name</label><input type='text' name='' placeholder='Organization Name' class='control-form'></div><div class='col-md-6 formWrapper'><label for='' class='form-label'>What Solution you want?</label><input type='text' name='' placeholder='What Solution you want?' class='control-form'></div><div class='col-md-6 formWrapper'><label for='' class='form-label'>Budget</label><input type='text' name='' placeholder='Budget' class='control-form'></div><div class='col-md-12 formWrapper'><label for='' class='form-label'>Message</label><textarea type='text' name='' placeholder='Enter your Message' class='control-form'></textarea></div><div class='col-md-12 formWrapper'><a href='' class='primaryBtn'><i class='fa fa-paper-plane'></i> Send a message</a></div></div>";
    document.getElementById('contact_form').innerHTML = data;
});


