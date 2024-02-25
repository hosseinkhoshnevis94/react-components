import styles from './index.module.css'

export default  function Skill({ skill, color, level }) {
    return (
      <div className={styles.skill} style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
      </div>
    );
  }