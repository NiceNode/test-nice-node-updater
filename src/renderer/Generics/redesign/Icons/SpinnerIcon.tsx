import { container } from './spinnerIcon.css';

const SpinnerIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={container}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 2C7.25 1.58579 7.58579 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75C13.5858 8.75 13.25 8.41421 13.25 8C13.25 5.10051 10.8995 2.75 8 2.75C7.58579 2.75 7.25 2.41421 7.25 2Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SpinnerIcon;
