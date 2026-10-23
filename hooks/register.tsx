import type { Register } from 'claude-code'

// Edit this list: label is shown on the button, text is what gets sent.
const REPLIES: ReadonlyArray<{ label: string; text: string }> = [
  { label: 'Ок', text: 'Ок' },
  { label: 'Да', text: 'Да' },
  { label: 'Нет', text: 'Нет' },
  { label: 'Делай', text: 'Делай' },
  { label: 'Готово', text: 'Готово' },
  { label: 'Продолжай', text: 'Продолжай' },
  { label: 'Деплой', text: 'Деплой' },
]

export const register: Register = on => {
  on('ui.render', { component: 'AbovePrompt' }, ($, e, next) => {
    if (e.props.hasSurvey) {
      return next(e)
    }

    const { Box, Button } = $.ui.resolve(e)

    return (
      <Box>
        {REPLIES.map(r => (
          <Button
            key={r.label}
            label={r.label}
            onPress={() => {
              void $.prompt.submit({ text: r.text, asUser: true })
            }}
          />
        ))}
      </Box>
    )
  })
}
