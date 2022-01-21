import React, {useEffect, useState} from 'react'
import './Avatar.scss'

export const Avatar = ({data = {}}) => {

    const [image, setImage] =useState('')

    function toDataURL(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            let reader = new FileReader();
            reader.onload = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send()
    }

    useEffect(() => {
        toDataURL(data.image, function(dataUrl) {
            setImage(dataUrl)
        })
    },[data])

    return (
        <div className='avatar'>
            <img src={image} alt="" />
        </div>
    )
}
