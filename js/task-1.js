const categories = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${categories.length}`);
categories.forEach(element => {
    const title = element.querySelector('.item h2');
    const countOfElem = element.querySelectorAll('.item ul li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${countOfElem.length}`);
})