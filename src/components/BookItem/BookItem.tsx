import React, { SyntheticEvent } from 'react'
import { Book } from '../../store/books/type'
import {
    CardDiv, PhotoDiv, Image, ContentDiv,
    H4Tag, PTag, StyledButton, ButtonsContainer
} from './BookItem_Style'
import { useHistory } from 'react-router-dom'
import { Order } from '../../store/orders/type'
import useBuyBook from '../../common/useBuyBook'

type Props = Book

const BookItem: React.FC<Props> = ({ id, title, url, description, price, pageCount, author }) => {

    const history = useHistory();
    const [BuyNow, AddToCart] = useBuyBook();

    function NavToDetailsPage(event: SyntheticEvent) {
        history.push(`/details/${id}`)
        event.stopPropagation();
    }

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
        <CardDiv>
            <PhotoDiv onClick={(e) => NavToDetailsPage(e)}>
                <Image src={url} alt={title} ></Image>
            </PhotoDiv>
            <ContentDiv>
                <H4Tag>{title}</H4Tag>
                <PTag> {description} </PTag>
                <ButtonsContainer>
                    <StyledButton onClick={BuyNowClick}>Buy Now</StyledButton>
                    <StyledButton onClick={AddToCartClick}>Add To Cart</StyledButton>
                </ButtonsContainer>

            </ContentDiv>
        </CardDiv>
    )
}

export default React.memo(BookItem)
