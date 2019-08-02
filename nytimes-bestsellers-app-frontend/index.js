document.addEventListener('DOMContentLoaded', () => {
    
    let form = document.querySelector('.form')


    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getHardcoverNonFiction)
    
    setTimeout(fetch('https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getPaperbackNonFiction), 3000)
    
    setTimeout(fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getHardcoverFiction), 3000)
    
    setTimeout(fetch('https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getPaperbackFiction), 3000)


    form.addEventListener('submit', function() {
        event.preventDefault() 
        let name = document.querySelector('#name')
        let author = document.querySelector('#author')
        let title = document.querySelector('#title')
        let review = document.querySelector('#review')

        appendNewReview()

        let body = { reviewer_name: name.value,
                     author: author.value,
                     book_title: title.value, 
                     review: review.value }
        
        fetch('http://localhost:3000/reviews', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json' },
            body: JSON.stringify(body)
        })
    });

    fetch('http://localhost:3000/reviews')
        .then(parseJson)
        .then(object => {
            object.map(review => {
                let reviewList = document.querySelector('.review-list')
                let h5 = document.createElement('h5') 
                let h4 = document.createElement('h4') 
                let h3 = document.createElement('h3') 
                let p = document.createElement('p')
                let button = document.createElement('button')
                let id = review.id

                button.innerText = 'Delete Review'
                h3.innerText = review.book_title
                h4.innerText = review.author
                p.innerText = review.review
                h5.innerText = review.reviewer_name

                reviewList.append(h3, h4, p, h5, button)

                button.addEventListener('click', function() {
                    event.target.parentNode.remove()
                    console.log(event)
                    fetch(`http://localhost:3000/reviews/${review.id}`, {
                        method: 'DELETE'
                    })
                })
            })
        });
            
    
    
    
    function parseJson(response) {
        return response.json()
    };

    function getHardcoverNonFiction(object) {
        let bookArray = object.results.books
            
            bookArray.map(book => {
                
                let container = document.querySelector('div.nonfiction-container#nonfiction-anchor')
                let secondContainer = document.createElement('div')
                secondContainer.className='non-fiction'
                container.appendChild(secondContainer)
                
                let rank = document.createElement('h4')
                rank.className='rank'
                rank.innerText = book.rank
                secondContainer.appendChild(rank)
                
                let card = document.createElement('div')
                card.className='card'
                secondContainer.appendChild(card)
                
                let img = document.createElement('img')
                img.className='book-cover'
                img.setAttribute('src', book.book_image)
                img.setAttribute('style', 'width:100%')
                card.appendChild(img)
                
                let div = document.createElement('div')
                div.className='container'
                card.appendChild(div)
                
                let author = document.createElement('p')
                author.className='author'
                author.innerText = `Author: ${book.author}`
                card.appendChild(author)
                
                let weeksOnList = document.createElement('p')
                weeksOnList.className='weeks-on-list'
                weeksOnList.innerText = `Weeks On List: ${book.weeks_on_list}`
                card.appendChild(weeksOnList)
                
                let description = document.createElement('p')
                description.className='description'
                description.innerText = book.description
                card.appendChild(description)
                
                let title = document.createElement('a')
                title.className='amazon'
                title.setAttribute('href', book.amazon_product_url)
                title.setAttribute('target', '_blank')
                title.innerText = book.title
                title.innerText = 'Buy It'
                card.appendChild(title)

                let bookIcon = document.createElement('i')
                bookIcon.className='fas fa-book'
                card.appendChild(bookIcon)
            })
        };
        
        function getPaperbackNonFiction(object) {
            let bookArray = object.results.books
            
            bookArray.map(book => {
                
                let container = document.querySelector('div.paperback-nonfiction-container#paperback-nonfiction-anchor')
                let secondContainer = document.createElement('div')
                secondContainer.className='paperback-nonfiction'
                container.appendChild(secondContainer)
                
                let rank = document.createElement('h4')
                rank.className='rank'
                rank.innerText = `Rank ${book.rank}`
                secondContainer.appendChild(rank)
                
                let card = document.createElement('div')
                card.className='card'
                secondContainer.appendChild(card)
                
                let img = document.createElement('img')
                img.className='book-cover'
                img.setAttribute('src', book.book_image)
                img.setAttribute('style', 'width:100%')
                card.appendChild(img)
                
                let div = document.createElement('div')
                div.className='container'
                card.appendChild(div)
                
                
                let author = document.createElement('p')
                author.className='author'
                author.innerText = `Author: ${book.author}`
                card.appendChild(author)
                
                let weeksOnList = document.createElement('p')
                weeksOnList.className='weeks-on-list'
                weeksOnList.innerText = `Weeks On List: ${book.weeks_on_list}`
                card.appendChild(weeksOnList)
                
                let description = document.createElement('p')
                description.className='description'
                description.innerText = book.description
                card.appendChild(description)
                
                let title = document.createElement('a')
                title.className='amazon'
                title.setAttribute('href', book.amazon_product_url)
                title.setAttribute('target', '_blank')
                title.innerText = book.title
                title.innerText = 'Buy It'
                card.appendChild(title)
                
                let bookIcon = document.createElement('i')
                bookIcon.className='fas fa-book'
                card.appendChild(bookIcon)
            })
        };
        
        function getHardcoverFiction(object) {
            let bookArray = object.results.books
            
            bookArray.map(book => {
                
                let container = document.querySelector('div.fiction-container#fiction-anchor')
                let secondContainer = document.createElement('div')
                secondContainer.className='fiction'
                container.appendChild(secondContainer)
                
                let rank = document.createElement('h4')
                rank.className='rank'
                rank.innerText = `Rank ${book.rank}`
                secondContainer.appendChild(rank)
                
                let card = document.createElement('div')
                card.className='card'
                secondContainer.appendChild(card)
                
                let img = document.createElement('img')
                img.className='book-cover'
                img.setAttribute('src', book.book_image)
                img.setAttribute('style', 'width:100%')
                card.appendChild(img)
                
                let div = document.createElement('div')
                div.className='container'
                card.appendChild(div)
                
                
                let author = document.createElement('p')
                author.className='author'
                author.innerText = `Author: ${book.author}`
                card.appendChild(author)
                
                let weeksOnList = document.createElement('p')
                weeksOnList.className='weeks-on-list'
                weeksOnList.innerText = `Weeks On List: ${book.weeks_on_list}`
                card.appendChild(weeksOnList)
                
                let description = document.createElement('p')
                description.className='description'
                description.innerText = book.description
                card.appendChild(description)
                
                let title = document.createElement('a')
                title.className='amazon'
                title.setAttribute('href', book.amazon_product_url)
                title.setAttribute('target', '_blank')
                title.innerText = book.title
                title.innerText = 'Buy It'
                card.appendChild(title)
                
                let bookIcon = document.createElement('i')
                bookIcon.className='fas fa-book'
                card.appendChild(bookIcon)
            })
        };
        
        function getPaperbackFiction(object) {
            let bookArray = object.results.books
            
            bookArray.map(book => {
                
                let container = document.querySelector('div.fiction-paperback-container#fiction-paperback-anchor')
                let secondContainer = document.createElement('div')
                secondContainer.className='paperbackfiction'
                container.appendChild(secondContainer)
                
                let rank = document.createElement('h4')
                rank.className='rank'
                rank.innerText = `Rank ${book.rank}`
                secondContainer.appendChild(rank)
                
                let card = document.createElement('div')
                card.className='card'
                secondContainer.appendChild(card)
                
                let img = document.createElement('img')
                img.className='book-cover'
                img.setAttribute('src', book.book_image)
                img.setAttribute('style', 'width:100%')
                card.appendChild(img)
                
                let div = document.createElement('div')
                div.className='container'
                card.appendChild(div)
                
                
                let author = document.createElement('p')
                author.className='author'
                author.innerText = `Author: ${book.author}`
                card.appendChild(author)
                
                let weeksOnList = document.createElement('p')
                weeksOnList.className='weeks-on-list'
                weeksOnList.innerText = `Weeks On List: ${book.weeks_on_list}`
                card.appendChild(weeksOnList)
                
                let description = document.createElement('p')
                description.className='description'
                description.innerText = book.description
                card.appendChild(description)
                
                let title = document.createElement('a')
                title.className='amazon'
                title.setAttribute('href', book.amazon_product_url)
                title.setAttribute('target', '_blank')
                title.innerText = book.title
                title.innerText = 'Buy It'
                card.appendChild(title)
                
                let bookIcon = document.createElement('i')
                bookIcon.className='fas fa-book'
                card.appendChild(bookIcon)
                
            })
        };

        function appendNewReview() {
            let reviewList = document.querySelector('.review-list')
            let h5 = document.createElement('h5') 
            let h4 = document.createElement('h4') 
            let h3 = document.createElement('h3') 
            let p = document.createElement('p')
            let button = document.createElement('button')
                    
            button.innerText = 'Delete Review'
            h3.innerText = title.value
            h4.innerText = author.value
            p.innerText = review.value
            h5.innerText = name.value

            reviewList.append(h3, h4, p, h5, button)
        };
            
        
        
})
