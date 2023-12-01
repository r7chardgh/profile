import React from 'react'
const getUser = (userState) => {
    const [user, setUser] = React.useState(userState);
    React.useEffect(() => {
        fetch("/profile.json")
          .then((res) => res.json())
          .then((data) => setUser(data.user));
      }, []);
    return {
        user
    }
};

export default getUser;
