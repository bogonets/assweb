import styles from './App.module.scss';

function App() {
  const pages = [
    '/assweb/img_01.jpg',
    '/assweb/img_02.jpg',
    '/assweb/img_03.jpg',
    '/assweb/img_04.jpg',
    '/assweb/img_05.jpg',
    '/assweb/img_06.jpg',
    '/assweb/img_07.jpg',
    '/assweb/img_08.jpg',
    '/assweb/img_09.jpg',
    '/assweb/img_10.jpg',
    '/assweb/img_11.jpg',
    '/assweb/img_12.jpg',
    '/assweb/img_13.jpg',
    '/assweb/img_14.jpg',
    '/assweb/img_15.jpg',
  ];

  return (
    <div className={styles.root}>
      {pages &&
        pages.map((src, index) => {
          return <img alt={`page-${index}`} src={src} />;
        })}
    </div>
  );
}

export default App;
