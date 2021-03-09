import { useEffect } from 'react';
import './Article.scss';

interface IArticle {
  cls: string;
}

const Article = ({ cls }: IArticle): JSX.Element => {
  useEffect(() => {
    console.log('data');
  }, []);

  return (
    <article className={cls}>
      <h1>Article</h1>
    </article>
  );
};

export default Article;
