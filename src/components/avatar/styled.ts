import styled, { css } from 'styled-components';

interface StyledAvatarProps {
  src?: string;
  className?: string;
  name?: string;
  hasBadge?: boolean;
  isActive?: boolean;
}

export const StyledAvatar = styled.span<StyledAvatarProps>`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  padding: 5px;
  border-radius: 50%;
  ${(pr) => pr.isActive && isActiveProp};
`;

const isActiveProp = css`
  background: #262526;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: -4px;
    left: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgba(3, 70, 75, 1) 0%,
      rgba(69, 181, 46, 1) 35%,
      rgba(21, 227, 145, 1) 100%
    );
  }
`;

const commonStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #eee;
  color: #00000;
`;

export const StyledImage = styled.img`
  ${commonStyles};
  object-fit: cover;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  color: #00000;
  ${commonStyles};
`;