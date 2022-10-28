import React, {ChangeEvent, KeyboardEvent, useState } from 'react';
import './../CSS/Addresses.scss';
import * as ImIcons from 'react-icons/im';
import {makeLogger} from "ts-loader/dist/logger";

const Addresses = () => {

    const [value, setValue] = useState<string>('')
    const [data, setData] = useState<{data:{},unrestricted_value:string,value:string}[]>([])
    const [errorMessage, setErrorMessage] = useState<string|null>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    const token = 'f56015744c9fde1ec2cc167824a6663629afded6'

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + token
        },
        body: JSON.stringify({'query': value, 'count': 20})
    }


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const changeEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            const result = (e.target as HTMLInputElement).value
            setValue(result)
            submitHandler()
        }
    }
    const submitHandler = async () => {
        if(value.length < 4) {
            setErrorMessage('Минимальная длинна запроса - 3 символа')
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
            return
        }
        setIsFetching(true)
        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                setIsFetching(false)
                setData(result.suggestions)
            })
            .catch(error => {
                setIsFetching(false)
                alert(error)
            });
    }

    return (
        <div className='search'>
            <h1 className='search__title'>Поиск адресов</h1>
            <span className='search__description'>Введите интересующий вас адрес</span>
            <div className='search__input'>
                <input
                    type='text'
                    placeholder='Введите интересующий вас адрес'
                    onChange={changeHandler}
                    onKeyDown={changeEnterHandler}
                />
                <button className={isFetching ? 'btn-disabled' : ''} onClick={submitHandler} disabled={isFetching}>
                    <ImIcons.ImSearch />
                    <span>Поиск</span>
                </button>
            </div>
            {<div className='search__error'>{errorMessage}</div>}
            {data.length > 0 && <div className='search__result'>
                <div className='search__result-title'>Адреса</div>
                <div className='search__result-data'>
                    {data.map((item, index) =>
                        <div className='search__result-address' key={index}>{item.value}</div>)}
                </div>
            </div>}
        </div>
    );
};

export default Addresses;