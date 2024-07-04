import Loader from "./Loader";

const UserDetails = (props) => {
  const userDetails = props.userDetails;
  return (
    <div className="user-details-section">
      <h2>User Details</h2>

      {userDetails ? (
        userDetails?.map((user) => {
          return (
            <div key={user.Bio} className="user-details">
              <img src={user.avatar} alt={`${user.profile.firstName} image`} />
              <div className="details">
                <p>
                  Name: {user.profile.firstName} {user.profile.lastName}
                </p>
                <p>Job Title: {user.jobTitle}</p>
                <p>Username: {user.profile.username}</p>
                <p>Email: {user.profile.email}</p>
                <p>Bio: {user.Bio}</p>
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserDetails;
