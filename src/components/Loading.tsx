import React from 'react';
import { css } from '@emotion/core';
import { PulseLoader } from 'react-spinners'; // https://github.com/davidhu2000/react-spinners

const override = css`
  margin: 100px;
  border-color: red;
  border-width: 10px;
  flex: 1;
`;

const Loading: React.FunctionComponent<{ isLoading: boolean }> = ({
  isLoading
}) => {
  return (
    <PulseLoader
      css={override}
      sizeUnit={'px'}
      size={10}
      color={'#36D7B7'}
      margin={'10px'}
      loading={isLoading}
    />
  );
};

export default Loading;
