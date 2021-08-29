import { useState, useEffect } from "react";
import { useGraph } from "../context/graph";
import { List, Modal } from "../components";
import styled from "styled-components";

export const Page = ({ className }) => {
  const [user, setUser] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const { callEndpoint } = useGraph();

  useEffect(() => {
    const getUsers = async () => {
      let _user = await callEndpoint("http://localhost:4000/api/user");

      setUser(_user);
    };
    getUsers();
  }, []);

  const createUser = () => {
    setModalOpen(true);
  };

  return (
    <div className={className}>
      <h1>User</h1>
      <button onClick={createUser}>Create new User</button>
      <Modal open={modalOpen} onDismiss={() => setModalOpen(false)}>
        <input />
        <input />
        <input />
      </Modal>
      <List items={user} />
    </div>
  );
};

export const StyledPage = styled(Page)`
  max-width: 980px;
  margin: auto;
  h1 {
    border-bottom: 1px solid;
  }
`;
