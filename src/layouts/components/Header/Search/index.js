import { AccountItem } from '@/components/Account';
import { DropdownItem as SuggestItem } from '@/components/DropdownItem';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import { useDebounce } from '@/hooks';

import * as searchService from '@/services/api/searchService';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
const Search = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [visibleResult, setVisibleResult] = useState(true);
	const [loading, setLoading] = useState(false);

	const debounceValue = useDebounce(searchValue, 500);
	const inputRef = useRef();
	useEffect(() => {
		if (!debounceValue.trim()) {
			setSearchResult([]);
			return;
		}

		const fetchApi = async () => {
			setLoading(true);
			try {
				const res = await searchService.get(debounceValue);
				setSearchResult(res);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		fetchApi();
	}, [debounceValue]);
	const showResult = () => setVisibleResult(true);
	const hideResult = () => setVisibleResult(false);
	const handleSubmit = e => {
		e.preventDefault();
	};
	const handleClose = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};
	return (
		// Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context for the tippy.js.
		<div>
			<HeadlessTippy
				interactive
				visible={visibleResult && searchResult.length > 0}
				onClickOutside={hideResult}
				render={attrs => (
					<div className={cx('sug')} tabIndex={-1} {...attrs}>
						<PopperWrapper>
							{searchResult.map(user => (
								<SuggestItem
									key={user.id}
									icon='search'
									content={user.nickname}
								/>
							))}
							<p
								onClick={hideResult}
								className={cx('sug-titleAcc')}>
								Tài khoản
							</p>
							{searchResult.map(user => (
								<AccountItem key={user.id} user={user} />
							))}
							<div className={cx('sug-more')}>
								<p>
									Xem tất cả kết quả dành cho "{searchValue}"
								</p>
							</div>
						</PopperWrapper>
					</div>
				)}>
				<div className={cx('wrapper')}>
					<form className={cx('form')} onSubmit={handleSubmit}>
						<input
							ref={inputRef}
							value={searchValue}
							onChange={e => {
								const value = e.target.value;
								if (!value.startsWith(' ')) {
									return setSearchValue(e.target.value);
								}
							}}
							onFocus={showResult}
							className={cx('input')}
							type='text'
							placeholder='Tìm kiếm tài khoản và video'
							spellCheck={false}
						/>
						{!!searchValue && (
							<div className={cx('clear-button')}>
								{loading ? (
									<ion-icon name='reload-circle-outline'></ion-icon>
								) : (
									<ion-icon
										name='close-circle'
										onClick={handleClose}></ion-icon>
								)}
							</div>
						)}
						<span className={cx('splitter')}></span>
						<button
							className={cx('button')}
							onMouseDown={e => {
								e.preventDefault();
								inputRef.current?.blur();
							}}>
							<ion-icon name='search'></ion-icon>
						</button>
					</form>
				</div>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
