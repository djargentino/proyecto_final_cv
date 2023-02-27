window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,    
		slidesToScroll: 1,  
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [    
			{      
   			  // pantallas mayores que >= 775px
			  breakpoint: 450,
			  settings: {
				// Establézcalo en `auto` y proporcione el ancho del elemento para ajustarlo  viewport
				slidesToShow: 1,  
				slidesToScroll: 1      
			  }
			},{
			  // pantallas mayores que >= 1024px
			  breakpoint: 1000,   
			  settings: {
				slidesToShow: 2, 
				slidesToScroll: 2   
				
			  }
			}
		]
	});
});