<body>
	<header>
		<nav>
			<div class="navbar-logo">
				<a href="#">
					<img class="logo logo-white" src="./img/logo-white.png" alt="">
					<img class="logo" src="./img/logo.png" alt="">
				</a>
			</div> 

			<ul>
				<li><a href="#" class="active">Home</a></li>
				<li><a href="#">About us</a></li>
				<li><a href="javascript:void(0)" class="sub-menu">Services</a>
					<ul>
						<li><a href="#">link1</a></li>
						<li><a href="#">link2</a></li>
						<li><a href="#">link3</a></li>
					</ul>
				</li>
				<li><a href="#">Actualités</a></li>
				<li><a href="javascript:void(0)" class="sub-menu">Services</a>
					<ul>
						<li><a href="#">link1</a></li>
						<li><a href="#">link2</a></li>
						<li><a href="#">link3</a></li>
					</ul>
				</li>
				<li><a href="#">Contact us</a></li>
			</ul>

			<button class="modal-btn modal-phone-btn"><i class="fas fa-phone-alt"></i></button>
			<button class="modal-btn modal-mail-btn"><i class="fas fa-envelope"></i></button>
			<button class="modal-btn modal-map-btn"><i class="fas fa-map-marker-alt"></i></button>
			<button class="modal-btn modal-hour-btn"><i class="fas fa-clock"></i></button>
			<button class="modal-btn"><i class="fa fa-facebook"></i></button>

			<div class="topnav-toggle">
				<svg viewBox="0 0 800 600" class="">
					<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" class="top_bar" />
					<path d="M300,320 L540,320" class="middle_bar" />
					<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" class="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)" />
				</svg>  
			</div>
		</nav>
		
		<div class="scrolltotop"><i class="fas fa-arrow-up"></i></div>
	</header>

	<div id="scroll-percent" data-scrollPercentage>
		<div class="percentage">&nbsp;</div>
	</div>
 	<!--div id="percentage-value"></!--div-->

	<?php include ('includes/modules/modal.php'); ?> 

	<div class="main">
