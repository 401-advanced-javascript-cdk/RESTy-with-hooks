import React from 'react';

import ReactJson from 'react-json-view';

const Response = props => {
  return(
    <div className="response-area">
      <div>Response</div>
      <ReactJson
      name="Headers"
      enableClipboard={false}
      collapsed={true}
      src={props.response.headers}
    />
    <ReactJson
      name="Response"
      enableClipboard={false}
      collapsed={false}
      src={props.response.body}
    />
    </div>
  );
}

export default Response;