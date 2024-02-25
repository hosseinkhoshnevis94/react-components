import Skill from "./Skill";
import styles from './index.module.css'

export default  function SkillList({skills}) {
    return (
      <div  className={styles.skillList}>
        {skills?.map(({skill,color,level}) => (
          <Skill key={skill} skill={skill} color={color} level={level} />
        ))}
      </div>
    );
  }