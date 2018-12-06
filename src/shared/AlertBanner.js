import React from 'react';

function AlertBanner(props) {
  let className = '';

  switch (props.status) {
    case 'success':
      className = "positive";
      break;
    case 'warning':
      className = "warning";
      break;
    case 'failure':
      className = "error";
      break;
    default:
      className = 'info';
  }

  return (
    <div className={`ui ${className} message`}>props.alertMessage</div>
  )
}

export default AlertBanner;