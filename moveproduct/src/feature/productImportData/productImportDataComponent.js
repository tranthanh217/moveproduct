import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addTodo } from "./productImportDataAction";
import { getListResult } from "../listLink/listLinkResultAction";
import ListLinkResult from "../listLink/listLinkResultComponent";
import { GET_RESULT } from "../../actions/actionType";

function ProductImportData() {
  const dispatch = useDispatch();
  const showKeyWordTest = useSelector(
    (state) => state.getInforDB,
    shallowEqual
  );
  const getListResults = useSelector(
    (state) => state.getLR.listResult,
    shallowEqual
  );
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [formData, updateFormData] = useState([]);

  useEffect(async () => {
    console.log("numpage", activePage);
    let data = await getListResult(activePage);
    dispatch({
      type: GET_RESULT,
      payload: data,
    });

    // getListResult(activePage).then((data) => {
    //     dispatch({
    //       type: GET_RESULT,
    //       payload: data,
    //     });
    //   });
  }, [activePage]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleChangeCheckbox = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };
  const runTest = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(addTodo(formData));
    setTimeout(() => {
      setLoading(false);
      updateFormData([]);
    }, 500);
  };
  const submitMoveData = () => {
    setLoading(true);

    dispatch(getListResult(activePage));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <span className="contact100-form-title">
          Move product {showKeyWordTest.keyword}
        </span>
        <div className="input-prepend mb-3">
          <span className="add-on">Keyword</span>
          <input
            id="keyword"
            name="keyword"
            className="input-xlarge form-control"
            placeholder="pullze,pijama ..."
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="databases mb-3">
          <div className="col-12">
            <div className="row justify-content-between position-relative">
              <div className="input-prepend">
                <span className="add-on">
                  <i className="fa fa-database" aria-hidden="true">
                    {" "}
                  </i>{" "}
                  data 1
                </span>
                <select
                  className="custom-select select-data-one d-block"
                  name="database_first"
                  onChange={handleChange}
                >
                  <option value="null">Choose store...</option>
                  <option value="datafirst-1">data first 1</option>
                  <option value="datafirst-2">data first 2</option>
                </select>
              </div>
              <div className="input-prepend">
                <span className="add-on">
                  <i className="fa fa-database" aria-hidden="true">
                    {" "}
                  </i>{" "}
                  data 2
                </span>
                <select
                  className="custom-select select-data-two d-block"
                  name="database_second"
                  onChange={handleChange}
                >
                  <option value="">Choose store...</option>
                  <option value="datasecond-1">data second 1</option>
                  <option value="datasecond-2">data second 2</option>
                </select>
              </div>
              <div className={`icon-move load ${loading ? "loading" : ""}`}>
                <div className="loading-icon load-icon">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-line position-relative mb-4">
          <span className="title-tax">Taxonomy</span>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="product_cat"
              name="product_cat"
              onChange={handleChangeCheckbox}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Product category
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="product_tag"
              name="product_tag"
              onChange={handleChangeCheckbox}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Product tag
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="collection"
              name="collection"
              onChange={handleChangeCheckbox}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              Collections
            </label>
          </div>
        </div>
        <div className="btn-submit mb-4">
          <div className="runTest btn btn-secondary" onClick={runTest}>
            Run Test
          </div>
          <div
            className="submitMoveData btn btn-primary"
            onClick={submitMoveData}
          >
            Run
          </div>
        </div>
        <div className="list-result">
          <div className="infor-result">
            <div className="title-result">List data result</div>
            <div className="detail-infor-result">
              <div className="processing">Processing: 100% of 999 products</div>
            </div>
          </div>
          <ListLinkResult />
        </div>
        <Pagination
          hideDisabled
          activePage={activePage}
          itemsCountPerPage={2}
          totalItemsCount={8}
          pageRangeDisplayed={2}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ProductImportData;
