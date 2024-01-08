interface buttonProps {
  text?: string | any;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  // onClick?: () => Promise<void>;
  onClick?: () => void;
  icon: any;
}

export default function Button({
  text,
  type,
  className,
  disabled,
  onClick,
  icon,
}: buttonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      {" "}
      <span className="p-2"> {text}</span>
      <p>{icon}</p>
    </button>
  );
}
