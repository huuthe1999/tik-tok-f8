import {
	CameraIcon,
	HomeIcon,
	MusicIcon,
	PeopleIcon,
	TagIcon,
} from '@/assets/icons';
import { DropdownItem } from '@/components/DropdownItem';
import ROUTES from '@/configs/Routes';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import UserNav from './UserNav';
const cx = classNames.bind(styles);

const discoverList = [
	{
		id: 1,
		icon: <TagIcon />,
		title: 'suthatla',
	},
	{
		id: 2,
		icon: <TagIcon />,
		title: 'mackedoi',
	},
	{
		id: 3,
		icon: <MusicIcon />,
		title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
	},
	{
		id: 4,
		icon: <MusicIcon />,
		title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
	},
	{
		id: 5,
		icon: <MusicIcon />,
		title: 'Thiên Thần Tình Yêu - RICKY STAR',
	},
	{
		id: 6,
		icon: <TagIcon />,
		title: '7749hieuung',
	},
	{
		id: 7,
		icon: <TagIcon />,
		title: 'genzlife',
	},
	{
		id: 8,
		icon: <MusicIcon />,
		title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
	},
];

const footerList = [
	[
		{
			id: 1,
			to: '/about',
			title: 'Giới thiệu',
		},
		{
			id: 2,
			to: '/browser',
			title: 'TikTok Browse',
		},
		{
			id: 3,
			to: '/newsroom',
			title: 'Bảng tin',
		},
		{
			id: 4,
			to: '/contact',
			title: 'Liên hệ',
		},
		{
			id: 5,
			to: '/careers',
			title: 'Sự nghiệp',
		},
		{
			id: 6,
			to: '/byte-dance',
			title: 'Byte Dance',
		},
	],
	[
		{
			id: 1,
			to: '/forgood',
			title: 'TikTok for Good',
		},
		{
			id: 2,
			to: '/advertisement',
			title: 'Quảng cáo',
		},
		{
			id: 3,
			to: '/developers',
			title: 'Developers',
		},
		{
			id: 4,
			to: '/transparency',
			title: 'Transparency',
		},
		{
			id: 5,
			to: '/tiktok-rewards',
			title: 'TikTok Rewards',
		},
	],
	[
		{
			id: 1,
			to: '/support',
			title: 'Trợ giúp',
		},
		{
			id: 2,
			to: '/safety',
			title: 'An toàn',
		},
		{
			id: 3,
			to: '/legal/terms-of-service-row',
			title: 'Điều khoản',
		},
		{
			id: 4,
			to: '/legal/privacy-policy-row',
			title: 'Quyền riêng tư',
		},
		{
			id: 5,
			to: '/creators/creator-portal',
			title: 'Creator Portal',
		},
		{
			id: 6,
			to: '/community-guidelines',
			title: 'Hướng dẫn Cộng đồng',
		},
	],
];

const mains = [
	{
		icon: 'home',
		content: 'Dành cho bạn',
		iconComponent: <HomeIcon />,
		to: ROUTES.HOME,
	},
	{
		icon: 'people-outline',
		content: 'Đang Follow',
		iconComponent: <PeopleIcon />,
		to: ROUTES.FOLLOWING,
	},
	{
		icon: 'videocam-outline',
		content: 'LIVE',
		iconComponent: <CameraIcon />,
		to: ROUTES.LIVE,
	},
];

const recommendList = [
	{
		id: 1,
		nickname: 'Mạnh Tiến Khôi 🐯',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec5114cce9483d32f1c5d55a7b39f108~c5_100x100.jpeg?x-expires=1657951200&x-signature=34jJDKS9%2B13vVTsRbSh7zJZr5Sc%3D',
		full_name: 'manhtienkhoi_',
		tick: true,
	},
	{
		id: 2,
		nickname: 'Theanh28 Entertainment',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1657983600&x-signature=%2FBd2oKadnvWd5STrNc4gm4bGOZc%3D',
		full_name: 'theanh28entertainment',
		tick: true,
	},
	{
		id: 3,
		nickname: 'Kiệt Hà Tịnh',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ba2aad87bd8bafe7f4a4850d15bc4d47~c5_100x100.jpeg?x-expires=1657983600&x-signature=YSXP75pSAgCAV%2BKSBK64ZH4ponc%3D',
		full_name: 'tuankiet.2000',
		tick: true,
	},
	{
		id: 4,
		nickname: 'Tiin.vn',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1657983600&x-signature=ASaos3GABLWT6%2ByGI7u0ITdrj6g%3D',
		full_name: 'tiin.vn',
		tick: true,
	},
	{
		id: 5,
		nickname: 'AnNhiên ❤️ BốiBối',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1657983600&x-signature=A7boL0uCqBr4kwOs1I5E%2FbwJMnA%3D',
		full_name: 'annhien_boiboi',
		tick: true,
	},
];

