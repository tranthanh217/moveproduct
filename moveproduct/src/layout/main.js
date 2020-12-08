import React , {useState} from "react";
import Pagination from "react-js-pagination";
import { connect, useSelector } from 'react-redux';
import { addTodo } from "../actions/actionMoveData";

function Header(props) {
    const [loading,setLoading] = useState('');
    const [activePage,setActivePage] = useState(1);
    const [formData, updateFormData] = useState([]);
    const handleChange = (e) => {
        updateFormData({
          ...formData,
          [e.target.name]: e.target.value.trim()
        });
      };

    const runTest = (e) =>{
        e.preventDefault();
        setLoading('loading');
        props.addTodo({formData});
        setTimeout(() => {
            setLoading('');
            updateFormData([]);
        }, 1000);
    };
    const submitMoveData = () =>{
        setLoading('loading');
        setTimeout(() => {
            setLoading('');
        }, 1000);
    };
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
      }
      
  return (
      <div className="container-contact100">
          <div className="wrap-contact100">
            <span className="contact100-form-title">
                Move product 
            </span>
            <div className="input-prepend mb-3">
                <span className="add-on">Keyword</span>
                <input id="keyword" name="keyword" className="input-xlarge form-control" placeholder="pullze,pijama ..." onChange={handleChange}  type="text"/>
            </div>
            <div className="databases mb-3">
                <div className="col-12">
                    <div className="row justify-content-between position-relative">
                        <div className="input-prepend">
                            <span className="add-on"><i className="fa fa-database" aria-hidden="true"> </i> data 1</span>
                            <select className="custom-select select-data-one d-block" name="database_first" onChange={handleChange}>
                                <option value="null">Choose store...</option>
                                <option value="datafirst-1">data first 1</option>
                                <option value="datafirst-2">data first 2</option>
                            </select>
                        </div>
                        <div className="input-prepend">
                            <span className="add-on"><i className="fa fa-database" aria-hidden="true"> </i> data 2</span>
                            <select className="custom-select select-data-two d-block" name="database_second" onChange={handleChange}>
                                <option value="">Choose store...</option>
                                <option value="datasecond-1">data second 1</option>
                                <option value="datasecond-2">data second 2</option>
                            </select>
                        </div>
                        <div className={`icon-move load ${loading}`}>
                            <div className="loading-icon load-icon"><i></i><i></i><i></i><i></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-line position-relative mb-4">
                <span className="title-tax">Taxonomy</span>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="product_cat" name="product_cat" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Product category</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="product_tag" name="product_tag" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Product tag</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="collection" name="collection" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Collections</label>
                </div>
            </div>
            <div className="btn-submit mb-4">
                <div className="runTest btn btn-secondary" onClick={runTest}>Run Test</div>
                <div className="submitMoveData btn btn-primary" onClick={submitMoveData}>Run</div>
            </div>
            <div className="list-result">
            <div className="infor-result">
                <div className="title-result">List data result</div>
                <div className="detail-infor-result">
                    <div className="processing">Processing: 100% of 999 products</div>
                </div>
            </div>
            <table className="table table-hover table-bordered mb-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Link data 1</th>
                    <th scope="col">Link data 2</th>
                    <th scope="col">Startus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><i className="fa fa-check-circle" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><i className="fa fa-check-circle done" aria-hidden="true"></i></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <Pagination
                hideDisabled
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                />
          </div>
      </div>
    
  );
}
function mapDispatchToProps(dispatch){
    return{
        addTodo:(formData) => dispatch(addTodo(formData))
    } 
}

export default connect(null, mapDispatchToProps)(Header);
