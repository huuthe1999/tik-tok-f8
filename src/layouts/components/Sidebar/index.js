import { CameraIcon, HomeIcon, PeopleIcon } from '@/assets/icons';
import { DropdownItem } from '@/components/DropdownItem';
import ROUTES from '@/configs/Routes';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import UserNav from './UserNav';
const cx = classNames.bind(styles);

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
			/>
			<UserNav
				title='Các tài khoản đang follow'
				recommendList={recommendList}
				loadMoreList={loadMoreList}
			/>
			<div className={cx('footer')}></div>
		</div>
	);
};

export default Sidebar;
