import { Handler, response, database as db } from 'kretes';

const { OK } = response;

export const browse: Handler = async () => {
  const articles = await db.from('task');
  return OK(articles);
}
