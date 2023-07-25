import styles from './video.module.scss';

const Video = ({ title, description, uploadDate, duration }) => {
	let seconds = duration % 60;
	if(seconds < 10) seconds = '0' + seconds;
	
	const minutes = Math.floor(duration / 60);

	return (
		<div className={`${styles.container} ${styles.background}`}>
			<h3>{title}</h3>
			<div>
				<span>
					{minutes}:{seconds}{' '}
				</span>
				<span>{uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default Video;
