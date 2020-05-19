import { Book } from "../store/books/type";
import { Address, Order } from "../store/orders/type";

export class MockData {
    static Address: Address = {
        address1: 'address line 1',
        address2: 'address line 2',
        email: 'test@g.com',
        city: 'city',
        phone: '12345'
    }

    static Order: Order = {
        orderDate: new Date(),
        orderStatus: 'InProcess',
        book: {
            "title": "Unlocking Android",
            "id": "1933988673",
            "price": 25,
            "pageCount": 416,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            "description": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
            "author": "W. Frank Ableson"
        }
    }
    static books: Book[] = [
        {
            "title": "Unlocking Android",
            "id": "1933988673",
            "price": 25,
            "pageCount": 416,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            "description": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
            "author": "W. Frank Ableson"
        },
        {
            "title": "Android in Action, Second Edition",
            "id": "1935182722",
            "price": 22,
            "pageCount": 592,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
            "description": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
            "author": "W. Frank Ableson"
        },
        {
            "title": "Zend Framework in Action",
            "id": "1933988320",
            "price": 22,
            "pageCount": 432,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
            "description": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
            "author": "Rob Allen"
        },
        {
            "title": "Flex on Java",
            "id": "1933988797",
            "pageCount": 265,
            "price": 22,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
            "description": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
            "author": "Bernerd Allmon"
        },
        {
            "title": "Griffon in Action",
            "id": "1935182234",
            "price": 22,
            "pageCount": 375,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
            "description": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
            "author": "Andres Almiray"
        },
        {
            "title": "OSGi in Depth",
            "id": "193518217X",
            "price": 22,
            "pageCount": 325,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
            "description": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
            "author": "Alexandre de Castro Alves"
        },
        {
            "title": "Flexible Rails",
            "id": "1933988509",
            "price": 22,
            "pageCount": 592,
            "url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
            "description": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
            "author": "Alexandre de Castro Alves"
        }
    ]

}