import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSetState } from '../../hooks/useSetState';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingHandler from './LoadingHandler';

interface OwnProps {}

type Props = OwnProps;
const findLeafTypes = (children: React.ReactNode | React.ReactNode[], type: string): boolean => {
  return !!React.Children.toArray(children).find((component) => {
    const child = component as React.ReactElement;
    if (child.props && child.props.children) return findLeafTypes(child.props.children, type);
    return child.type === type;
  });
};
const LoadingImgHandler: FunctionComponent<Props> = ({ children }) => {
  const [{ loading, error }, setState] = useSetState<{ loading: boolean; error: boolean }>({
    loading: true,
    error: false
  });
  const onLoad = () => setState({ loading: false });
  const onError = () => setState({ error: true, loading: false });
  const injectHandler = () => {
    if (!React.isValidElement(children)) return children;
    if (!findLeafTypes(children, 'img')) throw new Error('LoadingImgHandler can be wrapped only around <img/> tag!');
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, { onLoad, onError });
    });
  };

  return (
    <LoadingHandler loading={loading} error={error}>
      {injectHandler()}
    </LoadingHandler>
  );
};

export default LoadingImgHandler;
