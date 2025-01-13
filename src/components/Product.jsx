import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import {useParams} from 'react-router-dom'
function Product() {
    let [product , setProduct] = useState([]);
    let [load , setLoad] = useState(false);
    let {id} = useParams()

    useEffect(()=>{
        
        const getProduct = async () =>{
            setLoad(true)
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json());
            setLoad(false);
        }

        getProduct()
    },[])
    const Load = () =>{
        return(
            <>
                <h2 className='text-center'>Loading...</h2>
                <div className="col-lg-6">
                    <Skeleton height="500px" width="500px"/>
                </div>
                <div className="col-lg-6">
                    <Skeleton height={50}/>
                    <Skeleton height={50}/>
                    <Skeleton height={50} width={120}/>
                    <Skeleton height={150} />
                    <Skeleton width={120} height={60} />
                    
                    <div className='d-flex gap-5 '>
                    <Skeleton width={220} height={60} />
                    <Skeleton width={220} height={60} />
                        </div>

                </div>
            </>
        )
    }

    const ShowProduct = () =>{
        return(
           <>
           <div className="col-lg-6">
                <img src={product.image} height="500px" alt="" />
            </div>

            <div className="col-lg-6">
                <p className='fs-2 text-uppercase text-black-50 fw-bold'>Category : {product.category}</p>
                <hr className='w-75' />
                <h2 className='display-5  '>{product.title}</h2>
                <h3>
                    Rating  {product.rating && product.rating.rate}
                    <i className='fa fa-star text-warning ms-3'></i>
                    </h3>
                    <h3>Size : </h3>
                    <select name="" id="" className='form-control mt-3 mb-4'>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                <p className='fs-5 text-black-50'>{product.description}</p>
                <p className='lead fs-3 fw-bold'>Price : $ {product.price}</p>

                    <div className="button d-flex gap-5 mt-4">
                        <button className='btn btn-outline-dark fs-4 fw-bold'>
                            <i className='fa fa-cart-plus me-2'></i>
                            Add To Cart</button>
                        <button className='btn btn-outline-dark fs-4 fw-bold'>
                        <i className='fa fa-cart-plus me-2'></i>

                            Buy Now</button>
                    </div>
            </div>
           </>
           


        )
    }
  return (
    <>

        <div className="continer mt-3 p-5">
            <div className="row">
                {load ? <Load/> : <ShowProduct/>}
            </div>
        </div>
    </>
  )
}

export default Product