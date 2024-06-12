import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image-logo.svg";

export default function Logo({ size = "md" }) {
  return (
    <Link to="/">
      <StyledLogo src={logo} alt="Logo" size={size} />
    </Link>
  );
}

const SIZES = {
  sm: "124px",
  md: "146px",
  lg: "248px",
};

const StyledLogo = styled.img`
  width: ${({ size }) => SIZES[size]};
`;
