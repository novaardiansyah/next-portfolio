'use client'

import React, { useEffect, useState } from 'react'
import SkillProgress from './SkillProgress';
type Skill = {
  id: number;
  name: string;
  percentage: number;
}
function Skill() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Embarking on the journey of development, I've honed a versatile skill set that empowers me to create impactful digital solutions. Here's a glimpse of my capabilities:</p>
        </div>

        <div className="row skills-content">
          { loading || !skills ? (
              Array.from({ length: 4 }).map((_, index) => (
                <SkillProgress key={index} name="loading" value={0} isVisible={false} />
              ))
            ) : (
              <>
                { skills.map((skill) => (
                    <SkillProgress key={skill.id} name={skill.name} value={skill.percentage} isVisible={isVisible} />
                  ))
                }
              </>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Skill
