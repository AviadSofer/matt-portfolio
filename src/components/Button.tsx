interface Props {
  children: React.ReactNode;
  filled?: boolean;
  whiteText?: boolean;
  mxAuto?: boolean;
}

const Button: React.FC<Props> = ({ children, filled, mxAuto, whiteText }) => {
  return (
    <button
      className={
        filled
          ? `${
              mxAuto ? 'mx-auto' : 'mx-2.5'
            } flex items-center rounded-full border-2 border-primary px-5 py-2 text-lg font-medium hover:bg-primary hover:text-white ${
              whiteText ? 'text-white' : 'text-primary'
            }`
          : 'mx-2.5 text-lg font-medium hover:text-primary'
      }
    >
      {children}
    </button>
  );
};

export default Button;
