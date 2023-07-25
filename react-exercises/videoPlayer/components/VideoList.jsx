const VideoList = ({ title, children }) => {
	return (
		<>
			<h1>{title}</h1>
			{children || <p>No hay videos todavia</p>}
		</>
	);
};

export default VideoList;
