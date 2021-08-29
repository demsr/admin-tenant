import axios from "axios";
import { useEffect, useState } from "react";
import { useGraph } from "../context/graph";
import { useAuth } from "../context/auth";
import styled from "styled-components";

export const Page = ({ className }) => {
  const [tenant, setTenant] = useState(null);

  const { callEndpoint } = useGraph();
  const { logout } = useAuth();

  useEffect(() => {
    const getTenant = async () => {
      let _tenant = await callEndpoint("http://localhost:4000/api/tenant");

      setTenant(_tenant);
    };
    getTenant();
  }, []);

  return (
    <div className={className}>
      <h1>Tenant - {tenant?.name}</h1>
      <ul>
        {tenant?.apps.map((app) => {
          return <li>{app?.name}</li>;
        })}
      </ul>
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
