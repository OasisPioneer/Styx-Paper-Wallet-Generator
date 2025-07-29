# Styx Paper Wallet Generator

[中文](README_CN.md)

## Project Introduction

The Styx Paper Wallet Generator is a simple, secure tool designed to help users generate and print cryptocurrency paper wallets offline. By converting mnemonic phrases into a printable paper format, it provides a safer way to store your digital assets, effectively reducing online risks.

## Features

- **Offline Generation**: All wallet generation processes are completed locally in your browser, without relying on any servers, ensuring your mnemonic phrase never touches the internet.
- **Mnemonic Support**: Supports 12 or 24-word mnemonic phrase input, converting them into scannable QR codes and text format.
- **Custom Information**: Allows users to add custom titles and notes to their paper wallets for easy management.
- **Bilingual (Chinese/English)**: Provides both Chinese and English interfaces for convenience of different language users.
- **Print-Friendly**: Generates beautifully laid out paper wallet cards that can be directly printed, complete with instructions for folding and secure storage.
- **Security Warnings**: Includes detailed security warnings and recommendations to guide users on how to use paper wallets correctly and safely.

## Technology Stack

- **HTML5**: For page structure.
- **CSS3**: For page styling and responsive layout.
- **JavaScript**: Core logic implementation, including mnemonic phrase processing, QR code generation, and UI interactions.
- **Ethers.js (ethers.umd.min.js)**: Used for mnemonic phrase validity verification. This is a lightweight JavaScript library for interacting with the Ethereum blockchain and its ecosystem.
- **QRious.js (qrious.min.js)**: Used for generating QR codes from mnemonic phrases and addresses.
- **Custom Fonts**: `Roboto` and `Orbitron` fonts are used to enhance the interface aesthetics and professionalism.

## How to Use

1. **Download the Project**: Download the entire project files to your local computer.
2. **Disconnect from the Internet**: For maximum security, ensure your device is disconnected from the internet.
3. **Open `index.html`**: Open the `index.html` file in your web browser.
4. **Enter Mnemonic Phrase**: Paste or manually enter your 12 or 24-word mnemonic phrase into the "Mnemonic Phrase" input field.
5. **Add Information (Optional)**: You can enter a wallet name as the card title and add any notes.
6. **Generate Paper Wallet**: Click the "Generate Paper Wallet" button.
7. **Print**: Click the "Print Wallet" button to print the generated paper wallet. It is recommended to use a high-quality printer and paper.
8. **Secure Storage**: Follow the instructions on the paper wallet for folding and store it in a fireproof, waterproof, and theft-proof secure location. It is recommended to make multiple backups and store them in dispersed locations.

## Security Precautions

**Please read the following security warnings carefully, as they are crucial for the safety of your assets:**

- **Offline Use**: This tool is designed for offline use. Ensure your device is completely disconnected from the internet throughout the entire process of generating and printing the paper wallet.
- **Avoid Clipboard**: Do not use the clipboard to copy or paste your mnemonic phrase. Clipboard contents can be stolen by malicious software.
- **Mnemonic is the Master Key**: Your mnemonic phrase is the sole master key to access your cryptocurrency assets. Once lost or compromised, your assets will be at risk.
- **Never Store Digitally**: Do not store or transmit your mnemonic phrase in any digital form (e.g., screenshots, text files, cloud storage, etc.).
- **Mnemonic Control**: Anyone who possesses your mnemonic phrase will have full control over your funds. Please guard your paper wallet as you would physical cash.
- **Mnemonic Order**: The order of words in your mnemonic phrase is critical. Do not scramble the order, or you will be unable to recover your wallet.

## Donation Support

If you find the Styx Paper Wallet Generator helpful, you are welcome to donate to the following address. Your support motivates us to continue improving:

**ETH - Ethereum**: `0x888888cFcD5aD452F18330ea2686c9389d57A32e`

## License

This project is licensed under the MIT License. See the `LICENSE` file (if present) for details.

## Acknowledgements

- [Ethers.js](https://docs.ethers.org/): A powerful Ethereum JavaScript library.
- [QRious.js](https://github.com/neocotic/qrious): A lightweight QR code generation library.



