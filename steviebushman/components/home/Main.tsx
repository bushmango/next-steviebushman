import React from 'react'

import { Section } from './Section-sidecar'
import { ExternalLink } from './ExternalLink-sidecar'
import { solidIcons } from './solidIcons'

export const Main = () => {
  return (
    <div>
      <Section icon={solidIcons.faHome} title='Home'>
        Welcome to the project site of Stevie Bushman
      </Section>

      <Section icon={solidIcons.faBriefcase} title='Professional'>
        <ExternalLink
          href='https://stevebushman.com/'
          label='SteveBushman.com'
        />{' '}
        Steve Bushman Consulting
      </Section>

      <Section icon={solidIcons.faCoffee} title='Projects'>
        <ExternalLink href='https://cowsayify.com/' label='Cowsayify' /> Say
        things with cows
        <br />
        <ExternalLink
          href='https://jar-of-awesome.steviebushman.com/'
          label='Jar of Awesome'
        />{' '}
        Share gratitude with others
        <br />
        <ExternalLink
          href='https://trash-compactor.steviebushman.com/'
          label='Trash Compactor'
        />{' '}
        Experiments
      </Section>

      <Section icon={solidIcons.faGamepad} title='Games'>
        <ExternalLink
          href='http://ludumdare.com/compo/author/bushmango3/'
          label="Bushmango's Games"
        />{' '}
        - Ludum Dare 48/72 hour games
        <br />
        <ExternalLink
          href='https://brendens-adventure.steviebushman.com'
          label="Brenden's Adventure"
        />{' '}
        - An adventure game written by my son
        {/* <BlockContainer>
              <Block title="Brenden's Adventure">

              </Block>
              <Block title='Ludum Dare games'>
                <ExternalLink href='http://ludumdare.com/compo/author/bushmango3/' label="Bushmango's Games" />
              </Block>
            </BlockContainer> */}
      </Section>

      <Section icon={solidIcons.faRetweet} title='Our Friends'>
        <ExternalLink href='http://www.ProphecyCow.com/' /> Everything you ever
        wanted to know!
      </Section>

      <Section title='About'>
        A site for me to place stuff I'm working on. Written using React and
        Node.js
      </Section>
    </div>
  )
}
