<section class="intro-section text-center">
    <?php
    if (have_rows('intro')) :
        while (have_rows('intro')) : the_row();
    ?>
        <p><?php the_sub_field('intro_overskrift'); ?></p>
    <?php
        endwhile;
    endif;
    ?>
</section>
