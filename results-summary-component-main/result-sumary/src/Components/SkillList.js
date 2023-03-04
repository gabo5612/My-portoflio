import React from "react";
import './Styles/SkillList.css';
import reactionimg from '../images/icon-reaction.svg'
import memoryimg from '../images/icon-memory.svg'
import verbalimg from '../images/icon-verbal.svg'
import visualimg from '../images/icon-visual.svg'

const skillContents=[
    {
      skillImg: reactionimg,
      skillText:'Reaction',
      score:80,
      classP: 'reactP'
    },
    {
      skillImg:memoryimg,
      skillText:'Memory',
      score:92,
      classP: 'memoryP'
    },
    {
      skillImg:verbalimg,
      skillText:'Verbal',
      score:61,
      classP: 'verbalP'
    },
    {
      skillImg:visualimg,
      skillText:'Visual',
      score:72,
      classP: 'visualP'
    }
];



function SkillList(){
    const listSkill= skillContents.map(skillContent=>
        <li key={skillContent.skillText}
        className={skillContent.skillText}>
        <div className="LefttSideSkills">
                <img src={skillContent.skillImg} alt={skillContent.skillText}  />
                <p className={skillContent.classP}>{skillContent.skillText}</p>
            </div>
            <div className="RightSideSkills">
                <p >{skillContent.score}</p>
                <p> / 100</p>
            </div>
        </li>
        )
    return(
        <ul className="SkillList">{listSkill}</ul>
    );
}
export {SkillList}