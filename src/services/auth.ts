// Mocked Response for the apiSignIn, returning the user data
export default function apiSignIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'qw4u092rq8wicjfqnt9',
        user: {
          name: 'Richard',
          email: 'richard.v.s.netto@gmail.com',
          password: 'rdnt2011',
        },
      });
    }, 2000);
  });
}
