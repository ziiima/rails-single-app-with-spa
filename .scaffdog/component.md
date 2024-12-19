---
name: 'component'
root: './frontend'
output: '**/*'
ignore: []
questions:
  name: 'please enter a component name.'
  story:
    confirm: 'do you need a storybook?'
    initial: true
---

# Variables

- FILE_NAME: `{{ inputs.name | snake }}`
- COMPONENT_NAME: `{{ inputs.name | pascal }}`


# `{{ FILE_NAME }}.tsx`

```typescript
import React from 'react';

type {{ COMPONENT_NAME }}Props = {}

export const {{ COMPONENT_NAME }}: React.FC<{{ COMPONENT_NAME }}Props> = () => {
  return (
    <div>message</div>
  )
}
```

# `{{ inputs.story || "!" }}{{ FILE_NAME }}.stories.tsx`

```typescript
import {} from ""
import { {{ COMPONENT_NAME }} } from "./{{ FILE_NAME }}.tsx"

type ComponentType = typeof {{ COMPONENT_NAME }}

const meta = {
  component: {{ COMPONENT_NAME }},
  args: {}
} satisfies Meta<ComponentType>

type Story = StoryObj<typeof meta>

export const Default: Story = {}
```
