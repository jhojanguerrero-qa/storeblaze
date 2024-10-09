export class signUpElements {
    static get SignUpForm(){
        return{
            get inputUsername(){
                return cy.get('input#sign-username');
            },
            get inputPassword(){
                return cy.get('input#sign-password');
            },
            get btnFinishSignUp(){
                return  cy.contains('button', 'Sign up');
            },
        }
    }

}