import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSetState } from '../../hooks/useSetState';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const keyframes1 = keyframes`
  0% {
    top: 36px;
    height: 128px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;
const keyframes2 = keyframes`
  0% {
    top: 42px;
    height: 116px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;
const keyframes3 = keyframes`
  0% {
    top: 48px;
    height: 104px;
  }
  50% {
    top: 60px;
    height: 80px;
  }
  100% {
    top: 60px;
    height: 80px;
  }
`;
const LoadingWrapper = styled.div<{ loading: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  .content {
    visibility: ${(props) => (props.loading ? 'hidden' : 'visible')};
  }
  .bars div {
    position: absolute;
    width: 30px;
    border-radius: 1rem;
  }
  .bars div:nth-child(1) {
    left: 35px;
    background: #f79100;
    animation: ${keyframes1} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: -0.2s;
  }
  .bars div:nth-child(2) {
    left: 85px;
    background: #00d8ff;
    animation: ${keyframes2} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    animation-delay: -0.1s;
  }
  .bars div:nth-child(3) {
    left: 135px;
    background: #8e8e8e;
    animation: ${keyframes3} 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .loading-bars {
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: none;
    display: inline-block;
    position: absolute;
    visibility: ${(props) => (props.loading ? 'visible' : 'hidden')};
  }
  .bars {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .bars div {
    box-sizing: content-box;
  }
`;
const Error = styled.div<{ error: boolean }>`
  display: inline-block;
  position: absolute;
  visibility: ${(props) => (props.error ? 'visible' : 'hidden')};
`;
interface OwnProps {}

type Props = OwnProps;
const LoadingHandler: FunctionComponent<Props> = ({ children }) => {
  const [{ loading, error }, setState] = useSetState<{ loading: boolean; error: boolean }>({
    loading: true,
    error: false
  });
  const onLoad = () => setState({ loading: false });
  const onError = () => setState({ error: true });
  const injectHandler = () => {
    if (!React.isValidElement(children)) return children;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, { onLoad, onError });
    });
  };

  return (
    <LoadingWrapper loading={loading}>
      <div className="content">{injectHandler()}</div>
      <div className="loading-bars">
        <div className="bars">
          <div />
          <div />
          <div />
        </div>
      </div>
      <Error error={error}>
        <FontAwesomeIcon icon={faExclamationCircle} spin size={'5x'} color={'red'} />
      </Error>
    </LoadingWrapper>
  );
};

export default LoadingHandler;
