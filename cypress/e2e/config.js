export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNzUzNDU0NDY3LCJleHAiOjE3NTQwNTkyNjd9.YwBFvJQcJ6KlQV4E7rfsIHeWW6jU0nSzeX1wqczDpGA";

export const setToken = () => {
    cy.setCookie('token', token);
}