<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package iteo
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div class="cart-icon-wrapper">
    <a href="<?php echo wc_get_cart_url(); ?>">
      <i class="fas fa-shopping-cart"></i>
      <span class="cart-item-count">
        <?php echo WC()->cart->get_cart_contents_count(); ?>
      </span>
    </a>
  </div>
  <div id="cartModal" class="cart-modal">
    <div class="cart-modal-content">
      <span class="close">&times;</span>
      <div id="cartContents"></div>
    </div>
  </div>
  <script>
    jQuery(document).ready(function () {
      // Function to fetch cart contents and update modal
      function fetchAndUpdateCart() {
        jQuery.get("/wp-json/custom/v1/get_cart", function (data) {
          console.log("Received cart data:", data.data);
          if (data.success && typeof data.data === 'object') {
            let cartHtml = '<ul>';

            // Iterate over each cart item
            for (const key in data.data) {
              if (data.data.hasOwnProperty(key)) {
                const item = data.data[key];
                cartHtml += `<li>
              ${item.product_name} - Quantity: <input type="number" value="${item.quantity}" class="cart-item-quantity" data-key="${key}" />
              <button class="remove-from-cart" data-key="${key}">Remove</button>
            </li>`;
              }
            }

            cartHtml += '</ul>';

            // Populate #cartContents div with built HTML
            jQuery("#cartContents").html(cartHtml);
          } else {
            console.log('No items in the cart or an error occurred.');
          }
        });
      }

      // Initial fetch and display
      jQuery(".cart-icon-wrapper a").click(function (event) {
        event.preventDefault();
        fetchAndUpdateCart();
        jQuery("#cartModal").show();
      });

      // Handle quantity change
      jQuery(document).on('change', '.cart-item-quantity', function () {
        const key = jQuery(this).data('key');
        const quantity = jQuery(this).val();
        jQuery.post("/wp-json/custom/v1/set_cart_item_quantity", { cart_key: key, quantity: quantity }, function (response) {
          if (response.success) {
            fetchAndUpdateCart();
          } else {
            console.log('Failed to update cart');
          }
        });
      });

      // Handle remove from cart
      jQuery(document).on('click', '.remove-from-cart', function () {
        const key = jQuery(this).data('key');
        jQuery.post("/wp-json/custom/v1/remove_from_cart", { cart_key: key }, function (response) {
          if (response.success) {
            fetchAndUpdateCart();
          } else {
            console.log('Failed to remove from cart');
          }
        });
      });

      // Close the modal when the close button is clicked
      jQuery(".close").click(function () {
        jQuery("#cartModal").hide();
      });
    });

  </script>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content">
      <?php esc_html_e('Skip to content', 'popcorn'); ?>
    </a>
    <header id="masthead" class="site-header">
      <?php get_template_part('template-parts/header/top-header-grid'); ?>
      <div class="grid-container">
        <?php get_template_part('template-parts/header/header-grid'); ?>
      </div>
    </header><!-- #masthead -->

    <div id="content" class="site-content">