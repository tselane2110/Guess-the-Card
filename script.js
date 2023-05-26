// creating an array of elements where each element is a dictionary containing an
// id and the image path for the 4 cards.


const cardObjectDefinitions = [

    {id: 1, imagePath: 'images/card-KingHearts.png'},
    {id: 2, imagePath: 'images/card-jackClubs.png'},
    {id: 3, imagePath: 'images/card-QueenDiamonds.png'},
    {id: 4, imagePath: 'images/card-AceSpades.png'}
]


const cardBackImgPath = 'images/card-back-blue.png'

const cardContainerElem = document.querySelector('.card-container')

/*
<div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src="/images/card-JackClubs.png" alt="Image not found?">
                    </div>
                    <div class="card-back">
                        <img src="images/card-back-Blue.png" alt="Image not found?">
                    </div>
                </div>
            </div>
*/
createCards()

function createCards(){
    cardObjectDefinitions.forEach((cardItem)=>{
        createCard(cardItem)
    })
}

// creating div and img elements 

function createCard(cardItem){

    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    addClassToElement(cardInnerElem, "card-inner")
    addClassToElement(cardFrontElem, "card-front")
    addClassToElement(cardBackElem, "card-back")

    addClassToElement(cardFrontImg, 'card-img')
    addClassToElement(cardBackImg, "card-img")

    addSrcToImgElement(cardFrontImg, cardItem.imagePath)
    addSrcToImgElement(cardBackImg, cardBackImgPath)

    // creating child-parent relationships between different elements 
    // acc to the html code

    addChildElem(cardFrontElem, cardFrontImg)
    addChildElem(cardBackElem, cardBackImg)
    addChildElem(cardInnerElem, cardFrontElem)
    addChildElem(cardInnerElem, cardBackElem)
    addChildElem(cardElem, cardInnerElem)

    addCardToGridCell(cardElem)
}

// FUNCTIONS USED ABOVEEEEEE!!!!!!

// function to create an element

function createElement(elemType){

    return document.createElement(elemType);
}

// method to add class to elements 

function addClassToElement(elem, className){

    elem.classList.add(className)
}

// method to assign 'id' to an element

function addIdToElement(elem, id){

    elem.id = id
}

// method to add source to image element

function addSrcToImgElement(imgElem, src){

    imgElem.src = src
}

// method to add child elements wrt their parent elements

function addChildElem(parentElem, childElem){
    
    parentElem.appendChild(childElem)
}

// method to map card Id to Grid cell

function mapCardIdToGridCell(card){

    if(card.id == 1){
        return '.card-pos-a';
    }
    else if(card.id == 2){
        return '.card-pos-b';
    }
    else if(card.id == 3){
        return '.card-pos-c';
    }
    else if(card.id == 4){
        return '.card-pos-d';
    }
}

// method to add card to its respective grid cell

function addCardToGridCell(card){

    const cardPositionClassName = mapCardIdToGridCell(card)
    
    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElem(cardPosElem, card)
}




