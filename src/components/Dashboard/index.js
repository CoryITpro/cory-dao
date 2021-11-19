import { Link } from "react-router-dom"
import { FaGithub, FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa"
import { PageRouters } from "constants/index"
import "./style.scss"

const Dashboard = () => (
  <div className="dashboard flex">
    <div className="dashboard-wrapper container flex flex-column">
      <div className="dashboard-header flex">
        <div className="dashboard-logo">Safeshiba DAO</div>
        <div className="dashboard-header-spanner flex">
          Social
          <div className="dashboard-header-spanner-collapse flex flex-column">
            <a
              className="flex"
              href="https://github.com/CoryITpro/safeshiba-dao"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              className="flex"
              href=""
              target="_blank"
              rel="noreferrer"
              aria-label="twitter"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a
              className="flex"
              href=""
              target="_blank"
              rel="noreferrer"
              aria-label="telegram"
            >
              <FaTelegram />
              <span>Telegram</span>
            </a>
            <a
              className="flex"
              href=""
              target="_blank"
              rel="noreferrer"
              aria-label="discord"
            >
              <FaDiscord />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard-main flex flex-column">
        <div className="dashboard-main-buttons">
          <Link to={PageRouters.App}>Enter App</Link>
          <Link to={PageRouters.Documentation}>Documentation</Link>
        </div>
        <div className="dashboard-main-title flex flex-column">
          <div>The SafeShiba DAO</div>
          <p>
            Financial tools to grow your wealth - stake and earn compounding
            interest
          </p>
        </div>
      </div>
      <div className="dashboard-footer">
        <div className="flex flex-column">
          <span>Total Staked</span>
          <p>999,999</p>
        </div>
        <div className="flex flex-column">
          <span>Treasury Balance</span>
          <p>$999,999,999</p>
        </div>
        <div className="flex flex-column">
          <span>Current APY</span>
          <p>999,999.9%</p>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard
