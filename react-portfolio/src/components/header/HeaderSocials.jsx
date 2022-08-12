import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/ananthrka"><BsGithub/></a>
        <a href="https://stackoverflow.com/users/14759065/ananth"><BsStackOverflow/></a>
        <a href="https://leetcode.com/AnanthRka"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials