<section class="leasing">
    <?php if (have_rows('leasing_innhold')): ?>
        <?php while (have_rows('leasing_innhold')):
            the_row(); ?>
            <div class="row">
                <div class="large-12 small-12 columns top">
                    <h2>
                        <?php echo get_sub_field('leasing_stor_overskrift'); ?>
                    </h2>
                    <p class="ingress-liten">
                        <?php echo get_sub_field('leasing_ingress'); ?>
                    </p>
                </div>
                <div class="large-12 small-12 columns img-container">
                    <?php $leasing_bilde_url = get_sub_field('leasing_bilde'); ?>
                    <?php if ($leasing_bilde_url): ?>
                        <img src="<?php echo $leasing_bilde_url; ?>" alt="Leasing Bilde" style="height: 161px;">
                    <?php endif; ?>
                </div>
            </div>

            <div class="row">
                <div class="large-6 small-12 columns spacing-fix">
                    <?php if (have_rows('leasing_tekst_innhold')): ?>
                        <?php while (have_rows('leasing_tekst_innhold')):
                            the_row(); ?>
                            <div class="leasing-text">
                                <strong>
                                    <?php echo get_sub_field('leasing_liten_overskrift'); ?>
                                </strong>
                                <p>
                                    <?php echo get_sub_field('leasing_beskrivelse'); ?>
                                </p>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>

                <div class="large-6 small-12 columns spacing-fix">
                    <div class="card">
                        <div class="card-divider">
                            <h2>
                                <?php echo get_sub_field('leasing_fordeler_stor_overskrift'); ?>
                            </h2>
                            <p>
                                <?php echo get_sub_field('leasing_fordeler_subheader'); ?>
                            </p>
                        </div>
                        <div class="card-section">
                            <strong>
                                <?php echo get_sub_field('leasing_fordeler_liten_overskrift'); ?>
                            </strong>
                            <?php if (have_rows('leasing_fordeler')): ?>
                                <ul class="leasing-fordeler">
                                    <?php while (have_rows('leasing_fordeler')):
                                        the_row(); ?>
                                        <li>
                                            <i aria-hidden="true" class="far fa-check-circle"></i>
                                            <p>
                                                <?php echo get_sub_field('leasing_fordeler_tekst'); ?>
                                            </p>
                                        </li>
                                    <?php endwhile; ?>
                                </ul>
                            <?php endif; ?>
                            <div class="text-center card-footer">
                                <div class="row">
                                    <div class="large-12 columns button-container">
                                        <a class="btn-alternative" href="<?php echo get_sub_field('leasing_knapp'); ?>">
                                            <?php echo get_sub_field('leasing_knappetekst'); ?>
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="large-12 columns">
                                        <p class="liten-tekst">
                                            <?php echo get_sub_field('leasing_liten_tekst_footer'); ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    <?php endwhile; ?>
    <?php endif; ?>
</section>
