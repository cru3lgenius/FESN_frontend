import React from "react";

export default () => {
  return (
    <div id="page-header">
      <div className="cell p-3">
        <div className="container">
          <div className="row">
            <div className="m-auto text-center col-md-6">
              <h1 className="not-found-heading">Error 404</h1>
              <p className="not-found-text">
                The page you clicked may be removed or it doesn't exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
