const User = (props) => {
  const { avatar, jobTitle, profile } = props.user;
  const handleUserDetails = props.handleUserDetails;

  return (
    <div className="user-section">
      <img src={avatar} alt={`${profile.firstName} profile picture`} />

      <div className="user-info">
        <h2>
          {profile.firstName} {profile.lastName}
        </h2>
        <span>{jobTitle}</span>
        <p>{profile.username}</p>
      </div>

      <button
        role="button"
        className="view-button"
        onClick={() => handleUserDetails(props.user)}
      >
        View Details
      </button>
    </div>
  );
};

export default User;
