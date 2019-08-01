document.addEventListener('DOMContentLoaded', () => {
    // ul = document.querySelector('ul')
    // rank = document.querySelector('.rank')
    // bookCover = document.querySelector('.book-cover')
    // title = document.querySelector('.amazon')
    // author = document.querySelector('.author')
    // weeksOnList = document.querySelector('.weeks-on-list')
    // description = document.querySelector('.description')
    

    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getHardcoverNonFiction)
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getPaperbackNonFiction)
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getHardcoverFiction)
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=BUIQC7YAgnXst97hx0H5lbct96vIQaSX')
    .then(parseJson)
    .then(getPaperbackFiction)
            
    
    
    
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
                
                            
                        })
                    };
                
            
            
})
