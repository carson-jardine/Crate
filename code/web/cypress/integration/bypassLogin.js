describe('Login without UI', () => {
  it('should be able to login', () => {
    cy.request({
      url: "http://localhost:8000/",
      method: 'POST',
      body: {
        user: {name: "The User", email: "user@crate.com", role: "USER", password: '123456'},
        query: "{userLogin (email: user@crate.com, password: 123456, role: USER) { user {name, email, role}, token } }"
      }
    }).then(res => cy.log(res.body.user.token))
  })
})

