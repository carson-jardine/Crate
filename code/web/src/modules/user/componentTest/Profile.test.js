// import { screen, render } from '@testing-library/react';
// // import '@testing-library/jest-dom';
// import React from 'react';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import Profile from '../Profile';
// import { Provider } from 'react-redux';
// import { store } from '../../../setup/store'


// describe('Profile', () => {

//   beforeEach(() => {
//     store.user = { details: {
//       name: "Sam",
//       email: 'example.com',
//       role: 'USER'
//     }}
//   })
//   it('should render a profile', () => {
//     const history = createMemoryHistory()
//     console.log(store)

//     render(
//       <Provider store={store}>
//         <Router history={history}>
//           <Profile />
//         </Router>
//       </Provider>
//     );
//     expect(true).toEqual(false);
//   });
// });
