# Discussion Post Reply Generator

This app was built off of the OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/).

In an online class, discussion posts are the main way students and professors interact with the course's ideas and lessons. The best discussion posts demonstrate an understanding of the course material and present a cohesive argument with evidence to back it up. However, it is oftentimes redundant and tedious to complete, so I decided to automate the process utilizing OpenAI's GPT-3 model (Davinci).

This generator follows a basic debate structure in which it automatically agrees with the user it is replying to. The content that follows captures the reasoning of the user and elaborates their point, oftentimes with original thought. Lastly, the reply is finished with an expression of gratitude for the user's thoughts. 

Although this program is fully capable of generating discussion post replies in real-world discussion boards, **this program is used for educational purposes only**.

## Screenshots

![1](/1.png?raw=true "Example 1")

![2](/2.png?raw=true "Example 1")

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-node
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   ```bash
   $ cp .env.example .env
   ```

6. Add your [API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)!
