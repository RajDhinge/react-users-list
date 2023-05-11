import React from "react";

const ErrorModal = (props) => {
	return <div>
		Invalid Input
		<button onClick={props.onWarningDismiss}>ok</button>
	</div>;
};

export default ErrorModal;