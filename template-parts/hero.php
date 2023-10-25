
	<section id="fullscreen-hero-wrapper" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(<?php the_field('background_front_hero');?>">
    <div class="grid-container">
      <div class="grid-x align-middle">
        <div class="cell small-12 medium-12 large-8">
          <?php if( have_rows('hero') ): ?>
            <?php while( have_rows('hero') ): the_row();
            ?>
              <h1><?php the_sub_field('hero_overskrift');?></h1>
              <p class="ingress">
                <?php the_sub_field('hero_ingress');?>
              </p>
              <a href="<?php the_sub_field('hero_knappelenke');?>"><button class="btn-primary"><?php the_sub_field('hero_knappetekst');?></button></a>
            <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
	</section>