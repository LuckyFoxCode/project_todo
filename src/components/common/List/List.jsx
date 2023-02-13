import classNames from 'classnames';
import { Icon } from '..';
import styles from './List.module.scss';

export const List = ({ items }) => {
  return (
    <ul className={styles.list}>
      {[] &&
        items.map((item) => (
          <li
            key={item.id}
            className={classNames(item.active ? styles.active : '')}
          >
            {item.icon && (
              <Icon
                name={item.iconName}
                className={styles.list__icon}
              />
            )}
            {item.color && (
              <div
                className={styles.list__bullet}
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className={styles.list__text}>{item.label}</span>
          </li>
        ))}
    </ul>
  );
};
