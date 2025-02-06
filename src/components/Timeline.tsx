import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Achievements</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024-Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Complete Data Science, Machine Learning, DL, NLP Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
            <p>

            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2023 - March 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Datacamp & Linkedn learning</h4>
            <p>
              <p>- Linear Algebra</p>
              <p>- Numpy, Pandas, Seaborn, Scikit-learn</p>
              <p>- Probability & Statistics</p>
              <p>- Data Mining</p>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January-July, 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate Spreadsheets</h3>
            <h4 className="vertical-timeline-element-subtitle">Datacamp</h4>
            <p>
              Data analysis, manipulations & Visualization on Excel.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PCB Design and Fabrication</h3>
            <h4 className="vertical-timeline-element-subtitle">IOE Thapathali Campus, Nepal</h4>
            <p>
              Design a motor circuit using Proteus Software and Fabricated using Glossy paper.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="7-8 Feb, 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">National Level Mathematics Quiz</h3>
            <h4 className="vertical-timeline-element-subtitle">Xavier International College, Kathmandu Nepal</h4>
            <p>
              Secured 4<sup>th</sup>position.
            </p>
          </VerticalTimelineElement>





        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;