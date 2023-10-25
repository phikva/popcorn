<div class="top-menu-wrapper">
	<div class="grid-container top-menu-container">
		<div class="grid-x align-justify align-middle"> <!-- Aligned to the edges -->
			<div class="cell small-12 align-content-right">
				<?php if (is_multisite()): ?>
					<nav id="site-switcher">
						<ul>
							<?php
							$current_blog_id = get_current_blog_id();
							$sites = get_sites();
							foreach ($sites as $site) {
								$active_class = ($current_blog_id === (int) $site->blog_id) ? 'current-site' : '';
								switch_to_blog($site->blog_id);
								$site_name = get_bloginfo('name');
								$site_url = get_home_url();
								restore_current_blog();
								?>
								<li>
									<a href="<?php echo esc_url($site_url); ?>" class="<?php echo esc_attr($active_class); ?>"><?php echo esc_html($site_name); ?></a>
								</li>
								<?php
							}
							?>
						</ul>
					</nav>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>

