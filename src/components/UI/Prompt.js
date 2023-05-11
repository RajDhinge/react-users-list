
const Prompt = (props) => {
	const confirmHandler = () => {
		props.onPromptConfirm(true);
	}
	const rejectHandler = () => {
		props.onPromptConfirm(false);
	}
	return <div>
		Continue?
		<button onClick={confirmHandler}>Yes</button>
		<button onClick={rejectHandler}>No</button>
	</div>;
}

export default Prompt;