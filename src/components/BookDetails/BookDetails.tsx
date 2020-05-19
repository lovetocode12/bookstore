import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {
    ConatinerDiv, PhotoDiv, Image, ContentDiv,
    H2Tag, PTag, StyledButton, ButtonsContainer
} from './BookDetails_Style'
import useBuyBook from '../../common/useBuyBook';
import { Order } from '../../store/orders/type';
import { RootState } from '../../store/type';
import { TitleContext } from '../../common/TitleContext';

type BookParams = {
    book_id: string
}

type Props = {};

const BookDetails: React.FC<Props> = () => {

    const params: BookParams = useParams();

    const [{ author, url, title, description, price, pageCount, id }] = useSelector((state: RootState) => state.bookState.books.filter((book) => book.id === params.book_id))

    const [BuyNow, AddToCart] = useBuyBook();

    const context: any = useContext(TitleContext);
    const dispatchTitle = context.dispatchTitle;
    useEffect(() => {
        if (dispatchTitle) {
            dispatchTitle({ type: 'SET_TITLE', payload: title })
        }
    }, [dispatchTitle, title])

    function BuyNowClick() {
        let order: Order = {
            orderStatus: 'InProcess',
            orderDate: new Date(),
            book: {
                id, description,
                url, title, price, author, pageCount
            }

        }
        BuyNow(order);
    }

    function AddToCartClick() {
        let order: Order = {
            orderStatus: 'InProcess',
            orderDate: new Date(),
            book: {
                id, description,
                url, title, price, author, pageCount
            }

        }
        AddToCart(order);
    }


    return (
        <ConatinerDiv>
            <PhotoDiv >
                <Image src={url} alt={title} ></Image>
            </PhotoDiv>
            <ContentDiv>
                <div>
                    <H2Tag>{title}</H2Tag>
                </div>
                <div>
                    {price}
                </div>
                <div>
                    {author}
                </div>
                <div>
                    {pageCount}
                </div>
                <ButtonsContainer>
                    <StyledButton onClick={AddToCartClick}>Add To Cart</StyledButton>
                    <StyledButton onClick={BuyNowClick}>Buy Now</StyledButton>
                </ButtonsContainer>
                <PTag> {description} </PTag>
            </ContentDiv>
        </ConatinerDiv>
    )
}

export default BookDetails
