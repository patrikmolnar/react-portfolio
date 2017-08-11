import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const Date = styled.p`
  font-size: 12px;
`

class Writing extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
        </div>
        <h6>Tech-related:</h6>
        <ul>
          <li>
            <a href="https://medium.com/ladies-storm-hackathons/how-we-built-our-first-full-stack-javascript-web-app-in-three-weeks-8a4668dbd67c">How we built our first full-stack JavaScript web app in three weeks</a>
            <Date>August 9, 2017</Date>
          </li>
          <li>
            <a href="https://medium.com/ladies-storm-hackathons/follow-this-curriculum-to-learn-full-stack-javascript-in-six-weeks-c0f100426902">Full-Stack JavaScript in Six Weeks: A Curriculum Guide (What I learned in Coding Bootcamp, Par I)</a>
            <Date>June 6, 2017</Date>
          </li>
          <li>
            <a href="https://medium.com/personal-growth/f-ck-impostor-syndrome-im-finally-learning-to-code-a9b9328d73d9">F*ck Impostor Syndrome, Im finally learning to code.</a>
            <Date>April 10, 2017</Date>
          </li>
        </ul>
        <h6>Other:</h6>
        <ul>
          <li>
            <a href="https://medium.com/personal-growth/mind-surgery-my-10-day-silent-meditation-retreat-92e420e5b6fa">"Mind-Surgery": My 10-Day Silent Meditation Retreat </a>
            <Date>March 16, 2017</Date>
          </li>
          <li>
            <a href="https://medium.com/personal-growth/the-art-of-falling-a01ec12326e1">the art of falling </a>
            <Date>January 13, 2017</Date>
          </li>
          <li>
            <a href="https://medium.com/personal-growth/standing-alone-in-a-club-at-midnight-on-new-years-eve-76c6dbf892ed">Standing alone in a club at midnight on New Years Eve </a>
            <Date>January 2, 2017</Date>
          </li>
          <li>
            <a href="https://medium.com/personal-growth/2016-the-year-i-burned-down-and-began-to-rebuild-myself-ed325fe1fef8">2016: The Year I Burned Down and Began to Rebuild Myself </a>
            <Date>December 30, 2016</Date>
          </li>
        </ul>
        <div>
          <CenteredHeader>Read more on <a href="https://medium.com/@sophiaciocca/latest"><i className="fa fa-medium fa-fw" />Medium</a>.</CenteredHeader>
        </div>
      </div>
    );
  }
}

export default Writing;