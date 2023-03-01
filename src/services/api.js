import instance from "../utils/AxiosCustomize";
const getProducts = () => {
  return instance.get("product");
};
export { getProducts };
