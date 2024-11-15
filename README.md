# AT Code Challenge :rocket:

Welcome to the AT Code Challenge! We’re excited to see your Jedi-level coding skills in action. :smile:

Please remember to fork the repo and create a PR when submitting your work. Don’t forget to have fun! :wink:

# The Problem

We are building a Referral Tracking System for our real estate company. When an agent is hired, they have the ability to refer other agents. These referred agents can, in turn, refer more agents, creating a referral chain.

Your task is to design and implement a solution to model and track this chain of referrals. The system should allow us to create and manage a referral tree of agents in a hierarchical structure.

# Requirements:

1. Login:
  <div align="center">
    <img src="./assets/AT-01.png" width="50%">
  </div>
  <br>

  - The system must require the user to log in before accessing the app.
  - The user should enter a username and password for authentication.
    
2. Display and Manage Referrals:
  <div align="center" style="display: flex; justify-content: center; gap: 1rem">
    <img src="./assets/AT-02.png" width="50%">
    <img src="./assets/AT-03.png" width="50%">
  </div>
  <br>

  - The referral tree should be visualized in a grid or table format, where each agent and their direct referrals are shown at the appropriate levels.
  - The tree should be easily navigable to allow users to quickly see the hierarchy of referrals.

3. Add New Agents:
  <div align="center">
    <img src="./assets/AT-04.png" width="50%">
  </div>
  <br>

  - The system must allow new agents to be added at any level of the tree.
  - A new agent can either be added as a direct referral of an existing agent, or inserted into any existing position within the tree.

# Additional Considerations:

The referral chain may be deep, so performance and scalability are critical, especially in terms of how the system handles large numbers of agents and hierarchy.
The UI should be intuitive and responsive, ensuring easy interaction with the referral tree.
Ensure the app is modular and well-structured.

# Tech Stack
1. Backend (for Login functionality):
  - NodeJs
  - Express
  - GraphQL
  - PostgreSQL
2. Backend (for Referral Management functionality):
  - .Net Core
  - Dapper
  - Sql Server
3. Frontend (for UI):
  - React
  - Typescript
  - Kendo UI (optional, it is just a suggestion :wink:)

We do provide a `Dockerfile` to help you get started with a dev environment.

# Send us your challenge

When you're ready to submit your work, please follow these steps:

- Fork the repository.
- Implement your solution.
- Create a Pull Request to our repository.
- Submit your PR within 4 hours :exclamation: of forking the repo.
- Communicate with us via the chat channel #Code-Challenge in (Glip)[https://cliq.zoho.com/company/710901440/channels/ext:devnewhires] for any questions or clarifications.

There are no strict limitations on your implementation. You are free to use your preferred programming paradigm, modularization, and security practices. The goal is to deliver a clean, well-structured, and scalable solution.

If you have any questions or need further clarification, feel free to ask. We’re here to help!
