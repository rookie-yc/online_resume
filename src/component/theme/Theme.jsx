import React from 'react'

export const Theme = () => {

  const color = ['#428675', '#61649F', '#3170A7', '#607d8b'];

  const changeTheme = (item) => {
    const style = document.createElement('style'); 
    style.type = 'text/css'; 
    style.innerHTML=`:root{ --primary-color: ${item} }`; 
    document.getElementsByTagName('head').item(0).appendChild(style); 
  }

  return (
    <div className="theme">
      <ul>
        {color.map((item) => <li style={{backgroundColor: `${item}`}} key={item} onClick={() => changeTheme(item)}></li>)}
      </ul>
    </div>
  )
}
