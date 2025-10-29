import { useProducts } from "../../../core/services/APIs/get-api/GetAllProducts";
import WrapperCards from "../../common/wrapper-cards";

const ProductPage = () => {
  const {data , isLoading : productIsLoading , isError : productIsError} = useProducts({page:1 , limit:5 , search: undefined , sortBy: undefined});
  console.log(data)
  return <div>
    <WrapperCards usersData={data} isLoading={productIsLoading} isError={productIsError}/>
  </div>;
};

export default ProductPage;
