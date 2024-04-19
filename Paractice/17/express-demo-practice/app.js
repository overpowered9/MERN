	const express = require('express');

	const app = express(); 
	const PORT = 3000;

	app.set('view engine','ejs');
	app.set('views','./views')
	app.get('/', (req, res) => {
		// Render the 'homepage' view
		res.render('homepage');
	});
	app.listen(PORT, (error) =>{ 
		if(!error) 
			console.log(`Server is Successfully Running, 
					and App is listening on port `+ PORT) 
		else
			console.log("Error occurred, server can't start", error); 
		} 
	);