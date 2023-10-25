<section class="kontakt-info">
    <h1>Kontakt oss</h1>
    <div class="grid-x ">
        <div class="large-6 columns medium-12 small-12"> 
            <!-- Include the Gravity Form -->
            <?php echo do_shortcode('[gravityform id="1" title="false" description="true"]'); ?>
        </div>
        <div class="large-6 columns medium-12 small-12 spacing-fix">
            <?php if (have_rows('kontakt_info')) : ?>
                <?php while (have_rows('kontakt_info')) : the_row(); ?>

                    <!-- Output content for "Første seksjon" -->
                    <?php if (have_rows('forste_seksjon')) : ?>
                        <?php while (have_rows('forste_seksjon')) : the_row(); ?>
                            <div class="seksjon">
                                <h2><?php the_sub_field('forste_seksjon_overskrift'); ?></h2>

                                <!-- Output "Første seksjon liste" -->
                                <?php if (have_rows('forste_seksjon_liste')) : ?>
                                    <ul>
                                        <?php while (have_rows('forste_seksjon_liste')) : the_row(); ?>
                                            <li>
                                                <strong><?php the_sub_field('forste_seksjon_liten_overskrift'); ?></strong>
                                                <p><?php the_sub_field('forste_seksjon_info'); ?></p>
                                            </li>
                                        <?php endwhile; ?>
                                    </ul>
                                <?php endif; ?>

                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>

                    <!-- Output content for "Andre seksjon" -->
                    <?php if (have_rows('andre_seksjon')) : ?>
                        <?php while (have_rows('andre_seksjon')) : the_row(); ?>
                            <div class="seksjon">
                                <h2><?php the_sub_field('andre_seksjon_overskrift'); ?></h2>

                                <!-- Output "Andre seksjon liste" -->
                                <?php if (have_rows('andre_seksjon_liste')) : ?>
                                    <ul>
                                        <?php while (have_rows('andre_seksjon_liste')) : the_row(); ?>
                                            <li class="bedrift-info">
                                                <strong><?php the_sub_field('andre_seksjon_liten_overskrift'); ?></strong>
                                                <p><?php the_sub_field('andre_seksjon_info'); ?></p>
                                            </li>
                                        <?php endwhile; ?>
                                    </ul>
                                <?php endif; ?>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</section>
