import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Website',
    github: 'https://github.com/AnanthRka/portfolio-react' ,
    download_link: 'https://github.com/AnanthRka/portfolio-react/archive/refs/heads/main.zip'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Football Matches',
    github: 'https://github.com/AnanthRka/football-matches' ,
    download_link: 'https://github.com/AnanthRka/football-matches/archive/refs/heads/main.zip'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Instagram Followers Scrapper',
    github: 'https://github.com/AnanthRka/insta_followers_scrapper' ,
    download_link: 'https://github.com/AnanthRka/insta_followers_scrapper/archive/refs/heads/main.zip'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Socials Launcher Chrome Extension',
    github: 'https://github.com/AnanthRka/' ,
    download_link: 'https://github.com/AnanthRka/socials-launcher-chrome-extensions/archive/refs/heads/main.zip'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project Creation Automation',
    github: 'https://github.com/AnanthRka/project-creation-automation' ,
    download_link: 'https://github.com/AnanthRka/project-creation-automation/archive/refs/heads/main.zip'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Instagram Engagement Bot',
    github: 'https://github.com/AnanthRka/insta_engage' ,
    download_link: 'https://github.com/AnanthRka/insta_engage/archive/refs/heads/main.zip'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, download_link}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn'target='_blank'>Github</a>
                <a href= {download_link} className='btn btn-primary' target='_blank' download>Download</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio