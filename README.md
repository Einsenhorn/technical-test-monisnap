# technical-test-monisnap

## What is this repository?

This repository is my work in progress for a technical test for [Monisnap](https://www.monisnap.com/fr/), I may have spend around 8 hours on it.

### Screenshot

![image](https://user-images.githubusercontent.com/1643879/117396227-d0512280-aef9-11eb-8cc1-de51e1f8372d.png)

_Amount component_

![image](https://user-images.githubusercontent.com/1643879/117396040-751f3000-aef9-11eb-89ca-ca9049c167a1.png)

_Avatar component_

![image](https://user-images.githubusercontent.com/1643879/117396290-eced5a80-aef9-11eb-94ad-a19216dd121f.png)

_Recipients displayed as list elements_

![image](https://user-images.githubusercontent.com/1643879/117396313-f70f5900-aef9-11eb-8131-b385b684edfb.png)

_Recipients displayed as cards_


## Setup

You might need a newer version of Node if yours is old or if you are not using a tool allowing you to use several node instances.

Please look at the `.nvmrc` file if it's the case.

```
npm install
npx lerna bootstrap
cd packages/design-system
npm run storybook
```




## Description of this test
Based on a [Figma](https://www.figma.com/file/7f9BwAJVoGmsDfuebmaoUE/Case-Front-Monisnap) and an [API](https://my-json-server.typicode.com/Monisnap/test-front-back), the goal of this test is to create the UI shown in the Figma.

There are some constraints such as:
- Mobile first but needs to be responsive on browser
- No restriction for the javascript framework you want to use
- [Icons](https://material.io/resources/icons).
- Fonts can be found in the Figma file
- You need to have a solution to host your solution.
- You have 24 hours to complete it

You will be evaluated on these criteria:
- Which technologies you used
- Code quality
- Stage management
- Front-end strategy / Architecture
- Testability (did you write tests? Are your components easily testable?)


