import React, { useState } from "react";
import styles from "./Main.module.css";

function Main() {
  const [color, setColor] = useState('black');

  const buttons = [
    {
        name: 'YELLOW',
        value: '#F9F871'
    },
    {
        name: 'TAN',
        value: '#FFC75F'
    },
    {
        name: 'ORANGE',
        value: '#FF9671'
    },
    {
        name: 'PINK',
        value: '#FF6F91'
    },
    {
        name: 'IVORY',
        value: '#fefae0'
    },
    {
        name: 'PURPLE',
        value: '#845EC2'
    },
    {
        name: 'GREEN',
        value: '#58b368'
    },
    {
        name: 'BLUE',
        value: '#48cae4'
    },
    {
        name: 'RED',
        value: '#e63946'
    },

  ]

  return (
    <div className={`${styles.main}`} style={{ backgroundColor: color }}>
      <div className={styles.buttons}>
        {buttons.map((item)=>{
            return <button
            type="button"
            className={`${styles.button} btn`}
            style={{ backgroundColor: item.value}}
            onClick={()=>setColor(item.value)}
          >
            {item.name}
          </button>
        })}
      </div>
    </div>
  );
}

export default Main;
