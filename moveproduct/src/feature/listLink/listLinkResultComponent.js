import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function ListLinkResult() {
  const getListResults = useSelector(
    (state) => state.getLR.listResult,
    shallowEqual
  );
  return (
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
          {getListResults.map((getListResult) => (
            <tr key={getListResult.id}>
              <th scope="row">{getListResult.id}</th>
              <td>
                <a href={getListResult.linkData1}>{getListResult.linkData1}</a>
              </td>
              <td>
                <a href={getListResult.linkData2}>{getListResult.linkData2}</a>
              </td>
              <td>
                <i
                  className={`fa done  ${
                    getListResult.status === true
                      ? "fa-check-circle"
                      : "fa-times-circle"
                  }`}
                  aria-hidden="true"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListLinkResult;
