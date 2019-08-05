
window.addEventListener('DOMContentLoaded',
                        function () {
  
  var node = document.querySelector('#count-text');
  
  node.addEventListener('keyup', function () {
    
   var count = this.value.length;
    
   var counterNode = document.querySelector('.show-count-text');
    
   counterNode.innerText = count;
    
  }, false);
  
		}, false
 );
	

$(function(){
	
	const MSG_EMPTY = '入力必須です。';
	const MSG_TEXT_MAX =  '20文字以内で入力してください。';
	const MSG_EMAIL_TYPE = 'emailの形式で入力してください。';
	const MSG_TEXTAREA_MAX = '200文字以内で入力してください。';
	
	$(".valid-text").keyup(function(){
		var form_g = $(this).closest('.form-group');
		
		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_EMPTY);
		}else if($(this).val().length > 20){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_TEXT_MAX);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});
	
	$(".valid-email").keyup(function(){
		
		var form_g = $(this).closest('.form-group');
		
		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_EMPTY);
		}else if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_EMAIL_TYPE);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});
	
	$(".valid-textarea").keyup(function(){
		
		var form_g = $(this).closest('.form-group');
		
		if($(this).val().length === 0){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_EMPTY);
		}else if($(this).val().length > 200){
			form_g.removeClass('has-success').addClass('has-error');
			form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
		}else{
			form_g.removeClass('has-error').addClass('has-success');
			form_g.find('.help-block').text('');
		}
	});
	
	
	$(window).scroll(function(){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var	scroll = $(window).scrollTop();
			var	windowHeight = $(window).height();
			if(scroll > elemPos - windowHeight + windowHeight/5){
				$(this).addClass('scrollin');
			}else{
				$(this).removeClass('scrollin');
			}
		});
	});
	
	
//$('#valid-text').on('keyup',validMaxLength('#valid-text', 20));
//$("#valid-text").keyup(validRequire);
//
//$(".valid-textarea").keyup(validMaxLength(".valid-textarea", 200));
//
//		
//	    function validMaxLength(key, max){	
//				var form_g = $(key).closest('.form-group');
//			  if($(key).val().length > max){
//				form_g.removeClass('has-success').addClass('has-error');
//				form_g.find('.help-block').text(MSG_TEXT_MAX);
//	    	}else{
//				form_g.removeClass('has-error').addClass('has-success');
//				form_g.find('.help-block').text('');
//				
//				console.log($(key).val().length);
//		};
//		};
//	  function validRequire(){
//			var form_g = $(".valid-textarea").closest('.form-group');
//			
//			if($(".valid-textarea").val().length === 0){
//				form_g.removeClass('has-success').addClass('has-error');
//				form_g.find('.help-block').text(MSG_EMPTY);
//			}else{
//		    form_g.removeClass('has-error').addClass('has-success');
//				form_g.find('.help-block').text('');
//				
//			};
//		};
});
