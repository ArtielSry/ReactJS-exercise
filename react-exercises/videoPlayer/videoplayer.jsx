import React from 'react'
import Video from './components/Video';
import VideoList from './components/VideoList';

const videoplayer = () => {
  return (
    <>
      <VideoList title='Curso React'>
				<Video
					title='Video 1'
					description='lorem input'
					duration={2785}
					uploadDate={new Date(2022, 2, 12)}
				/>
				<Video
					title='Video 2'
					description='lorem input'
					duration={1356}
					uploadDate={new Date(2012, 6, 24)}
				/>
			</VideoList>
			<VideoList title='Curso de Next' />
			
    </>
  )
}

export default videoplayer
