import React from 'react'

interface SkillProps {
  name: string;
  value: number;
  isVisible: boolean;
}
const SkillProgress: React.FC<SkillProps> = ({ name, value, isVisible }) => {
  if (name === 'loading') {
    return (
      <div className="col-lg-6" data-aos="fade-down">
        <div className="progress">
          <span className="skill skeleton skeleton-text"></span>
        </div>
      </div>
    )
  }

  return (
    <div className="col-lg-6" data-aos="fade-down">
      <div className="progress">
        <span className="skill">{name} <i className="val">{value}%</i></span>
        <div className="progress-bar-wrap">
          <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} style={{ width: isVisible ? `${value}%` : "0%" }}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillProgress
