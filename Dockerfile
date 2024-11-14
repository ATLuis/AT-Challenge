# Use .NET Core 2.1 image as the base image
# FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS base
FROM mcr.microsoft.com/vscode/devcontainers/dotnet:2.1 AS base
# FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18 AS base

# Fix invalid signature: EXPKEYSIG
ENV YARNKEY=yarn-keyring.gpg
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmour -o /usr/share/keyrings/$YARNKEY && \
echo "deb [signed-by=/usr/share/keyrings/$YARNKEY] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update 

# Update the package list and install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2

# Install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Add Yarn GPG key and repository
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Update package list and install Yarn
RUN apt-get update && apt-get install -y --allow-unauthenticated yarn


# Set the working directory
WORKDIR /workspace

# Copy the current directory contents into the container at /workspace
COPY . .

# Keep the container running
CMD ["/bin/sh", "-c", "while sleep 1000; do :; done"]
