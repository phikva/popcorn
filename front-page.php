<?php get_header(); ?>

<?php
    // Start the loop.
    while ( have_posts() ) : the_post();

        get_template_part( 'template-parts/hero');
        get_template_part( 'template-parts/front-page/latest-posts');

    // End the loop.
    endwhile;
    ?>

<?php get_footer(); ?>