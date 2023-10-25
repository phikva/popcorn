<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package popcorn
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell small-12 medium-4">
                    <header class="entry-header">
                        <h1>test</h1>
                    </header><!-- .entry-header -->
                    <ul class="product-categories">
                        <?php
                        $args = array(
                            'taxonomy'     => 'product_cat',
                            'orderby'      => 'name',
                            'show_count'   => 0,
                            'pad_counts'   => 0,
                            'hierarchical' => 1,
                            'title_li'     => '',
                            'hide_empty'   => 0,
                            'menu_order' => 'asc',
                            'orderby' => 'term_order'
                        );

                        wp_list_categories( $args );
                        ?>
                </div>
                <div class="cell small-12 medium-8">
                    <div class="grid-x grid-padding-x grid-padding-y">
                        <?php
                        if (is_shop()) {
                            $product_categories = get_terms('product_cat', array(
                                'hide_empty' => 0,
                                'parent' => 0,
                                'menu_order' => 'asc',
                                'orderby' => 'term_order'
                            ));

                            if (!empty($product_categories)) {
                                foreach ($product_categories as $cat) {
                                    $thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
                                    $image = wp_get_attachment_url($thumbnail_id);
                                    echo '<div class="cell small-12 medium-4 large-3 category-box">';
                                    echo '<a href="' . get_term_link($cat) . '" class="category-link">';
                                    if ($image) {
                                        echo '<img src="' . esc_url($image) . '" alt="' . esc_attr($cat->name) . '" class="category-image" />';
                                    }
                                    echo '<span class="category-name">' . $cat->name . '</span>';
                                    echo '</a>';
                                    echo '</div>';
                                }
                            }
                        } else {
                            echo '<div class="cell small-12 medium-4 large-3">';
                            woocommerce_content();
                            echo '</div>';
                        }
                        ?>
                    </div>
                </div>
            </div>
           
        </div>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
<script>
    document.addEventListener("DOMContentLoaded", function() {
  var categories = document.querySelectorAll('.product-categories > li');
  
  categories.forEach(function(category) {
    var subCategories = category.querySelector('ul.children');
    
    if (subCategories) {
      category.addEventListener('click', function(event) {
        event.stopPropagation();
        subCategories.style.display = (subCategories.style.display === 'block') ? 'none' : 'block';
      });
    }
  });
</script>