const loadMoreList = [
	{
		id: 6,
		nickname: 'Mạnh Tiến Khôi 🐯',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec5114cce9483d32f1c5d55a7b39f108~c5_100x100.jpeg?x-expires=1657951200&x-signature=34jJDKS9%2B13vVTsRbSh7zJZr5Sc%3D',
		full_name: 'manhtienkhoi_',
		tick: true,
	},
	{
		id: 7,
		nickname: 'Theanh28 Entertainment',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1657983600&x-signature=%2FBd2oKadnvWd5STrNc4gm4bGOZc%3D',
		full_name: 'theanh28entertainment',
		tick: true,
	},
	{
		id: 8,
		nickname: 'Kiệt Hà Tịnh',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ba2aad87bd8bafe7f4a4850d15bc4d47~c5_100x100.jpeg?x-expires=1657983600&x-signature=YSXP75pSAgCAV%2BKSBK64ZH4ponc%3D',
		full_name: 'tuankiet.2000',
		tick: true,
	},
	{
		id: 9,
		nickname: 'Tiin.vn',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1657983600&x-signature=ASaos3GABLWT6%2ByGI7u0ITdrj6g%3D',
		full_name: 'tiin.vn',
		tick: true,
	},
	{
		id: 10,
		nickname: 'AnNhiên ❤️ BốiBối',
		avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1657983600&x-signature=A7boL0uCqBr4kwOs1I5E%2FbwJMnA%3D',
		full_name: 'annhien_boiboi',
		tick: true,
	},
];
const Sidebar = () => {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('main')}>
				{mains.map((item, index) => (
					<DropdownItem
						key={index}
						isNavItem
						className={cx('main-css')}
						{...item}
					/>
				))}
			</div>
			<UserNav
				title='Tài khoản được đề xuất'
				recommendList={recommendList}
				loadMoreList={loadMoreList}
				isTooltipNav
			/>
			<UserNav
				title='Các tài khoản đang follow'
				recommendList={recommendList}
				loadMoreList={loadMoreList}
			/>
			<div className={cx('discover')}>
				<p className={cx('discover-title')}>Khám phá</p>
				<div className={cx('discover-list')}>
					{discoverList.map(({ id, icon, title }) => (
						<Link key={id} to={'/'} className={cx('discover-item')}>
							<div className={cx('discover-itemContent')}>
								{icon}
								<p>{title}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className={cx('footer')}>
				{footerList.map((list, index) => {
					return (
						<div key={index} className={cx('footer-wrapper')}>
							{list.map(({ id, to, title }) => (
								<Link
									key={id}
									to={to}
									target='_blank'
									className={cx('footer-item')}>
									{title}
								</Link>
							))}
						</div>
					);
				})}
				<div>
					<HeadlessTippy
						interactive
						offset={[0, 8]}
						placement='top-start'
						render={attrs => (
							<div
								className={cx('footer-tooltip')}
								tabIndex={-1}
								{...attrs}>
								<Link
									to={'/legal/law-enforcement'}
									className={cx('footer-tooltip-content')}>
									NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
								</Link>
							</div>
						)}>
						<div className={cx('footer-more')}>
							<span>Thêm</span>
						</div>
					</HeadlessTippy>
				</div>
				<span className={cx('footer-copyRight')}>© 2022 TikTok</span>
			</div>
		</div>
	);
};

export default Sidebar;
