import React  from "react";

function ListLinkResult(props){
    console.log(props.totalItemsCount);
    return(
        <div>
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
                    <td><a href="#" >Mark</a></td>
                    <td><a href="#" >Otto</a></td>
                    <td><i className="fa fa-check-circle" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><a href="#" >Mark</a></td>
                    <td><a href="#" >Otto</a></td>
                    <td><i className="fa fa-times-circle" aria-hidden="true"></i></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td><a href="#" >Mark</a></td>
                    <td><a href="#" >Otto</a></td>
                    <td><i className="fa fa-check-circle done" aria-hidden="true"></i></td>
                </tr>
                
            </tbody>
        </table>
        </div>
        
    );
}
export default ListLinkResult;