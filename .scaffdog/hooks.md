---
name: 'hooks'
root: './frontend'
output: '**/*'
ignore: []
questions:
  name: 'please enter hooks name'
---

# Variables

- FILE_NAME: `{{ inputs.name | snake }}`
- HOOKS_NAME: `{{ inputs.name | camel }}`

# `{{ FILE_NAME }}.ts`

```typescript
export const {{ HOOKS_NAME }} = () => {
  return null
}
```
