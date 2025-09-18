import { NetworkLinks } from "@/data/constants/networkUrl";
import { 
  FaGithub, 
  FaLinkedinIn
} from "react-icons/fa"; 
import { TbWorldShare } from "react-icons/tb";

export default function ButtonFooterContact() {
  return (
    <div className="flex">
      <a
        href={NetworkLinks.Portfolio}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 text-gray-400 hover:text-red-600 transition-colors"
      >
        <TbWorldShare className="text-xl" />
      </a>
      <a
        href={NetworkLinks.LinkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 ml-3 text-gray-400 hover:text-blue-500 transition-colors"
      >
        <FaLinkedinIn className="text-xl" />
      </a>
      <a
        href={NetworkLinks.GitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-1 ml-3 text-gray-400 hover:text-gray-700 transition-colors"
      >
        <FaGithub className="text-xl" />
      </a>
    </div>
  );
};