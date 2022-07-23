import { MuteIcon, PauseIcon, PlayIcon, SoundIcon } from '@/assets/icons';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './VideoItem.module.scss';
const cx = classNames.bind(styles);

const VideoItem = () => {
	const [showPlay, setShowMorePlay] = useState(true);

	const [mute, setMute] = useState(true);

	// Pause/Play
	const handlePause = () => {
		setShowMorePlay(false);
	};
	const handlePlay = () => {
		setShowMorePlay(true);
	};

	// Mute/Unmute
	const handleToggleMute = () => {
		setMute(!mute);
	};
	return (
		<div className={cx('wrapper')}>
			<canvas
				width='56.25'
				height='100'
				className={cx('wrapper-placeholder')}
			/>
			<div className={cx('cardVideo')}>
				<div className={cx('cardVideo-content')}>
					<video
						src='https://v16-webapp.tiktok.com/87273ce188e9a618c96d33e6553b13ed/62dad1ab/video/tos/maliva/tos-maliva-ve-0068c799-us/a2004ba399db48eaa149dcafc6b468ce/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1602&bt=801&btag=80000&cs=0&ds=3&ft=z_piDPWT2NvjVcBeqOzfuCYQFAe4nRQjl0P~2tOB&mime_type=video_mp4&qs=0&rc=O2c6aTk3NDw3ZDtmZDhlNUBpM2twaGQ6Zjd0ZDMzZzczNEBeLjEuXjYyXi4xYV81LjQyYSNpMzU0cjRvMTZgLS1kMS9zcw%3D%3D&l=202207221034430102450020020B036265'
						className={cx('cardVideo-video')}
					/>
				</div>
				<div className={cx('cardVideo-action', 'action')}>
					{showPlay ? (
						<PlayIcon
							onClick={handlePause}
							className={cx('cardVideo-action-icon')}
						/>
					) : (
						<PauseIcon
							onClick={handlePlay}
							className={cx('cardVideo-action-icon')}
						/>
					)}
				</div>
				<div className={cx('cardVideo-control', 'action')}>
					<div className={cx('cardVideo-control-sound')}>
						{mute ? (
							<SoundIcon
								className={cx('cardVideo-control-icon')}
								onClick={handleToggleMute}
							/>
						) : (
							<MuteIcon
								className={cx('cardVideo-control-icon')}
								onClick={handleToggleMute}
							/>
						)}
						<div className={cx('cardVideo-control-volume', 'top')}>
							<div className={cx('cardVideo-control-slider')}>
								<input
									type='range'
									min='0'
									max='1'
									step='0.01'
									className={cx(
										'cardVideo-control-sliderInput',
									)}
								/>
								<div
									className={cx(
										'cardVideo-control-progress',
									)}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
VideoItem.propTypes = {
	primary: PropTypes.string,
};
export default VideoItem;
