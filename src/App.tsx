import styles from './App.module.scss';

import Spline from '@splinetool/react-spline';

export default function App() {
    return (
        <main className={styles.root}>
            <Spline scene="https://prod.spline.design/HWnAAoFWJmGLiEal/scene.splinecode" />
        </main>
    );
}
