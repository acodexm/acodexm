import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Projects from './Projects';
import sleep from '../../utils/tests/sleep';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockedAxios = new MockAdapter(axios);

const githubData = [
  {
    name: 'acodexm-page',
    private: false,
    html_url: 'https://github.com/acodexm/acodexm-page',
    description: 'My page',
    created_at: '2019-02-26T09:32:13Z',
    updated_at: '2019-03-04T13:38:23Z',
    pushed_at: '2019-03-04T13:38:57Z',
    homepage: null,
    language: 'JavaScript'
  }
];
const url = process.env.REACT_APP_GITHUB_REPO_URL;
const baseURL = process.env.REACT_APP_GITHUB_REPO_BASEURL;
describe('Test getting repo', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  test('Get repo and display', async () => {
    const spy = jest.spyOn(axios, 'get');
    const ref = React.createRef<HTMLElement>();
    const { getByTestId } = render(<Projects sectionRef={ref} />);
    mockedAxios.onGet().reply(200, githubData);
    await sleep(100);
    expect(spy).toHaveBeenCalledWith(url, { baseURL });
    expect(spy).toBeCalledTimes(1);
    expect(getByTestId('github')).toBeInTheDocument();
  });
  test('Get repo failed', async () => {
    const spy = jest.spyOn(axios, 'get');
    const ref = React.createRef<HTMLElement>();
    const { getByTestId } = render(<Projects sectionRef={ref} />);
    mockedAxios.onGet().networkError();
    await sleep(100);
    expect(spy).toBeCalledTimes(1);
    expect(getByTestId('error')).toHaveStyle({ visibility: 'visible' });
  });
});
