import User from "../Components/user";

function Profile({ users }) {
  return (
    <div>
      <h1>Profile Page</h1>
      {users.map((user, i) => (
        <User key={i} user={user} />
      ))}
    </div>
  );
}
export default Profile;
//it fetch the data during build time
//it return an obj whose key is props and contain
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
