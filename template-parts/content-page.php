<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package iteo
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php
	// Check if the current page is "Om oss"
	if (is_page('Om oss')) {
		get_template_part('template-parts/hero');
	}
	?>

	<div class="grid-container">
		<header class="entry-header">
			<?php the_title('<h1 class="entry-title screen-reader-text">', '</h1>'); ?>
		</header><!-- .entry-header -->

		<?php iteo_post_thumbnail(); ?>

		<div class="entry-content">
			<?php
			the_content();

			// Check if the current page is "Kontakt oss"
			if (is_page('Kontakt oss')) {
				// ACF field content
				get_template_part('template-parts/kontakt');
				get_template_part('template-parts/faq');
			}

			// Check if the current page is "Om oss" 
			if (is_page('Om oss')) {
				// ACF field content
				get_template_part('template-parts/intro');
				get_template_part('template-parts/tjenester');
				get_template_part('template-parts/divider');
				get_template_part('template-parts/standardSection');
			}

			// Check if the current page is "Leasing" 
			if (is_page('Leasing')) {
				// ACF field content
				get_template_part('template-parts/leasing');
			
			}
			
			wp_link_pages(
				array(
					'before' => '<div class="page-links">' . esc_html__('Pages:', 'popcorn'),
					'after' => '</div>',
				)
			);
			?>
		</div><!-- .entry-content -->
	</div> <!-- Close the grid container -->



	<?php if (get_edit_post_link()): ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						/* translators: %s: Name of current post. Only visible to screen readers */
						__('Edit <span class="screen-reader-text">%s</span>', 'popcorn'),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					get_the_title()
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
