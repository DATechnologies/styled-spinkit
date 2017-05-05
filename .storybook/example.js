import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text, number } from '@kadira/storybook-addon-knobs'
import Components from '../src'

const removePrefix = (name: string) => name.replace('__styled-spinkit__', '')

Object.keys(Components).forEach(key => {
  const Component = Components[key]

  storiesOf(`${removePrefix(Component.displayName)}`, module)
    .addWithInfo(
      'render',
      () => (
        <Component color={text('color', '#333')} size={number('number', 40)} />
      ),
      { inline: true }
    )
    .addWithInfo(
      'render magenta 60',
      () => (
        <Component
          color={text('color', 'magenta')}
          size={number('number', 60)}
        />
      ),
      { inline: true }
    )
})
