import { FaSun } from "react-icons/fa"
import "./style.scss"

const Loading = () => (
  <div className="loading flex">
    <div className="loading-wrapper container">
      <FaSun />
      <span>Loading</span>
    </div>
  </div>
)

export default Loading
