$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    //send data
    $('#contactForm').submit(function () {
        const scriptURL = "https://script.google.com/macros/s/AKfycbwVfxKajWXttkV2BTJhNVoWURafOR7bxjlPI-sGC-6g-9LqS1F-psF0cdw9sVd39Bi7/exec"
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank You For Connecting..."))
                .catch(error => console.error('Error!', error.message))
        })

    })
      // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                Name: {
                    required: true,
                    minlength: 2
                },
                Subject: {
                    required: true,
                    minlength: 4
                },
                Number: {
                    required: true,
                    minlength: 5
                },
                Email: {
                    required: true,
                    email: true
                },
                Message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                Name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                Subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                Number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                Email: {
                    required: "no email, no message"
                },
                Message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            
            //alert("output");
            // submitHandler: function(form) {
            //     $(form).ajaxSubmit({
            //         type:"POST",
            //         data: $(form).serialize(),
            //         //url:"contact_process.php",
            //         success: function() {
            //             $('#contactForm :input').attr('disabled', 'disabled');
            //             $('#contactForm').fadeTo( "slow", 1, function() {
            //                 $(this).find(':input').attr('disabled', 'disabled');
            //                 $(this).find('label').css('cursor','default');
            //                 $('#success').fadeIn()
            //                 $('.modal').modal('hide');
		          //       	$('#success').modal('show');
            //             })
            //         },
            //         error: function() {
            //             $('#contactForm').fadeTo( "slow", 1, function() {
            //                 $('#error').fadeIn()
            //                 $('.modal').modal('hide');
		          //       	$('#error').modal('show');
            //             })
            //         }
            //     })
            // }
        })

    })
    
 })(jQuery)
})
