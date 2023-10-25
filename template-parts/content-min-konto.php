<?php
/**
 * My Account page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-account.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.5.0
 */

defined('ABSPATH') || exit;

/**
 * My Account navigation.
 *
 * @since 2.6.0
 */
?>

<div class="grid-container">
    <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell small-12">
            <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
        </div>
        <div class="cell small-12 medium-3">
            <?php do_action('woocommerce_account_navigation'); ?>
        </div>
        <div class="cell small-12 medium-9">
            <?php do_action('woocommerce_account_content'); ?>
        </div>
    </div>
</div>