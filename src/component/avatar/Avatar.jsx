import React, {useEffect, useState} from 'react'

export const Avatar = () => {

    const [image, setImage] =useState('')

    function toDataURL(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            let reader = new FileReader()
        }
    }

    return (
        <div>
            <img src={image} />
        </div>
    )
}
