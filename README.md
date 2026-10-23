# quick-replies

A Claude Code mod that draws a row of quick-reply buttons above the prompt box.
One press sends the phrase as your own message, so you do not have to type
"ok" or "deploy" every time. It works in the desktop app and in the terminal;
while the app shows its own survey, the row steps aside.

## Install

In a terminal session:

```
/plugin install quick-replies --marketplace nylinary/claude-quick-replies
```

From a shell:

```
claude plugin install quick-replies --marketplace nylinary/claude-quick-replies
```

In the desktop app: click + next to the prompt box, then Plugins, Add
marketplace with `nylinary/claude-quick-replies`, then Add plugin.

## Customize

Edit the `REPLIES` array at the top of `hooks/register.tsx`: `label` is the
button text, `text` is what gets sent (a slash command such as `/merge` works too).
