import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './shop-sidebar';
import { Oval } from 'react-loader-spinner';


const ShopGridV1 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const [activeTab, setActiveTab] = useState('liton_product_list');

    const publicUrl = process.env.PUBLIC_URL + '/';
    

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sqrft-website-backend-ohqz.onrender.com/api/form');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={styles.loaderContainer}>
                <Oval
                    height={70}
                    width={70}
                    color="#ff5a3c"
                    secondaryColor="#4fa94d"
                    ariaLabel="loading"
                    visible={true}
                />
            </div>
        );
    }

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Handle error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("Properties data show here", products);

    return (
        <div>
            <div className="ltn__product-area ltn__product-gutter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-2 mb-100">
                            <div className="ltn__shop-options">
                                <ul className="justify-content-start">
                                    <li>
                                        <div className="ltn__grid-list-tab-menu">
                                            <div className="nav">
                                                <a
                                                    className={activeTab === 'liton_product_grid' ? 'active show' : ''}
                                                    data-bs-toggle="tab"
                                                    href="#liton_product_grid"
                                                    onClick={() => setActiveTab('liton_product_grid')}
                                                >
                                                    <i className="fas fa-th-large" />
                                                </a>
                                                <a
                                                    className={activeTab === 'liton_product_list' ? 'active show' : ''}
                                                    data-bs-toggle="tab"
                                                    href="#liton_product_list"
                                                    onClick={() => setActiveTab('liton_product_list')}
                                                >
                                                    <i className="fas fa-list" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Product List/Grid */}
                            <div className="tab-content">
                                <div
                                    className={`tab-pane fade ${activeTab === 'liton_product_grid' ? 'active show' : ''}`}
                                >
                                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                                        <div className="row">
                                            {currentProducts.map((product) => (
                                                <div className="col-xl-6 col-sm-6 col-12 p-2" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4">

                                                        <div className="product-img go-top p-4">
                                                            <Link to={`/product-details/${product._id}`} >
                                                                <img src={product.images} alt="#" style={{ width: '150px', height: '200px', objectFit: 'contain' }} />
                                                            </Link>
                                                        </div>


                                                        <div className="product-info">
                                                            <h2>
                                                                <Link to={`/product-details/${product._id}`}>{product.title}</Link>
                                                            </h2>
                                                            <p> <i className="flaticon-pin text-danger" />
                                                                {product.address}</p>
                                                            <ul className="ltn__list-item-2">
                                                                <li>{product.rooms} Bed</li>
                                                                <li>{product.baths} Bath</li>
                                                                <li>{product.area} Sq Ft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade ${activeTab === 'liton_product_list' ? 'active show' : ''}`}
                                >
                                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                                        <div className="row">
                                            {currentProducts.map((product) => (
                                                <div className="col-lg-12 p-2" key={product.id}>
                                                    <div className="ltn__product-item ltn__product-item-4">
                                                        <div className="product-img go-top p-3">
                                                            <Link to={`/product-details/${product._id}`}>
                                                                <img src={product.images} alt="#" style={{ width: '150px', height: '200px', objectFit: 'contain' }} />
                                                            </Link>
                                                        </div>
                                                        <div className="product-info p-4">
                                                            <h2>
                                                                <Link to={`/product-details/${product._id}`}>{product.title}</Link>
                                                            </h2>
                                                            <p><i className="flaticon-pin text-danger" />
                                                                {product.address}</p>
                                                            <ul className="ltn__list-item-2">
                                                                <li>{product.rooms} Bed</li>
                                                                <li>{product.baths} Bath</li>
                                                                <li>{product.area} Sq Ft</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="ltn__pagination-area text-center">
                                <div className="ltn__pagination">
                                    <ul>
                                        {pageNumbers.map((number) => (
                                            <li
                                                key={number}
                                                className={number === currentPage ? 'active' : ''}
                                            >
                                                <Link to="#" onClick={() => setCurrentPage(number)}>
                                                    {number}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
};

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh', // Full screen height
        width: '100%',   // Full screen width
    },
};


export default ShopGridV1;