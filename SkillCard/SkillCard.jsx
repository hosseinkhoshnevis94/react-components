import React from 'react'
import styles from './index.module.css'
import Avatar from './components/Avatar'
import Intro from './Intro'
import SkillList from './SkillList'




const SkillCard = ({data}) => {
  const{src,alt,name,discription,skills} = data
  return (
    <div className={styles.card}>
    <Avatar imgSrc={src} imgAlt={alt} />
    <div className={styles.data}>
      <Intro name={name} discription={discription}/>
      <SkillList skills={skills} />
    </div>
  </div>
  )
}

 

 
export default SkillCard