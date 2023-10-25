<section class="divider">
    <?php if (have_rows('bilde_divider')):
        while (have_rows('bilde_divider')):
            the_row();
            $divider_image_url = get_sub_field('divider');
            ?>
            <img src="<?php echo $divider_image_url; ?>" alt="Divider Image"
                 />
        <?php endwhile;
    endif;
    ?>
</section>