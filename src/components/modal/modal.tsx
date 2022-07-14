import React from 'react';
import { StyledAvatar, StyledImage, StyledSpan } from './styled';

export interface AvatarProps {
  title: string;
  description?: string;
  className?: string;
  isActive?: boolean;
  width?: number;
  height?: number;
}

export const Modal: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AvatarProps
> = (props, ref) => {
  const { title, description, className, isActive = false, height = 80, width = 80, ...rest } = props;
  return (
<><div><h1>{title}</h1>
<p>{description}</p>
  </div>
  </>
  );
};

export default React.forwardRef<HTMLSpanElement, AvatarProps>(Modal);
