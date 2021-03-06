import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlighProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {...item}
} as Meta

export const Default: Story<HighlighProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlighProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/read-dead-float.png'
}
