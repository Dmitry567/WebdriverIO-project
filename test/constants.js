const baseUrl = 'https://stage.pasv.us';

const url = {
  loginUrl = `${baseUrl}/user/login`,
};

const user = {
  admin: {
    login:'admin@test.com',
    password: '11111'
    
  },
  student: {
    login: '',
    password: ''
  }
};




module.exports = {
  url,
  user
};