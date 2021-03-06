import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import "./style.css";
import { valueToObjectRepresentation } from "@apollo/client/utilities";
import { QUERY_CARDS } from "../../utils/queries";

function ProductList() {
  // const [images, setImages] = useState(null);
  // const { loading } = useQuery(QUERY_CARDS, {
  //   onCompleted(data) {
  //     setImages(data.getCardImages);
  //   },
  //   onError(error) {
  //     console.log(error);
  //   },
  // });
  // return (
  //   <div className="cardBlock">
  //     {images === null ? (
  //       <div>Loading...</div>
  //     ) : (
  //       images.map((item, key) => (
  //         <div key={key}>
  //           <img className="cardImg" src={item.url} key={item.url} />
  //           <p className="cardName" key={item.public_id}>
  //             {item.public_id}
  //           </p>
  //           <p className="cardName">Price: {randomPrice} </p>
  //           <button className="buttonStyle">Add to cart</button>
  //         </div>
  //       ))
  //     )}
  //   </div>
  // );
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);
  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }
  return (
    <div className="my-2">
      <h2>Card List:</h2>
      {state.products.length ? (
        <div className="cardBlock">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added cards yet !</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}
export default ProductList;
