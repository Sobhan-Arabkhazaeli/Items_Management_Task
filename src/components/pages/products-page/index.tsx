import { useProducts } from "../../../core/services/APIs/get-api/GetAllProducts";

const ProductPage = () => {
  const {data} = useProducts({page:1 , limit:5 , search: undefined , sortBy: undefined});
  console.log(data)
  return <div>ProductPage</div>;
};

export default ProductPage;
