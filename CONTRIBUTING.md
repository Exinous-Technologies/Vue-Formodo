#Branch naming convention

Ensure the branch name sticks to this format:

```
^(development|master|(features|tests|docs|bugfix|hotfix)(\/[a-zA-Z0-9]+([-_][a-zA-Z0-9]+)*){1,2}|release\/[0-9]+(\.[0-9]+)*(-(alpha|beta|rc)[0-9]*)?)$
```

Example:
features/login_module
tests/login_module
docs/order_module
hotfix/unable_to_login
release/2.1.1-alpha
release/4.6.8-beta
release/3.0.0-rc
