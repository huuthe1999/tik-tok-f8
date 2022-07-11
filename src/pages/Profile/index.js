import { useParams } from 'react-router-dom';

const Profile = () => {
	const { nickname } = useParams();
	return <div>Profile {nickname}</div>;
};

export default Profile;
