import { Link } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import './IconButton.scss';
const IconButton = ({
  type,
  link,
  kind,
  title,
  icon,
  onClick,
  reverse = false,
  currentPage = 'home',
}) => {
  if (!type || type === 'link') {
    return (
      <Button className='nav-btn' kind={kind} as={Link} to={link || '/'}>
        <div className={reverse ? 'icon-btn-reverse' : 'icon-btn'}>
          <img src={icon} alt={title} />
          <p>{title}</p>
        </div>
      </Button>
    );
  } else if (type === 'click') {
    return (
      <Button className='nav-btn' kind={kind} onClick={onClick || (() => {})}>
        <div className={reverse ? 'icon-btn-reverse' : 'icon-btn'}>
          <img src={icon} alt={title} />
          <p>{title}</p>
        </div>
      </Button>
    );
  } else if (type === 'both') {
    return (
      <Button
        className='nav-btn'
        kind={kind}
        as={Link}
        to={link || '/'}
        onClick={onClick || (() => {})}
      >
        <div className={reverse ? 'icon-btn-reverse' : 'icon-btn'}>
          <img src={icon} alt={title} />
          <p>{title}</p>
        </div>
      </Button>
    );
  }
};

export default IconButton;
