import styles from './Request.module.scss';
import { useGetPostsQuery, } from './store/slice/request-api';

type Post = {
  id: number,
  body: string,
}

export default function Display() {
  const { isLoading, isError, data } = useGetPostsQuery('');
  let body = undefined;

  if (isLoading) {
    body = <p>Loading...</p>;
  } else if (isError) {
    body = <p>Fetch Error...</p>
  } else {
    body = data.map((post: Post) => <p className={styles['post']} key={post.id}>{`Body ${post.body}`}</p>)
  }

  return (
    <div className={styles['request-container']}>
      <h2 className={styles['title']}> Request API Component </h2>
      { body }
    </div>
  );
}
