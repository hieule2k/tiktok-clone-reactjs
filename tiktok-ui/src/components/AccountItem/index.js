import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/279080948_1418906625208394_1696395619465580404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jcyCu6kf63UAX-lZ4me&_nc_ht=scontent.fhan17-1.fna&oh=00_AT9jzCXHbsioEZTJ72LZ3zq3EpWD9UyJHnFy_XFoS-Hqaw&oe=630500A7"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Chu Thi Thu Hang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}> Chu Thi Thu Hang</span>
            </div>
        </div>
    );
}

export default AccountItem;
