import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LoadingImgHandler from './LoadingImgHandler';

describe('test loading handler', () => {
  beforeAll(() => cleanup());
  test('Component renders correctry', () => {
    expect(() =>
      render(
        <LoadingImgHandler>
          <div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </LoadingImgHandler>
      )
    ).not.toThrow();
  });
  test('Component throws becouse of no img tag in it', () => {
    expect(() =>
      render(
        <LoadingImgHandler>
          <div>
            <div>
              <div>
                <span>not an image</span>
              </div>
            </div>
          </div>
        </LoadingImgHandler>
      )
    ).toThrow('LoadingImgHandler can be wrapped only around <img/> tag!');
  });
  test('Shows loading', () => {
    render(
      <LoadingImgHandler>
        <img src={''} alt="" />
      </LoadingImgHandler>
    );
    const loading = screen.getByTestId('loading');
    const content = screen.getByTestId('content');
    const error = screen.getByTestId('error');
    expect(content).toHaveStyle('visibility: hidden');
    expect(loading).toHaveStyle('visibility: visible');
    expect(error).toHaveStyle('visibility: hidden');
  });
  test('Shows error', async () => {
    const { getByAltText, getByTestId } = render(
      <LoadingImgHandler>
        <img src={''} alt="acodexm" />
      </LoadingImgHandler>
    );
    const content = getByTestId('content');
    const error = getByTestId('error');
    const loading = getByTestId('loading');
    const img = getByAltText('acodexm');
    expect(img).toBeInTheDocument();
    fireEvent.error(img);
    expect(content).toHaveStyle('visibility: hidden');
    expect(loading).toHaveStyle('visibility: hidden');
    expect(error).toHaveStyle('visibility: visible');
  });
  test('Shows success', async () => {
    const { getByAltText, getByTestId } = render(
      <LoadingImgHandler>
        <img src={''} alt="acodexm" />
      </LoadingImgHandler>
    );
    const content = getByTestId('content');
    const loading = getByTestId('loading');
    const error = getByTestId('error');
    const img = getByAltText('acodexm');
    expect(img).toBeInTheDocument();
    fireEvent.load(img);
    expect(content).toHaveStyle('visibility: visible');
    expect(loading).toHaveStyle('visibility: hidden');
    expect(error).toHaveStyle('visibility: hidden');
  });
});
