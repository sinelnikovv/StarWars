# Star Wars Favorites Mobile Application

This project is a mobile application built with React Native CLI for both iOS and Android platforms. It allows users to mark their favorite characters from the Star Wars universe and track the total counts of male, female, and other gendered characters.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [API](#api)

## Features
- Retrieve and display a list of Star Wars characters from the SWAPI.
- View detailed information about each character by clicking on them.
- Add characters to a favorites list and track totals based on gender.
- Reset favorites list with a reset button.
- Paginated main screen.
- Search for Star Wars characters

## Requirements
- Node.js
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/sinelnikovv/StarWars.git
    cd StarWars
    ```

2. Install dependencies:
    ```bash
    yarn
    ```

3. Run the application:
    - For iOS:
        ```bash
        npx react-native run-ios
        ```
    - For Android:
        ```bash
        npx react-native run-android
        ```

## Usage
1. Open the application on your device/emulator.
2. Browse through the list of Star Wars characters.
3. Add characters to your favorites by clicking the heart icon or character name.
4. Click on a more button to view more details.
5. View the totals of male, female, and other characters in your favorites.
6. Use the “Reset” button to clear your favorites list.

## API
This application uses the [SWAPI](https://swapi.py4e.com/) to fetch data about Star Wars characters.

