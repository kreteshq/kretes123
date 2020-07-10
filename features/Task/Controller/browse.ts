import { Handler, response, database as db } from 'kretes';

const { OK } = response;

const browse: Handler = async () => {
  const articles = await db.from('task');
  return OK(articles);
}

export = browse;
