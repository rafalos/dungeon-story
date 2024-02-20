# Dungeon Story

Roguelike RPG game with story generator driven by OpenAI Api

## Hosted version

https://dungeon-story.fly.dev/

## About

Core dungeon exploration is built on top of chatGPT to generate random story every time you complete a dungeon. By using AI as a story generator i was able to provide unique experience every time you enter a dungeon exploration. For every dungeon entry the random sequence of events is generated. OpenAI adds the next part of the story to each of the event from the sequence. 
Once dungeon exploration is completed the whole story is saved and could be read as you would read typical dark fantasy chapter from the book.
The character progression is built on top of basic RPG progression systems.

## Technology

The project contains monorepo of server and clientside app. Express server builds and serves react client on root route and exposes api endpoints to be consumed by frontend app.

- Typescript
- Express.JS
- MongoDB
- React
- Redux
- React Query
- Tailwind
- OpenAI Api
... and much more :)

## Screenshots
![Alt text](https://res.cloudinary.com/dxctkhax8/image/upload/v1708472829/Screenshot_from_2024-02-21_00-35-48_t67tyf.png "Landing Page")
![Alt text](https://res.cloudinary.com/dxctkhax8/image/upload/v1708472609/Screenshot_from_2024-02-21_00-41-11_bckvtw.png "Exploration generating")
![Alt text](https://res.cloudinary.com/dxctkhax8/image/upload/v1708472746/Screenshot_from_2024-02-21_00-37-02_i7biz9.png "Inventory")


## Features

Implemented:

- [x] Core game loop
- [x] Character progression (level up, increase statistics)
- [x] Character equipment
- [x] Random dungeon story generation driven by OpenAI
- [x] Item generator (equipment with 4 rarity types, potions, gems with 2 rarity types)
- [x] Exploration module (with battle events, trap events and more...)
- [x] Shop module (gets refreshed given amount of time and restocked with random items)
- [x] Random exploration events with occurences probability

To be implemented:

- [ ] Tests!
- [ ] Mobile adjustments
- [ ] Character attributes formulas
- [ ] Gameplay rebalance
- [ ] Past stories (save, read)
- [ ] Game design improvement
- [ ] Logical exploration event (with some sort of puzzle to solve)
- [ ] Blacksmith
- [ ] Ability system

## Running project locally

To run project locally just clone the repo and ask the creator (me) for environment variables otherwise you wouldn't be able to access external services.
If you have set .env file properly and placed it in /server directory then

Start react client dev server:

```
npm run dev

```

cd into the ./server and start api server

```
cd server && npm run dev

```
## Building for production
The build process will get into the UI directory, build static version of react frontend, place it into the public folder of the server which wiil be served on express root route


```
cd server && npm run build && npm start

```
