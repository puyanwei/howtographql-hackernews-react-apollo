# Hacker News Board

This is a mock [hackernews](https://news.ycombinator.com/) style feed board created by following the React & Apollo [tutorial](https://www.howtographql.com/react-apollo/0-introduction/) on howtographql.com.

Although slightly out of date, this gave me a good insight to how GraphQL and Apollo work together with React.

As an extra challenge my version of this is written using React hooks.

![image](https://user-images.githubusercontent.com/14803518/77821983-84bd2a00-70e6-11ea-8ee2-30bae1eabfb0.png)

### Installation

```
git clone git@github.com:puyanwei/howtographql-hackernews-react-apollo.git
cd hackernews-react-apollo
npm install
cd server
npm install
npm run prisma deploy
```

When prompted where to set/deploy your service select `Demo server`
You will have to login with your github creditionals and select a region.

An endpoint will be written to `prisma.yml`

```
npm run server
cd ../
npm start
```
