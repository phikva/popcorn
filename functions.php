<?php
/**
 * Functions
 * @package popcorn
 */

if (!function_exists('popcorn_setup')):
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function popcorn_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on popcorn, use a find and replace
         * to change 'popcorn' to the name of your theme in all the template files.
         */
        load_theme_textdomain('popcorn', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'primary' => esc_html__('Primary', 'popcorn'),
            )
        );

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
            )
        );

        /*
         * Enable support for Post Formats.
         * See https://developer.wordpress.org/themes/functionality/post-formats/
         */
        add_theme_support(
            'post-formats',
            array(
                'aside',
                'image',
                'video',
                'quote',
                'link',
            )
        );

        // Set up the WordPress core custom background feature.
        add_theme_support(
            'custom-background',
            apply_filters(
                'popcorn_custom_background_args',
                array(
                    'default-color' => 'ffffff',
                    'default-image' => '',
                )
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
    }
endif;
add_action('after_setup_theme', 'popcorn_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function popcorn_content_width()
{
    $GLOBALS['content_width'] = apply_filters('popcorn_content_width', 640);
}
add_action('after_setup_theme', 'popcorn_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function popcorn_widgets_init()
{
    register_sidebar(
        array(
            'name' => esc_html__('Sidebar', 'popcorn'),
            'id' => 'sidebar-1',
            'description' => esc_html__('Add widgets here.', 'popcorn'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
}
add_action('widgets_init', 'popcorn_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function popcorn_scripts()
{
    wp_enqueue_style('popcorn-style', get_stylesheet_uri());

    wp_enqueue_script('popcorn-scripts', get_template_directory_uri() . '/dist/app.bundle.1698051432876.js', array('jquery'), '', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }


    /*
     * disable the standard wp functionality of embedding videos to increase performance.
     * this only disables it from the frontend, not wp-admin
     * https://codex.wordpress.org/Embeds
     */
    wp_dequeue_script('wp-embed');
    wp_deregister_script('wp-embed');

    /*
     * deregister a bunch of jquery ui scripts from the frontend for performance reasons.
     * still available in wp-admin
     */
    wp_deregister_script('jquery-ui-widget');
    wp_deregister_script('jquery-ui-button');
    wp_deregister_script('jquery-ui-spinner');
    wp_deregister_script('jquery-ui-datepicker');
}
add_action('wp_enqueue_scripts', 'popcorn_scripts');

function popcorn_admin_scripts($hook)
{

    // only load scripts on upload.php
    if ($hook != 'upload.php') {

        return;

    }

    wp_enqueue_script('popcorn-admin-scripts', get_template_directory_uri() . '/dist/admin.bundle.1698051432876.js', array('jquery'), '', true);

}
add_action('admin_enqueue_scripts', 'popcorn_admin_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}

/*
 * Logo
 */
add_theme_support(
    'custom-logo',
    array(
        //'height'      => 100,
        'width' => 150,
        'flex-height' => true,
        'flex-width' => true,
        'header-text' => array('site-title', 'site-description'),
    )
);


/*
 * SVG Upload
 */
//add SVG to allowed file uploads

function add_file_types_to_uploads($file_types)
{
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes);
    return $file_types;
}

add_action('upload_mimes', 'add_file_types_to_uploads');

// React Product Shortcode
function react_app_shortcode()
{
    return '<div id="react-app-root"></div>';
}
add_shortcode('react_app', 'react_app_shortcode');

// React style and JS enqueue
function enqueue_react_app_script()
{
    if (is_page('produkter')) {
        $react_app_build_dir = get_template_directory() . '/react-woo-products/build/';
        $asset_manifest = json_decode(file_get_contents($react_app_build_dir . 'asset-manifest.json'), true);

        if (isset($asset_manifest['entrypoints'])) {
            foreach ($asset_manifest['entrypoints'] as $file) {
                $file_url = get_template_directory_uri() . '/react-woo-products/build/' . $file;

                if (strpos($file, '.js') !== false) {
                    wp_enqueue_script('react-app-' . md5($file), $file_url, array(), null, true);
                }

                if (strpos($file, '.css') !== false) {
                    wp_enqueue_style('react-app-' . md5($file), $file_url, array(), null);
                }
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'enqueue_react_app_script');

// Custom Walker for Main Menu to add divs instead of listing
class Div_Walker_Nav_Menu extends Walker_Nav_Menu
{
    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';

        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' ' . esc_attr($class_names) : '';

        $output .= $indent . '<div class="cell auto main-menu-item' . $class_names . '">'; // Added custom classes here

        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
        $output .= '</div>';
    }
}

function custom_myme_types($mime_types)
{
    $mime_types['csv'] = 'text/csv'; // Adding .csv extension
    return $mime_types;
}
add_filter('upload_mimes', 'custom_myme_types', 1, 1);

// Register get cart route
add_action('rest_api_init', function () {
    register_rest_route(
        'custom/v1',
        '/get_cart',
        array(
            'methods' => 'GET',
            'callback' => 'get_cart_callback',
        )
    );
});

// Register AJAX action
add_action('wp_ajax_add_to_cart', 'my_add_to_cart_function');
add_action('wp_ajax_nopriv_add_to_cart', 'my_add_to_cart_function');

function my_add_to_cart_function()
{
    // Initialize WooCommerce cart
    WC()->frontend_includes();
    WC()->session = new WC_Session_Handler();
    WC()->session->init();
    WC()->customer = new WC_Customer(get_current_user_id(), true);
    WC()->cart = new WC_Cart();

    // Get product ID and quantity from the request
    $product_id = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    // Add the product to the cart
    $added = WC()->cart->add_to_cart($product_id, $quantity);

    // Add a session variable to test persistence
    WC()->session->set('my_cart_session_test', 'Product Added');

    // Send response
    if ($added) {
        wp_send_json_success('Product successfully added to cart');
    } else {
        wp_send_json_error('Failed to add product to cart');
    }

    wp_die(); // Required to terminate and return a proper response
}

function get_cart_callback()
{
    try {
        // Initialize WooCommerce environment
        WC()->frontend_includes();
        WC()->session = new WC_Session_Handler();
        WC()->session->init();
        WC()->customer = new WC_Customer(get_current_user_id(), true);
        WC()->cart = new WC_Cart();

        // Get cart contents
        $cart_contents = WC()->cart->get_cart();

        // Add product names to the cart contents array
        foreach ($cart_contents as $key => $item) {
            $product = wc_get_product($item['product_id']);
            $cart_contents[$key]['product_name'] = $product->get_name();
        }

        return new WP_REST_Response(
            array(
                'success' => true,
                'data' => $cart_contents
            ),
            200
        );

    } catch (Exception $e) {
        return new WP_REST_Response(
            array(
                'success' => false,
                'message' => $e->getMessage(),
            ),
            500
        );
    }
}

// Register remove from cart route
add_action('rest_api_init', function () {
    register_rest_route(
        'custom/v1',
        '/remove_from_cart',
        array(
            'methods' => 'POST',
            'callback' => 'remove_from_cart_callback',
        )
    );
});

// Register set cart item quantity route
add_action('rest_api_init', function () {
    register_rest_route(
        'custom/v1',
        '/set_cart_item_quantity',
        array(
            'methods' => 'POST',
            'callback' => 'set_cart_item_quantity_callback',
        )
    );
});

// Update cart item quantity
function set_cart_item_quantity_callback(WP_REST_Request $request)
{
    // Log the entire cart for debugging
    error_log('Cart contents at start: ' . print_r(WC()->cart->get_cart(), true));

    $cart_key = $request->get_param('cart_key');
    $quantity = $request->get_param('quantity');

    // Log the cart key and quantity for debugging
    error_log("Attempting to set cart item quantity. Key: $cart_key, Quantity: $quantity");

    // Initialize WooCommerce environment
    WC()->frontend_includes();
    WC()->session = new WC_Session_Handler();
    WC()->session->init();
    WC()->customer = new WC_Customer(get_current_user_id(), true);
    WC()->cart = new WC_Cart();

    // Update the cart item quantity
    WC()->cart->set_quantity($cart_key, $quantity);

    // Log the entire cart for debugging
    error_log('Cart contents at end: ' . print_r(WC()->cart->get_cart(), true));

    return new WP_REST_Response(
        array(
            'success' => true,
            'message' => 'Cart updated successfully'
        ),
        200
    );
}


// Register remove from cart route
add_action('rest_api_init', function () {
    register_rest_route(
        'custom/v1',
        '/remove_from_cart',
        array(
            'methods' => 'POST',
            'callback' => 'remove_from_cart_callback',
        )
    );
});

// Remove item from cart
function remove_from_cart_callback(WP_REST_Request $request)
{
    $cart_key = $request->get_param('cart_key');

    error_log("Attempting to remove cart item. Key: $cart_key");

    // Initialize WooCommerce environment
    WC()->frontend_includes();
    WC()->session = new WC_Session_Handler();
    WC()->session->init();
    WC()->customer = new WC_Customer(get_current_user_id(), true);
    WC()->cart = new WC_Cart();

    // Remove the item from the cart
    $result = WC()->cart->remove_cart_item($cart_key);

    if ($result) {
        error_log("Item removed successfully");
        return new WP_REST_Response(
            array(
                'success' => true,
                'message' => 'Item removed successfully'
            ),
            200
        );
    } else {
        error_log("Failed to remove item from cart");
        return new WP_REST_Response(
            array(
                'success' => false,
                'message' => 'Failed to remove item from cart'
            ),
            500
        );
    }
}

add_filter('woocommerce_account_menu_items', 'rename_my_account_menu_items', 999, 1);


function rename_my_account_menu_items($items)
{
    // Rename
    $items['orders'] = __('Ordre', 'woocommerce');
    $items['edit-address'] = __('Adresse', 'woocommerce');
    $items['edit-account'] = __('Kontoadministrasjon', 'woocommerce');
    $items['downloads'] = __('Kredit', 'woocommerce');

    // Remove 
    unset($items['dashboard']);
    return $items;
}

// Custom Woocommerce rewrite rules
function custom_rewrite_rule()
{
    add_rewrite_rule('^produkter/?.+/?', 'index.php?pagename=your-react-page-slug', 'top');
}
add_action('init', 'custom_rewrite_rule', 10, 0);

function force_status_okay()
{
    if (is_page('your-react-page-slug')) {
        status_header(200);
    }
}
add_action('wp', 'force_status_okay');

function redirect_woocommerce_to_react()
{
    if (is_product() || is_product_category()) {
        wp_redirect(home_url('/produkter')); // redirect to React app
        exit();
    }
}
add_action('template_redirect', 'redirect_woocommerce_to_react');