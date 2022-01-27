import React from 'react';
import QuizBook from '../quizBook/quiz_book';
import styles from './quiz_books.module.css';

const QuizBooks = ({
    books,
    prevDisable,
    nextDisable,
    handleNext,
    handlePrev,
    selectBook,
}) => {
    return (
        <section className={styles.container}>
            <button
                disabled={prevDisable}
                className={!prevDisable ? styles.prevBtn : styles.disableBtn}
                onClick={handlePrev}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <ul className={styles.list}>
                {books.map((book) => (
                    <QuizBook
                        key={book.id}
                        book={book}
                        selectBook={selectBook}
                    />
                ))}
            </ul>
            <button
                disabled={nextDisable}
                className={!nextDisable ? styles.nextBtn : styles.disableBtn}
                onClick={handleNext}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </section>
    );
};

export default QuizBooks;
