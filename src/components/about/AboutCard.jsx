import React from 'react'
import Title from '../common/title/Title.jsx'

const AboutCard = () => {
    return (
      <>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src="./images/about.webp" alt="About Us"/>
                    </div>
                    <div className='right row'>
                        <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning' />
                        <div className='items'>
                            {homeABout}
                        </div>
                    </div>
                </div>
             </section>
      </>
  )
}

export default AboutCard