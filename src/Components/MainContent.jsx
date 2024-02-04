import {useContext} from 'react'
import {ThemeContext} from './ThemeContextWrapper'

const MainContent = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <main className="main-content">

      {/* management */}
      <div className="content-section">
        <h1 className={`section-title-${theme}`}>Management</h1>
        <ul className="section-list">
          <li>
            Waterfall: The waterfall methodology follows repeating steps until the job is done. The main pro of this is that you can keep on going through development until everything is perfect and where you want it to be. A clear con is that this isn't the most descriptive methodology which can cause issues with the process of development.
          </li>
          <li>
            Agile: Agile is very unique compared to almost any other type of methodology. Instead of being done in steps or phases it is done simultaneously. Working simultaneously is a major con in the working of a project, likely greatly increasing the speed it is done. A con would be that it is likely harder to do because there is more to manage. 
          </li>
          <li>
            Kanban: Kanban involves a highly visual process of showing work that is yet to be done. This is one of its major pros, it can allow fluid work with more self managing based on skills. In a way this is also a con, people might purposely do something they aren’t qualified for so that they have an excuse for it not being.
          </li>
          <li>
            Scrum: Scrum involves tram development while working together. This allows people to be creative in their techniques. This also means that you can have multi brains being creative and working together to get problem solves. Scrum is helpful to also get team based skills which is essential for development.
          </li>
          <li>
            Rapid Application: Rapid is similar to the agile methodology. Speed is prioritized, as the name says, which is obviously very good for development because it allows more projects to be made. This can also be a con because it may allow for issues or faults within what is done.
          </li>
          <li>
            Critical Chain: Critical chain focuses on efficiency and effectiveness to complete a project. This helps eliminate waste and create focus on development. Also like many others this is done in steps and phases. This prioritizes goals and dates allowing completion on time. 
          </li>
        </ul>
      </div>

      {/* cover letter */}
      <div className="content-section">
        <h1 className={`section-title-${theme}`}>Resume</h1>
        <p className={`section-paragraph-${theme}`}>
          All my life, I have loved creating things, whether it was with Legos or writing fictitious adventures. I found the excitement in building it and then seeing my creation come to life right before my eyes. Later on in my life, I found coding. For years, I have practiced and honed my skills due to the great amount of joy I find when I code.  I am the perfect candidate for this position. I have been coding for the past 5 years.  Along with my technical skills in coding, I have great communication skills, leadership skills, and I am a strong team member.  I have been in various leadership positions in the past six years in Boy Scouts of America.  In my last leadership position, I led a group of 30 volunteers to help refurbish bikes for kids in foster care.  We refurbished approximately 115 bikes over the course of 6 hours and we were able to give these bikes to kids in foster care for Christmas.  While this project did not incorporate my coding skills, I successfully provided leadership and communicated with my volunteers to get the project completed. I would like to bring this leadership and coding experience to the Merit Corporation..  I know I will be a valuable team member. Thank you for your time and consideration. I look forward to working with the Merit Corporation and learning more about the Web Designer position.  I know I can contribute to the company's future goals and visions.
        </p>
      </div>

      {/* college */}
      <div className="content-section">
        <h1 className={`section-title-${theme}`}>College</h1>
        <p className={`section-paragraph-${theme}`}>
          The dream of going to college is a dream that many young individuals have, and I am no exception. My family has been faced with many obstacles that make it difficult for them to provide financial support for me.  One of the primary obstacles I encounter is that my father has been disabled for more than 10 years.  His disability has altered the dynamics of my family and posed financial constraints.  My dad injured his back and has not been able to work.  He is hoping to make it back into the workforce someday, but as of right now, he is not working.  My mom works three jobs in order to make ends meet for my family.  It is a dream of mine to obtain a college degree and help alleviate the financial stress my family experiences.  Adding to the complexity of my family dynamics is the presence of my brother that was adopted that has some special needs.  My brother has an intellectual disability and an emotional disability and my parents have to spend a lot of extra time working with him.  Despite the challenges my family has faced, my desire to attend college remains unwavering. Education represents not only a path to personal growth and development, but also a means of helping my family.
        </p>
      </div>
    </main>
  )
}

export default MainContent