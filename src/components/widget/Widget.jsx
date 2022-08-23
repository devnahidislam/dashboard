import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
  let data;

  // tempAmount
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USER',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{ color: 'crimson', background: 'rgba(255, 0, 0, 0.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'goldenrod',
              background: 'rgba(218, 165, 32, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earning',
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: 'green', background: 'rgba(0, 128, 0, .2)' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: 'purple', background: 'rgba(128, 0, 128, .2)' }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon /> {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
