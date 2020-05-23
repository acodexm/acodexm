import React, { FunctionComponent } from 'react';
import './style.scss';
interface OwnProps {}

type Props = OwnProps;

const Social: FunctionComponent<Props> = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__links">
        <a
          href={'https://github.com/acodexm'}
          target={'_blank'}
          className="social-link social-link--github"
          id="github">
          <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <title>github</title>
            <g className="social-group" fill="none" fillRule="evenodd">
              <circle className="social-group__outline" stroke="#000" strokeWidth="20" cx="300" cy="300" r="262.5" />
              <circle className="social-group__inner-circle" fill="#000" cx="300" cy="300" r="252.5" />
              <path
                className="social-group__icon"
                d="M300 150c-82.8348 0-150 68.8393-150 153.817 0 67.9687 42.991 125.558 102.5893 145.9151 7.5 1.4063 10.2455-3.3482 10.2455-7.433 0-3.683-.134-13.3259-.2009-26.183-41.7187 9.308-50.558-20.625-50.558-20.625-6.8304-17.7456-16.6741-22.5-16.6741-22.5-13.5938-9.576 1.0044-9.375 1.0044-9.375 15.067 1.0714 22.9688 15.8705 22.9688 15.8705 13.3929 23.5045 35.0893 16.741 43.6607 12.7902 1.3393-9.9107 5.2232-16.741 9.509-20.558-33.2813-3.884-68.3036-17.076-68.3036-76.0045 0-16.808 5.8259-30.5357 15.4018-41.25-1.5402-3.884-6.6965-19.5536 1.4732-40.7143 0 0 12.5893-4.1518 41.25 15.7366 11.9866-3.4152 24.7768-5.0893 37.567-5.1562 12.7231.067 25.5803 1.741 37.5669 5.1562 28.6607-19.8884 41.183-15.7366 41.183-15.7366 8.1697 21.1607 3.0134 36.8304 1.4733 40.7143 9.5758 10.7812 15.4017 24.509 15.4017 41.25 0 59.0625-35.0892 72.0536-68.5044 75.8705 5.3571 4.7545 10.1785 14.1295 10.1785 28.4598 0 20.558-.2009 37.1652-.2009 42.1875 0 4.0849 2.6786 8.9063 10.3125 7.3661C407.076 429.308 450 371.7187 450 303.817 450 218.8393 382.8348 150 300 150z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </a>
        <a
          href={'https://www.linkedin.com/in/adam-kami%C5%84ski-3350b5a3/'}
          target={'_blank'}
          className="social-link social-link--linkedin"
          id="linkedin">
          <svg className="social-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <title>linkedin</title>
            <g className="social-group" fill="none" fillRule="evenodd">
              <circle className="social-group__outline" stroke="#000" strokeWidth="20" cx="300" cy="300" r="262.5" />
              <circle className="social-group__inner-circle" fill="#2D76B0" cx="300" cy="300" r="252.5" />
              <path
                className="social-group__icon"
                d="M278.9308 253.1923h43.5769v20.0539h.5923c6.0923-11.5077 20.9-23.6077 43.0692-23.6077 46.0308 0 54.577 30.2923 54.577 69.723v80.2154h-45.4385v-71.1615c0-17.0077-.2539-38.8385-23.6077-38.8385-23.6923 0-27.2462 18.5308-27.2462 37.5693v72.4307h-45.4384l-.0846-146.3846zm-74.1231 0h45.523V399.577h-45.523V253.1923zm22.8461-72.7692c14.5539 0 26.4 11.8461 26.4 26.4 0 14.5538-11.8461 26.4-26.4 26.4-14.6384 0-26.4-11.8462-26.4-26.4 0-14.5539 11.7616-26.4 26.4-26.4z"
                fill="#000"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Social;
