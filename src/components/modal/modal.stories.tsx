import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';
import Avatar from '.';
import Modal from './modal';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

const AvatarRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  & > * {
    margin-right: 12px;
  }
`;

export const AllAvatars = () => {
  return (
    <>
<Modal title={''}/>
    </>
  );
};
