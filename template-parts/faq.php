<section class="faq-section">
    <h2>Spørsmål & svar</h2>
    <?php if (have_rows('faq')) : ?>
        <div class="faq-accordion">
            <div class="grid-x">
                <?php while (have_rows('faq')) : the_row(); ?>
                    <?php if (have_rows('faq_tab')) : ?>
                        <?php while (have_rows('faq_tab')) : the_row(); ?>
                            <!-- Output content for "FAQ Tab" -->
                            <div class="faq-tab cell large-6">
                                <?php if (have_rows('faq_innhold')) : ?>
                                    <?php while (have_rows('faq_innhold')) : the_row(); ?>
                                        <!-- Output content for "FAQ Innhold" -->
                                        <div class="faq-item">
                                            <h3 class="faq-question">
                                                <i class="fas fa-caret-right"></i>
                                                <?php the_sub_field('sporsmal'); ?>
                                            </h3>
                                            <p class="faq-answer"><?php the_sub_field('faq_svar'); ?></p>
                                        </div>
                                    <?php endwhile; ?>
                                <?php endif; ?>
                            </div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>
        </div>
    <?php endif; ?>
</section>
