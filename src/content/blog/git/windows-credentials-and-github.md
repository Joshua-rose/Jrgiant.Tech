---
title: 'Multiple GitHub accounts and Windows'
date: "2020-04-25T20:57:40Z"
---


Windows has a great tool called the Credential manager. It works well when you are using `git` in the `command prompt` or through `git bash`. I used it without being aware of it for years. It seemlessly creates a Personal Access Token for GitHub in the background. It saves you so much time by not having to sign in each time. I recommend using it unless you are on a shared computer.

![](https://media.giphy.com/media/toXKzaJP3WIgM/source.gif)

### But wait, what if you have multiple user accounts.


At a previous full time position I had both a personal and a business GitHub account. All was hunky dori until i needed to switch back and forth between the two.

![](https://media.giphy.com/media/UZ12sB7FMkjG8/giphy.gif)

I had to repeat the steps below every time I wanted to switch. Thankfully this only lasted a short time.

Process for switching between accounts.

1. Open the Credential Manager - in control panel
2. Locate `git@github.com`
3. Delete that record
4. start a push or pull to github
5. enter credentials for other account
6. repeat steps 2-5 to switch back.

> Note: you will likely recieve an email each time you change since a new Persoal Access Token has been added to your account.

I hope this helps anyone else who ends up with the same issue.
