import { useHistory } from "react-router-dom";
import { Commandbar } from ".";

export const Component = () => {
  const history = useHistory();

  const items = [
    {
      key: "start",
      text: "Start",
      onClick: () => history.push("/"),
    },
    {
      key: "user",
      text: "User",
      onClick: () => history.push("/user"),
    },
  ];

  const farItems = [
    {
      key: "logout",
      text: "Logout",
      href: "http://localhost:4000/logout",
    },
  ];

  return <Commandbar items={items} farItems={farItems} />;
};
