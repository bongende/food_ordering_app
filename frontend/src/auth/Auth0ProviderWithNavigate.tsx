import React from "react";
import PropTypes from "prop-types";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;

  return <div></div>;
};

export default Auth0ProviderWithNavigate;
