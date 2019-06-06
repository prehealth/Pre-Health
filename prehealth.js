

		$(document).ready(function(){
			$.ajax({
				type: 'GET',
				url: 'navbarmenu.json',
				success: function(json){
					$('.ul#navbarMenu').empty();
					$('ul#overflow').empty();
					$('ul#overflowNavSmall').empty();
					i = "regular"
					j = "overflow"
					
					$.each(json[i], function(id,name){
						
						$('ul#navbarMenu').append('<li id='+ name.name +'><a href=#' + name.href + '>' + name.name + '</a></li>');
						$('ul#smallMenu').append('<li id='+ name.name +'><a href=#' + name.href + '>' + name.name + '</a></li>');

					});
					$.each(json[j], function(id,name){

						$('ul#overflow').append('<li id='+ name.name +'><a href=#' + name.href + '>' + name.name + '</a></li>');
						$('ul#smallMenu').append('<li id='+ name.name +'><a href=#' + name.href + '>' + name.name + '</a></li>');
					});


					$('ul#myAccordion').accordion({
						active : false,
						collapsible : true,
						event : 'click',
						header : 'div'
					});

					$('div.advice-container').accordion({
						active : false,
						collapsible : true,
						event : 'click',
						header : 'h4'

					});
						
					makeClick()
				}
			})



	function makeClick(event){

		
		$('li').click(
			function(){
			$('li.active').toggleClass('active');
			$(this).toggleClass('active');
			}
		);
			$('a#overflowNav').click(
			function(){
				
				$('div#overflowMenu').slideToggle(1000, 'swing')
				return false;
		});
			$('ul#overflow li').click(
				function(){
				$('div#overflowMenu').slideToggle();
		});

			$('a#overflowNavSmall').click(
				function(){
					$('div#smallMenuContainer').slideToggle(500, 'swing')
					console.log('click')
					return false;
				})

			$('ul#smallMenu li').click(
			function(){
				$('div#smallMenuContainer').slideToggle(0)
			})

			$('nav li').click(
				function(){
					target = $(this).children('a').attr('href')
					 $('html, body').animate({
					 	scrollTop: $(target).offset().top - 45
					 }, 1100, 'swing')

		



		});
			$('.xferInfo').click(
				function(){
					$school = $(this).attr('id')
					console.log($school)
					$.ajax({ type:'GET', 
						url: 'transfer.json',
						success: function(xfer){ 			
							x = xfer[$school]
							xHeader = x.header
							xBody = x.href
						console.log( $school + "\n" + xHeader + xBody)
						
						$('.title').text(xHeader)
						$('.modal-body').load( xBody )
					}	
				})
					
					$('#modal').show();
					$('.modal-overlay').show();	
					$('#modalHeader .title').css('font-size','2em')
					$('#modalBody').css('font-size','2em')
					$('h2').css('font-size','3em')
		});	
			$('.close-button').click(
				function(){
					$('.modal-overlay').hide();
					$('#modal').hide();
					$('.title').empty();
					$('.modal-body').empty();
				})






			}


	


});


