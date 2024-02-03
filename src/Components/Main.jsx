import React, { useState } from "react";
import styles from "./Main.module.css";

function Main() {
  const [data, setData] = useState({
    color: 'black',
    chosenImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyUdbEng2qcCt9Ptv8EMrTT99gSR9J_ZisY0gZ2LXJJrZIe6G90wo1c9oT8BTsEhQA2Y&usqp=CAU',
    altText: 'random image'
  });

  const buttons = [
    {
        name: 'YELLOW',
        value: '#F9F871',
        image: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-06/11/0/enhanced/21d75bca4e7e/enhanced-3272-1591833853-14.jpg?output-format=jpg&output-quality=auto',
        altText: 'yellow image'
    },
    {
        name: 'TAN',
        value: '#FFC75F',
        image: 'https://neurofied.com/wp-content/uploads/2021/08/Humor-Effect.jpg',
        altText: 'tan image'
    },
    {
        name: 'ORANGE',
        value: '#FF9671',
        image: 'https://media.istockphoto.com/id/924169600/photo/laughing-orange-and-lemon-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BCNKCfrDdSTkN52rQwJuphKiTY50fa4RghtmU4i_PDc=',
        altText: 'orange image'
    },
    {
        name: 'PINK',
        value: '#FF6F91',
        image: 'https://c4.wallpaperflare.com/wallpaper/433/475/760/pink-magenta-circle-pattern-wallpaper-preview.jpg',
        altText: 'pink image',
    },
    {
        name: 'IVORY',
        value: '#fefae0',
        image: 'https://i.pinimg.com/736x/9c/fe/09/9cfe09cddbd3365604cb6cbcc34f0c1a.jpg',
        altText: 'ivory image',
    },
    {
        name: 'PURPLE',
        value: '#845EC2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBIE0FM_ln1g-6FoBUdS6wjwaNP6t_jx68JoJCslGVDAer1tS8LvdX1Z3e4VpvJz0hIg&usqp=CAU',
        altText: 'purple image',
    },
    {
        name: 'GREEN',
        value: '#58b368',
        image: 'https://d1kvkzjpuym02z.cloudfront.net/5ae1e9ac8f666504c6252135.png?Expires=2053954097&Signature=eimzeWdsvm~nREU4~i-NVC-aNtrErU2QOqiVN1Q-ewvRebR5Pz1jaaft7yNstHnZ~DQ5xopi5kk0eKlB9by2Pnixlf5HfV0kZGxh2rniVikq5IUSMwyg3iKtkPxMmZnH1~fpWdyAA8noQQLSgXsFWWFZk19wcYrDRmvhtBeb5kQ_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA',
        altText: 'green image'
    },
    {
        name: 'BLUE',
        value: '#48cae4',
        image: 'https://chroniclescafe.files.wordpress.com/2015/10/oswald-50ef74946b2c3.jpg',
        altText: 'blue image'
    },
    {
        name: 'RED',
        value: '#e63946',
        image: 'https://static.vecteezy.com/system/resources/previews/007/067/054/original/red-hot-chili-pepper-illustration-filthy-funny-cartoon-character-hot-horny-red-pepper-for-cute-print-vector.jpg',
        altText: 'red image'
    },

  ]

  return (
    <div className={`${styles.main}`} style={{ backgroundColor: data?.color }}>
      <div className={styles.buttons}>
        {buttons.map((item)=>{
            return <button
            type="button"
            className={`${styles.button} btn`}
            style={{ backgroundColor: item.value}}
            onClick={()=>{
                setData({
                    color: item?.value,
                    chosenImage: item?.image,
                    altText: item?.altText
                })
            }}
          >
            {item.name}
          </button>
        })}
      </div>
      <div >
        <img className={styles.image} src={data?.chosenImage} alt={data?.altText} height="500px"/>
      </div>
    </div>
  );
}

export default Main;
