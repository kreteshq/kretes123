import { Task } from 'kretes';

const SendEmail: Task = async input => {
  const { name } = input;

  console.log(`Hello, ${name}`);
}

export default SendEmail;
