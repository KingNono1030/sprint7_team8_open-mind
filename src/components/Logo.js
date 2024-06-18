import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image-logo.svg";

export default function Logo({ size = "md" }) {
  return (
    <Link to="/">
      <StyledLogo size={size} src={logo} alt="오픈마인드 로고" />
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
