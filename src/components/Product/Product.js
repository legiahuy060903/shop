import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/api";
const Product = () => {
  const [sp, setSP] = useState([]);
  useEffect(() => {
    getDataProduct();
  }, []);
  const getDataProduct = async () => {
    const data = await getProducts();

    if (data) {
      setSP(data.data);
    }
  };
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        {sp &&
          sp.length > 0 &&
          sp.map((item, index) => {
            return (
              <div key={`${index}-sp`} className="">
                <img src={require(`../../asset/${item.image[0]}`)} />
                <div>{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
