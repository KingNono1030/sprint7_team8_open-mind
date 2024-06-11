import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image-logo.svg";

export default function Logo({ size }) {
  return (
    <div>
      <Link to="/">
        <LogoImg src={logo} alt="Logo" size={size} />
      </Link>
    </div>
  );
}

const SIZES = {
  small: { width: 124, height: 49 },
  medium: { width: 146, height: 57 },
  large: { width: 248, height: 98 },
};

const LogoImg = styled.img`
  width: ${({ size }) => SIZES[size].width ?? SIZES["medium"]}px;
  height: ${({ size }) => SIZES[size].height ?? SIZES["medium"]}px;
`;
