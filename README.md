# Dungeon Story

Client-sided RPG game (roguelike style) created mainly to train my React and Redux skills

## Hosted version

https://shimmering-horse-fc11d5.netlify.app/

Hosted version contains exposed test API key just for showcase purposes. To run the project properly on your machine use your own OpenAI api key.

## About

Core dungeon exploration is built on top of chatGPT to generate random story every time you complete a dungeon. By using AI as a story generator i was able to provide unique experience every time you enter a dungeon exploration. For every dungeon entry the random sequence of events is generated. OpenAI adds the next part of the story to each of the event from the sequence. 
Once dungeon exploration is completed the whole story is saved and could be read as you would read typical dark fantasy chapter from the book.
The character progression is built on top of basic RPG progression systems.

## Technology

- VanillaJS
- React
- Redux
- OpenAI api

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

- [x] Fix item overlapping stats after equipping
- [x] Adjust shop refresh time
- [ ] Character attributes formulas
- [ ] Gameplay rebalance
- [ ] Past stories (save, read)
- [ ] Game design improvement
- [ ] Logical exploration event (with some sort of puzzle to solve)
- [ ] Blacksmith
- [ ] Ability system

## Running project locally

To run project locally just clone the repo and create config.js file in src/utils witn your OpenAI api key as follows:

```
export const GPT_API_KEY = "YOUR_API_KEY"
```

Then just run

```
npm run dev
```
