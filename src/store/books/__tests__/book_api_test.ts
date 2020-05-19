import fetchMock from 'fetch-mock'
import { MockData } from '../../../mocks/mock_data'
import  {GetBooksApi} from '../book_api'

fetchMock.get('http://localhost:3001/books',{
    status: 200,
    books: MockData.books
})
describe('Book API', () => {

    it('GetBooksApi should return books', async() => {
        const response = await GetBooksApi();
        expect(response.status).toEqual(200);
        expect(response.books.length).toEqual(7);
    })
})