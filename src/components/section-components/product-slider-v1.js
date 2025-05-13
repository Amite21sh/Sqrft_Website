import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactForm from './contact-form';
import { AiOutlineClose } from 'react-icons/ai';

const ProductSliderV1 = () => {
  const [productData, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [timer, setTimer] = useState(5); // Timer for countdown
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sqrft-website-backend.onrender.com/api/form');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("Product data:", productData);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setShowCountdown(false);
  };

  const handleFormSubmit = () => {
    setShowCountdown(true);
    let countdown = 3;
    setTimer(countdown);

    const countdownInterval = setInterval(() => {
      countdown -= 1;
      setTimer(countdown);

      if (countdown <= 0) {
        clearInterval(countdownInterval);
        setShowModal(false);
        setShowCountdown(false);
        navigate(`/product-details/${productData._id}`, { replace: true });
      }
    }, 1000);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderProductItem = (product) => (
    <div className="col-lg-12" key={product._id} onClick={() => handleProductClick(product)}>
      <div className="ltn__product-item ltn__product-item-4 text-center---">
        <div className="product-img go-top">
          <img src={product.images || 'placeholder.png'} alt={product.title || 'No Title'} />
          <div className="product-badge">
            <ul>
              <li className="sale-badge bg-green">{product.propertyStatus || 'New'}</li>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <i className="flaticon-pin" /> {product.address || 'Unknown'}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>
              {product.price || '$0'}
              <label>{product.price_label || ''}</label>
            </span>
          </div>
          <h2 className="product-title go-top">
            <span>{product.title || 'No Title'}</span>
          </h2>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {productData.length > 0 ? (
        <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Properties
                  </h6>
                  <h1 className="section-title">Featured Listings</h1>
                </div>
              </div>
            </div>

            <Slider {...sliderSettings}>
              {productData.map((product) => renderProductItem(product))}
            </Slider>
          </div>
        </div>
      ) : (
        <div>No products available to display.</div>
      )}

      {/* Modal for ContactForm */}
      {showModal && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '50px',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              background: '#fff',
              marginTop: '88px',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              maxWidth: '1000px',
              width: '90%',
              maxHeight: '666px',
              position: 'relative',
            }}
          >
            {showCountdown && (
              <div style={{ textAlign: 'center', fontSize: '18px' }}>
                Redirecting in {timer} seconds
              </div>
            )}
            <ContactForm onSubmit={handleFormSubmit} />
            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Add responsive styles */}
          <style jsx>{`
    @media (max-width: 768px) {
      .modal-content {
        margin-top: 20px;
        border-radius: 8px;
        padding: 15px;
        max-width: 100%;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
      }
    }

    @media (max-width: 480px) {
      .modal-content {
        padding: 10px;
        margin-top: 10px;
        font-size: 14px;
      }

      .close-modal {
        font-size: 18px;
      }
    }
  `}</style>
        </div>

      )}
    </div>
  );
};

export default ProductSliderV1;