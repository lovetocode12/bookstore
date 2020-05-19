import React, { useEffect, useContext, useState } from 'react'
import BookItem from '../BookItem/BookItem'
import { Book } from '../../store/books/type'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../../store/books/books_action';
import { CardsWrapper, MoreDiv } from './BookList_Style'
import { TitleContext } from '../../common/TitleContext';
import { RootState } from '../../store/type';

type Props = {};

const BookList: React.FC<Props> = () => {

    const initialState: Book[] = [];
    const totalBooks = useSelector((state: RootState) => state.bookState.books);
    const [showMore, toggleMore] = useState(false);
    const dispatch = useDispatch();
    const context: any = useContext(TitleContext);
    const dispatchTitle = context.dispatchTitle;
    const [books, setbooks] = useState(initialState);
    useEffect(() => {
        if (dispatchTitle) {
            dispatchTitle({ type: 'SET_TITLE', payload: '' })
        }
    }, [dispatchTitle])

    useEffect(() => {
        if (!totalBooks.length) {
            dispatch(getBooks());
        }
    }, [])

    useEffect(() => {
        if (!showMore && totalBooks.length) {
            setbooks(totalBooks.slice(0, 10));
        } else if (showMore && totalBooks.length) {
            setbooks(totalBooks.slice());
        }
    }, [showMore, totalBooks])

    return (
        <React.Fragment>
            <CardsWrapper>
                {
                    books.length && books.map((book: Book) =>
                        <BookItem key={book.id} {...book}></BookItem>
                    )
                }
            </CardsWrapper>
            <MoreDiv onClick={() => toggleMore(!showMore)}>
                {!showMore ? "Show More" : "Show Only 10"}</MoreDiv>
        </React.Fragment>

    )
}
{/*  */ }

export default BookList
