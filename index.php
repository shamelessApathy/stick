<head>
	<link href='css/stick.css' rel='stylesheet' type='text/css'/>
	<link href='css/bpad.css' rel='stylesheet' type='text/css'/>
	<script src='js/jquery-3.1.0.js'></script>
	<link rel='manifest' href='js/manifest.json'/>
	<meta name="viewport" content="width=device-width,initial-scale=1">
</head>


<div class='warning'>Please rotate to landscape to display properly</div>
<canvas width='550' height='300'></canvas>
<div class='bpad-container'>
	<img src='img/dpadclear.png' class='dpadSprite'/>
	<div class='prevent'></div>
	<div class='bpad-direction' id='bpad-left'></div>
	<div class='bpad-direction' id='bpad-up'></div>
	<div class='bpad-direction' id='bpad-right'></div>
	<div class='bpad-direction' id='bpad-down'></div>
</div>
<div class='fullscreen-button'>Click for full screen</div>
<script src='js/globals.js'></script>
<script src='js/spritesheet.js'></script>
<script src='js/bpad.js'></script>
<script src='js/element.js'></script>
<script src='js/animate.js'></script>
<script src='js/main.js'></script>