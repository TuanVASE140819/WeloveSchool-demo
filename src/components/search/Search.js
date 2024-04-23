import { Link, useLocation } from "react-router-dom";
import { getListSchool } from "../../api/apiServices";
import React, { useEffect, useState } from "react";
import Paginate from "react-paginate";
import defaultLogo from "../../assets/Default/logo.jpg";
//LoadingSpinner
import LoadingSpinner from "../Loading/Loading";
const NewPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10; // Số lượng sản phẩm trên mỗi trang
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const location = useLocation();
  const { province, district, ward } = location.state;
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái tải mới

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getListSchool(
          province,
          district,
          ward,
          "",
          "",
          currentPage + 1,
          productsPerPage
        );
        const responseData = response.data;
        const responsePaging = response.paging.totalItems;
        setData(responseData);
        const calculatedPageCount = Math.ceil(responsePaging / productsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage, province, district, ward]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    // Cập nhật currentPageData khi data thay đổi
    const newPageData = data.map((product) => (
      <div key={product.id} className="flex flex-row rounded-lg p-1 bg-gray-50">
        <div className="basis-2/6 p-1">
          <img
            src={product.image ? product.image : defaultLogo}
            alt="product"
            className="rounded-lg"
          />
        </div>
        <div className="basis-4/6">
          <h1 className="text-sm sm:text-md lg:text-lg font-bold text-gray-700 min-w-[130px] min-h-[40px] overflow-hidden overflow-ellipsis ml-3">
            {product.name}
          </h1>
        </div>
      </div>
    ));
    setCurrentPageData(newPageData);
  }, [data]);

  console.log("currentPageData", currentPageData);
  return (
    <div className="flex flex-row border-b border-gray-300">
      <div className="basis-3/5 mx-auto px-1 pt-5 max-w-7xl">
        {isLoading ? (
          <div className="grid  mt-5 gap-5 mx-10 min-h-96 justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 mt-5 gap-5 mx-10">
              {currentPageData}
            </div>
            <Paginate
              previousLabel={"Trước"}
              nextLabel={"Tiếp"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"flex space-x-4 justify-center my-4"}
              pageLinkClassName={
                "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
              }
              previousLinkClassName={
                "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
              }
              nextLinkClassName={
                "px-3 py-2 border rounded text-blue-500 hover:bg-blue-500 hover:text-white"
              }
              disabledClassName={"paginationDisabled"}
              activeClassName={"active"}
              activeLinkClassName={"bg-blue-500 text-white"}
              breakClassName={"break-me"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewPage;
