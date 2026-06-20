# Accessible Lunar Calendar App

A React Native mobile application built specifically with accessibility in mind. Designed for elderly users (specifically my Grandma!), this calendar prioritizes readability with dynamically scaled large fonts and integrates the Chinese Lunar Calendar alongside standard Gregorian dates.

## ✨ MVP Features

* **High Visibility UI:** Custom grid system with massive, easy-to-read numbers that scale based on the device's pixel ratio.
* **Dual Calendar System:** Displays both the standard date and the corresponding Chinese Lunar date (powered by `lunar-javascript`), automatically handling leap months.
* **Intuitive Navigation:** Simple horizontal swiping to move between months.
* **Simple Notes:** A distraction-free modal to tap a date and add quick text notes (saved locally via `AsyncStorage`).

## 🛠 Tech Stack

* **Framework:** React Native
* **Environment:** Expo
* **Language:** JavaScript
* **Development OS:** Ubuntu (WSL) on Windows

---

## 🚀 Getting Started

Follow these steps to run the project locally. 

### 1. Prerequisites
You will need the following installed on your machine:
* **Node.js** (v18 or higher)
* **Git**
* The **Expo Go** app installed on your physical iPhone or Android device.

### 2. Installation
Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone [https://github.com/YOUR_USERNAME/calendar.git](https://github.com/YOUR_USERNAME/calendar.git)

# Navigate into the project folder
cd calendar

# Install project dependencies
npm install

# Install the ngrok tunnel globally (Required for WSL users)
npm install -g @expo/ngrok
3. Running the App (WSL/Windows Users)
Because this project is developed within WSL, standard local networking to the iPhone will time out. You must use the --tunnel flag to bridge the connection securely.

Bash
# Start the Expo server using tunnel mode
npx expo start --tunnel
To view the app:

Open the Expo Go app on your phone.

Scan the QR code generated in your terminal.

Wait for the JavaScript bundle to build (100%), and the app will launch.

📂 Project Structure
Plaintext
calendar/
├── App.js                   # Main entry point of the app
├── package.json             # Project metadata and dependencies
├── src/
│   ├── components/          
│   │   └── CalendarGrid.js  # The core visual grid layout
│   ├── utils/
│   │   └── responsive.js    # Logic for dynamically scaling font sizes