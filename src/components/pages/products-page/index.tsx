import { useDispatch, useSelector } from "react-redux";
import WrapperCards from "../../common/wrapper-cards";
import { useDeferredValue, useEffect, useState } from "react";
import SearchInput from "../../common/section-top-content/query-boxes/SearchInput";
import SortSelect from "../../common/section-top-content/query-boxes/SortSelect";
import RowsOfPageSelect from "../../common/section-top-content/query-boxes/RowsOfPageSelect";
// new
import { setPage, setSearch,} from "../../../redux/slices/ProductsParams";
import { useProducts } from "../../../core/services/APIs/get-api/GetAllProducts";
import TitleSection from "../../common/title-section";
import { PaginationSection, SectionTopContent } from "../../common";
import type { RootState } from "../../../redux/store";

/**
 */

const ProductWrapper = () => {
  // ----------------------- Redux & Local States -----------------------
  const productsParams = useSelector(
   (state: RootState) => state.params
  );

  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Deferred search (performance optimization)
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // ----------------------- API Calls -----------------------
  const { data, isLoading, isError } =
    useProducts(productsParams);
  const { data: dataWithoutParams, isSuccess: allIsSuccess } =
    useProducts({
      limit: undefined,
    });

  // ----------------------- Effects -----------------------
  // Update search when deferred term changes
  useEffect(() => {
    dispatch(setSearch(deferredSearchTerm));
    // alert()
  }, [deferredSearchTerm, dispatch]);

  // Calculate total pages based on all data length and limit
  useEffect(() => {
    if (dataWithoutParams && productsParams.limit) {
      setTotalPages(
        Math.ceil(dataWithoutParams.length / Number(productsParams.limit))
      );
    }
  }, [dataWithoutParams?.length, productsParams.limit]);

  // ----------------------- Handlers -----------------------
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  // ----------------------- Render -----------------------
  return (
    <div
      className="w-full flex flex-col gap-6 p-5 transition-all duration-300"
    >
      {/* Header Section */}
      <TitleSection
        title="Products"
        number={allIsSuccess ? dataWithoutParams?.length : 0}
      />

      {/* Filters Section */}
      <SectionTopContent>
        <div className="flex gap-2">
          <SortSelect />
          <RowsOfPageSelect />
        </div>
        <SearchInput setSearch={setSearchTerm} />
      </SectionTopContent>

      {/* Cards Section */}
      <WrapperCards
        usersData={data}
        isLoading={isLoading}
        isError={isError}
      />

      {/* Pagination Section */}
      <PaginationSection
        page={productsParams.page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductWrapper;
