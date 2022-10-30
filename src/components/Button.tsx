interface Props {
  children: React.ReactNode;
  filled?: boolean;
}

const Button: React.FC<Props> = ({ children, filled }) => {
  return (
    <button
      className={
        filled
          ? 'mx-2.5 rounded-full border-2 border-primary px-4 py-1.5 text-lg font-medium text-primary hover:bg-primary hover:text-white'
          : 'mx-2.5 text-lg font-medium hover:text-primary'
      }
    >
      {children}
    </button>
  );
};

export default Button;
