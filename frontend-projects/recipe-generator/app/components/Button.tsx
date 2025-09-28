type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='text-white bg-[#19b0f6] font-semibold px-1.5 py-1 rounded-[8px] text-center cursor-pointer hover:scale-[97%] transition-all active:scale-105'>
      {text}
    </button>
  );
};

export default Button;
