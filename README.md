🚀 Automation Project: Universal Login Tester
This project uses Cypress to automate the testing of login functionalities across various web platforms. It's designed to be flexible, scalable, and easy to customize for any system that includes a login workflow.

📌 Features
✅ Easy-to-configure test setup
🔐 Valid & invalid credential test cases
🔁 Reusability for multiple applications
🧪 Real-time assertions and validations

⚙️ Setup Instructions
1. 📦 Install Dependencies:  npm install
2. 🧪 Run Tests:  npx cypress open

✏️ Configuration
Update your test URL in the cypress/e2e/Universal_Login.cy.
const loginUrl = 'Web Address';
Set a new user with the bellow credentials in the web application
username: admin@gmail.com 
password: Adm12345678

✅ Test Scenarios Covered
->Valid Username and Password
->Empty Username
->Empty Password
->Empty Username and Password
->Incorrect Username
->Incorrect Password
->Incorrect Username and Password
->Special Characters in Username and Password
->SQL Injection in Username
->SQL Injection in Password
->SQL Injection in Both Fields
->Case-Sensitive Password
->Username Missing Domain
->Username Incomplete Domain
->Username Missing Local Part
->Username Missing .com
->Username Missing @
->Username With Extra @
->Username With Space
->Username With Leading and Trailing Space
->Username Typo in Domain
->Username With Invalid Character
->Password Too Short
->Password Too Long
->Password With Space
->Password With Special Characters
->Password With Altered Capitalization
->Password With Words Instead of Numbers
->Password With Leading and Trailing Space

👨‍💻 Contributing
Pull requests are welcome! Please ensure any contributions follow the existing style and are well-documented.

📬 Contact
For any queries, contact: Sparsha-Singha
