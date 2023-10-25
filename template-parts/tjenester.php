<section class="tjenester row">
    <?php if (have_rows('tjenester')) :
        while (have_rows('tjenester')) : the_row();
    ?>
        <div class="large-6 columns medium-12 small-12 text-center">
            <h2><?php the_sub_field('tjenester_overskrift'); ?></h2>
            <p class="ingress"><?php the_sub_field('tjenester_ingress'); ?></p>
        </div>
        <div class="large-6 columns medium-12 small-12 spacing-fix">
            <ul>
                <?php if (have_rows('tjenester_liste')) :
                    while (have_rows('tjenester_liste')) : the_row();
                ?>
                    <li class="no-deco-list">
                        <i class="far fa-dot-circle"></i> <?php the_sub_field('tjenester_liste_punkt'); ?>
                    </li>
                <?php endwhile;
                endif;
                ?>
            </ul>
        </div>
    <?php endwhile;
    endif;
    ?>
</section>
