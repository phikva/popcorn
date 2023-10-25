<div class="main-menu-container grid-x grid-padding-x align-justify align-middle"> <!-- Aligned to the edges -->
  <div class="cell small-6 medium-6 large-4"><?php the_custom_logo() ?></div>
  <div class="cell small-8 align-content-right show-for-large">
	<?php
		wp_nav_menu( array(
			'menu'           => 'main', // Do not fall back to first non-empty menu.
			'theme_location' => 'primary', // your theme location here
    		'walker'         => new Div_Walker_Nav_Menu(),
			'container'       => 'div', // specify that the container should be a div
			'container_class' => 'grid-x align-middle', // add classes to the container
			'items_wrap'      => '%3$s' // this will remove the ul wrapper around the menu items
		) );
	?>
  </div>
  <div class="cell small-6 hide-for-large align-content-right">
  	<img src="<?php echo get_stylesheet_directory_uri(); ?>/src/img/menu.png" />
  </div>
</div>


