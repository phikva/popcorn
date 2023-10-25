<section class="standard-section row">
    <div class="row">
        <?php if (have_rows('standard_seksjon_alt')):
            while (have_rows('standard_seksjon_alt')):
                the_row();
                $alt_section_title = get_sub_field('standard_seksjon_alt_overskrift');
                $alt_section_content = get_sub_field('standard_seksjon_alt_ingress');
                $alt_section_main_image_url = get_sub_field('standard_seksjon_alt_hovedbilde');
                $alt_section_small_image_url = get_sub_field('standard_seksjon_alt_bilde');
                ?>
                <div class="large-6 medium-12 small-12 columns text-center">
                    <h3>
                        <?php echo $alt_section_title; ?>
                    </h3>
                    <p class="text-small">
                        <?php echo $alt_section_content; ?>
                    </p>
                    <img src="<?php echo $alt_section_small_image_url; ?>" alt="Small Image" />
                </div>
                <div class="large-6 medium-12 small-12 columns"
                    style="display: flex; justify-content: center; align-items: center;">
                    <img src="<?php echo $alt_section_main_image_url; ?>" alt="Main Image" style="height: 370px;" />
                </div>

            <?php endwhile;
        endif;
        ?>
    </div>
    <div class="row">
    <?php if (have_rows('standard_seksjon')) :
        while (have_rows('standard_seksjon')) :
            the_row();
            $section_title = get_sub_field('standard_seksjon_overskrift');
            $section_content = get_sub_field('standard_seksjon_ingress');
            $section_button_link = get_sub_field('standard_seksjon_knappelenke');
            $section_button_text = get_sub_field('standard_seksjon_knappetekst');
            $section_main_image_url = get_sub_field('standard_seksjon_hovedbilde');
    ?>
    <div class="content large-6 medium-12 small-12 columns text-center">
        <h3 class="h3-large">
            <?php echo $section_title; ?>
        </h3>
        <p class="text-small">
            <?php echo $section_content; ?>
        </p>
        <div class="button-container">
        <?php if (!empty($section_button_link) && !empty($section_button_text)) : ?>
            <a href="<?php echo $section_button_link; ?>" class="btn-secondary">
                <?php echo $section_button_text; ?>
            </a>
        </div>
        <?php endif; ?>
    </div>
    <div class="large-6 medium-12 small-12 columns"  style="display: flex; justify-content: center; align-items: center;">
        <img src="<?php echo $section_main_image_url; ?>" alt="Main Image" style="height: 448px;" />
    </div>
    <?php endwhile;
    endif;
    ?>
</div>
</section>