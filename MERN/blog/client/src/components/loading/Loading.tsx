import { HashLoader } from "react-spinners";
interface loadingProps {
  size?: string | number;
  color?: string;
}
const Loading = ({ size, color }: loadingProps) => {
  return <HashLoader size={size} color={color} />;
};

export default Loading;
