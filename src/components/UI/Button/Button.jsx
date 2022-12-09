import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './Button.module.scss';

export const Button = ({ children, className, icon, size, type = 'button', onClick }) => {
  return (
    <button type={type} className={classNames(styles.button, className, styles[type], styles[size])} onClick={onClick}>
      {icon && <Icon name='plus' className={styles.icon} />}
      {children}
    </button>
  );
};
