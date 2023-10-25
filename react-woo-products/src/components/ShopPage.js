import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'foundation-sites';
import { Link, useParams } from 'react-router-dom';
import CartModule from './CartModule';

const CategoryItem = ({ category, onClick, isOpen, toggleOpen }) => {
  const hasChildren = category.children && category.children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      toggleOpen(category.id);
    }
    onClick(category.id);
  };

  return (
    <li className={`accordion-item ${isOpen ? 'is-active' : ''}`} data-accordion-item>
      <Link to={`/produkter/${category.slug}`} className={`accordion-title ${hasChildren ? 'show-plus' : ''}`} onClick={handleToggle}>
        {category.name}
      </Link>
      {hasChildren && (
        <div className={`accordion-content ${isOpen ? 'is-open' : ''}`} data-tab-content>
          <ul>
            {category.children.map((child) => (
              <CategoryItem key={child.id} category={child} onClick={onClick} isOpen={false} toggleOpen={toggleOpen} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const DEFAULT_WC_PLACEHOLDER = 'http://popcorn.local/wp-content/uploads/woocommerce-placeholder.png'; // Replace with the actual path

const SingleProductView = ({ product, goBack }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const isStockAvailable = product.stock_status === 'instock';
    const stockColor = isStockAvailable ? 'green' : 'red';
    const stockText = isStockAvailable ? 'På lager' : 'Ikke på lager';
    const stockQuantity = product.stock_quantity;
    const productImageSrc = (product.images && product.images.length > 0) ? product.images[0].src : DEFAULT_WC_PLACEHOLDER;
    console.log("Rendering product in SingleProductView:", product);  // <-- Added this line
      
    if (!product) {
        return <p>Error: No product data available</p>;
    }
  
    return (
      <div className="grid-x">
        <div className="cell small-12">
            <button onClick={goBack}>Tilbake</button>
        </div>
        <div className="cell small-12 medium-6">
          <img src={productImageSrc} alt={product.name} />
        </div>
        <div class="cell small-12 medium-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} NOK</p>
            <div className="stock-status">
              <div className="stock-indicator" style={{ backgroundColor: stockColor }}></div>
              <span>{stockText}</span>
              {isStockAvailable && <span> (Antall: {stockQuantity})</span>}
            </div>
            <div class="grid-x grid-padding-x grid-padding-y align-middle">
                <div class="cell small-12 medium-2 centered-content">
                    <button class="quantity-adjust" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                </div>
                <div class="cell small-12 medium-3 centered-content">
                    <input class="no-margin" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div class="cell small-12 medium-2 centered-content">
                    <button class="quantity-adjust" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div class="cell small-12">
                    <button onClick={CartModule.addToCart(product.id, quantity)}>Legg i handlekurv</button>
                </div>
                <div class="cell small-12">
                  <div className="attribute-tabs">
                    <ul>
                      {product.attributes && product.attributes.map((attribute, index) => (
                        <li key={index}>
                          <button onClick={() => setSelectedAttribute(attribute)}>
                            {attribute.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="attribute-details">
                      {selectedAttribute && (
                        <div>
                          <h3>{selectedAttribute.name}</h3>
                          <p>{selectedAttribute.options.join(', ')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  

  const ShopPage = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Add this line
    const [loading, setLoading] = useState(true);
    const [openCategoryId, setOpenCategoryId] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const { categorySlug, productId } = useParams();
    const DEFAULT_WC_PLACEHOLDER = 'http://popcorn.local/wp-content/uploads/woocommerce-placeholder.png'; // Replace with the actual path
  
    useEffect(() => {
      if (categorySlug) {
          const matchedCategory = categories.find(cat => cat.slug === categorySlug);
          if (matchedCategory) {
              setSelectedCategory(matchedCategory.id);
          }
          setProducts([]); // Clear the current products when switching categories
          setCurrentProduct(null); // Ensure no product detail view is shown when switching categories
      } else {
          setSelectedCategory(null); // Reset to showing all products or a default set
      }
  }, [categorySlug, categories]);   
  
    const viewProduct = (product) => {
      setCurrentProduct(product);
    };
  
    const toggleOpen = (categoryId) => {
      if (openCategoryId === categoryId) {
        setOpenCategoryId(null);
      } else {
        setOpenCategoryId(categoryId);
      }
    };
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('https://popcorn.local/wp-json/wc/v3/products/categories', {
            params: {
              consumer_key: 'ck_79bba81551fcd8030aaf8df1a36e95158472c4b6',
              consumer_secret: 'cs_5b546e1ce5f151a35bf9c85ce39061b1de741165',
              per_page: 50
            },
          });
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []);

    useEffect(() => {
      const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`https://popcorn.local/wp-json/wc/v3/products/${productId}`, {
                params: {
                    consumer_key: 'ck_79bba81551fcd8030aaf8df1a36e95158472c4b6',
                    consumer_secret: 'cs_5b546e1ce5f151a35bf9c85ce39061b1de741165',
                },
            });
            console.log("Fetched product:", response.data);  // <-- Added this line
            setCurrentProduct(response.data);
        } catch (error) {
            console.error('Error fetching single product:', error);
        }
    };    
  
      if (productId) {
          fetchSingleProduct();
      }
    }, [productId]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const params = {
            consumer_key: 'ck_79bba81551fcd8030aaf8df1a36e95158472c4b6',
            consumer_secret: 'cs_5b546e1ce5f151a35bf9c85ce39061b1de741165',
          };
          if (selectedCategory) {
            params.category = selectedCategory;
          }
          const response = await axios.get('https://popcorn.local/wp-json/wc/v3/products', { params });
          setProducts(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, [selectedCategory]);
  
    if (loading) return <p>Laster inn...</p>;
  
    const nested = categories.map(category => {
      if (category.parent === 0) {
        category.children = categories.filter(c => c.parent === category.id);
      }
      return category;
    }).filter(category => category.parent === 0);
  
    return (
      <div className="grid-x grid-padding-x grid-padding-y">
        <div className="cell small-3">
          <ul className="accordion" data-accordion>
            {nested.map((category) => (
              <CategoryItem key={category.id} category={category} onClick={setSelectedCategory} isOpen={openCategoryId === category.id} toggleOpen={toggleOpen} />
            ))}
          </ul>
        </div>
        <div className="cell small-9">
    {currentProduct ? (
        <SingleProductView product={currentProduct} goBack={() => setCurrentProduct(null)} />
    ) : (
        <div className="grid-x grid-padding-x align-stretch">
            {products.map((product) => (
                <div className="cell small-3 product-card-container" key={product.id}>
                   <Link to={`/produkter/${categorySlug}/${product.id}`}>
                    <div className="card">
                        <div className="card-section">
                            <img 
                                src={product.images && product.images.length > 0 ? product.images[0].src : DEFAULT_WC_PLACEHOLDER} 
                                alt={product.name} 
                                className="product-image" 
                            />
                            <h4>{product.name}</h4>
                            <p className="price-front">{product.price} NOK</p>
                        </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ShopPage;
