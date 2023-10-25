<?php
// WP_Query arguments
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'order'          => 'DESC',
    'orderby'        => 'date',
);

// The Query
$latest_posts = new WP_Query($args);

// The Loop
if ($latest_posts->have_posts()) : ?>
    <div class="grid-container">
        <div class="grid-x grid-margin-y">
            <div class="cell small-12">
                <h2>Aktuelt</h2>
            </div>

            <?php while ($latest_posts->have_posts()) : $latest_posts->the_post(); ?>

                <div class="cell small-12 medium-4 latest-post-item">
                    <?php 
                        // Display the featured image
                        if (has_post_thumbnail()) {
                            the_post_thumbnail('medium');
                        }
                    ?>
                    <a href="<?php the_permalink(); ?>"><h4><?php the_title(); ?></h4></a>
                    <p><?php the_excerpt(); ?></p>
                </div>
            <?php endwhile; ?>

        </div>
    </div>
<?php
endif;

// Restore original Post Data
wp_reset_postdata();
?>