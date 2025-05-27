describe('Universal Login Tests (Auto-detect Fields)', () => {
    const loginUrl = 'Web Address'; // Replace
    const validCreds = { username: 'admin@gmail.com', password: 'Adm12345678' }; // Replace
  
    const invalidTests = [
        // For Universal Login page 
      { name: 'Empty Username', username: '', password: validCreds.password },
      { name: 'Empty Password', username: validCreds.username, password: '' },
      { name: 'Empty Username and Password', username: '', password: '' },
      { name: 'Wrong Username', username: 'wronguser', password: validCreds.password },
      { name: 'Wrong Password', username: validCreds.username, password: 'wrongpass' },
      { name: 'Wrong Both', username: 'wronguser@gmail.com', password: 'wrongpass' },
      { name: 'Special Characters', username: '!@#$%^&*()', password: '!@#$%^&*()' },
      { name: 'SQL Injection in Username', username: "' OR 1=1 --", password: validCreds.password },
      { name: 'SQL Injection in Password', username: validCreds.username, password: "' OR 1=1 --" },
      { name: 'SQL Injection in Both Fields', username: "' OR 1=1 --", password: "' OR 1=1 --" },
    //   For specific login page  // Replace
      // { name: 'Case-Sensitive Username', username: 'SuperAdmin@gmail.Com', password: validCreds.password },
      { name: 'Case-Sensitive Password', username: validCreds.username, password: 'aDM12345678' },
      { name: 'Username Missing Domain', username: 'admin', password: validCreds.password },
      { name: 'Username Incomplete Domain', username: 'admin@', password: validCreds.password },
      { name: 'Username Missing Local Part', username: '@gmail.com', password: validCreds.password },
      { name: 'Username Missing .com', username: 'admin@gmail', password: validCreds.password },
      { name: 'Username Missing @', username: 'admin.gmail.com', password: validCreds.password },
      { name: 'Username With Extra @', username: 'admin@@gmail.com', password: validCreds.password },
      { name: 'Username With Space', username: 'admin@ gmail.com', password: validCreds.password },
      { name: 'Username With Leading and Trailing Space', username: ' admin@gmail.com ', password: validCreds.password },
      { name: 'Username Typo in Domain', username: 'admin@gmail.comm', password: validCreds.password },
      { name: 'Username With Invalid Character', username: 'admin#gmail.com', password: validCreds.password },      
      { name: 'Password Too Short', username: validCreds.username, password: 'Adm123456' },
      { name: 'Password Too Long', username: validCreds.username, password: 'Adm1234567890' },
      { name: 'Password With Space', username: validCreds.username, password: 'Adm 12345678' },
    //   { name: 'Password Uppercase', username: validCreds.username, password: 'ADM12345678' },
      { name: 'Password With Special Char', username: validCreds.username, password: 'Adm@12345678' },
      { name: 'Password With Capitalization Altered', username: validCreds.username, password: 'aDM12345678' },
      { name: 'Password With Words Instead of Numbers', username: validCreds.username, password: 'Adm12345sixseveneight' },
      { name: 'Password With Leading and Trailing Space', username: validCreds.username, password: ' Adm12345678 ' },
    ];
  
    const findInput = (keywords) =>
      cy.get('input').filter((index, el) => {
        const attr = (el.getAttribute('name') || '') +
                     (el.getAttribute('id') || '') +
                     (el.getAttribute('placeholder') || '');
        return keywords.some(keyword => attr.toLowerCase().includes(keyword));
      });
  
    const submitForm = () => {
      cy.get('button, input[type="submit"]').first().click();
    };
  
    const testLogin = (username, password) => {
        const userField = findInput(['user', 'email', 'login']).first().clear();
        const passField = findInput(['pass']).first().clear();
      
        if (username) userField.type(username);
        if (password) passField.type(password);
      
        submitForm();
      };
      
  
    beforeEach(() => {
      cy.visit(loginUrl);
    });
  
    it('Valid Login', () => {
      testLogin(validCreds.username, validCreds.password);
      cy.wait(1000);
      cy.url().should('not.include', loginUrl);
    });
  
    invalidTests.forEach(({ name, username, password }) => {
      it(`Invalid Login: ${name}`, () => {
        testLogin(username, password);
        cy.wait(1000);
        cy.url().should('include', loginUrl); // Assuming login fails, stays on same page
        // Optionally: check for error messages
        // cy.contains('Invalid').should('exist');
      });
    });
  });
  