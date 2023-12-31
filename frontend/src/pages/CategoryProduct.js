import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    sortProductsByPrice(sortOrder);
  }, [sortOrder]);

  useEffect(() => {
    sortProductsByDate(sortBy);
  }, [sortBy]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to sort products by price
  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };

  const sortProductsByDate = (sortBy) => {
    const sortedProducts = [...products];
    if (sortBy === "recent") {
      sortedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortBy === "first") {
      sortedProducts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }
    setProducts(sortedProducts);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    sortProductsByPrice(sortOrder);
  }, [sortOrder]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category ">
        <div className="text-left mb-3">
          <label htmlFor="sortOrder" className="category-sortOrder">
            Sort by Price:
          </label>
          <select
            id="sortOrder"
            className="category-form-select"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>

          <label htmlFor="sortBy" className="category-sortOrder">
            Sort by Date:
          </label>
          <select
            id="sortBy"
            className="category-form-select"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <option value="default">Default</option>
            <option value="recent">Recently Added</option>
            <option value="first">First Added</option>
          </select>
        </div>

        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-15 ">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Loadmore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
