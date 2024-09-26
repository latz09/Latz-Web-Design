'use client'

// components/VideoPlayer.js
import ReactPlayer from 'react-player';
import { useRef } from 'react';



const VideoPlayer = ({ videoData }) => {
	// Extract the video URL from videoData
	const url = videoData?.videoUrl;
	const playerRef = useRef();

	

	return (
		<div className="relative overflow-hidden shadow-lg  shadow-primary/20 my-4  ">
			{/* Video Player using custom styles */}
			<div className="react-player-wrapper grid place-items-center h-full">
				<ReactPlayer
					ref={playerRef}
					url={url}
					controls={true}
					width="100%"
					height="100%"
					className="react-player"
				/>
			</div>
			{/* Fullscreen Button */}
			
		</div>
	);
};

export default VideoPlayer;
