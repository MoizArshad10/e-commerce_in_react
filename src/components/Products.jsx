import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
function Products() {

    let [data, setData] = useState([]);
    let [filter, setFilter] = useState(data);
    let [load, setLoad] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoad(true);
            let response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoad(false)
                console.log(filter);

            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts()
    }, [])

    const filterProduct = (cat) => {
        let updateList = data.filter((x) => x.category === cat);
        setFilter(updateList)
    }
    const Load = () => {
        return (
            <>
                <h2 className='text-center'>Loading....</h2>
                <div className="col-lg-4">
                    <Skeleton height="500px"/>
                </div>
                <div className="col-lg-4">
                    <Skeleton height="500px"/>
                   
                </div>
                <div className="col-lg-4">
                    <Skeleton height="500px"/>
                   
                </div>
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="container d-flex justify-content-center gap-2">
                    <button className='btn btn-outline-dark me-2 fs-5 fw-bold' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2 fs-5 fw-bold' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2 fs-5 fw-bold' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2 fs-5 fw-bold' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2 fs-5 fw-bold' onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>

                {filter.map((products) => {
                    return (
                        <div className="col-lg-4 mt-5">
                            <div class="card shadow-lg p-3 text-center" >
                                <img src={products.image} height="300px" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{products.title.substring(0,12)}...</h5>
                                    <p class="card-text lead fw-bold">Price : $ {products.price}</p>
                                    <NavLink to={`/products/${products.id}`} class=" btn btn-outline-dark fw-bold fs-5">
                                        <i className='fa fa-cart-plus me-2'></i>
                                        Add To Cart</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </>
        )
    }

    return (
        <>


            <div className="container py-5 my-5 ">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='text-center display-4 fw-bold'>All Products!</h2>
                        <hr className='w-50 mx-auto mb-5' />
                    </div>

                    {load ? <Load /> : <ShowProducts />}
                </div>
            </div>

        </>
    )
}

export default Products