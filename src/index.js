console.log(data);

// WRITE YOUR CODE BELOW!
const sectionEl = document.querySelector(".main__dog-section");
const title = document.createElement("h2");

//Creates the dog card
function createCard(data){
   
    sectionEl.innerHTML = '';
    
    title.textContent = data.name;
    //Creates image element
    const image = document.createElement("img");
    image.setAttribute("src",data.image);

    //Creates the div container
    const container = document.createElement('div');
    container.setAttribute("class","main__dog-section__desc");

    //Creates the bio title
    const bioTitle = document.createElement("h3");
    bioTitle.textContent = "Bio";

    //Creates the paragraph element
    const paragraphEl = document.createElement("p");
    paragraphEl.textContent = data.bio;

    //Creates the container of the button and the caption
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class","main__dog-section__btn");

    const pEl = document.createElement('p');
    const buttonEl = document.createElement('button');
    
    //Fills the button text based on the isGoodDog value
    if(data.isGoodDog){
        pEl.textContent = " Yes!";
        buttonEl.textContent = "Good dog";
    }else{
        pEl.textContent = " No!";
        buttonEl.textContent = "Bad dog";
    }
    //Creates the italicized text
    const emText = document.createElement('em');
    emText.textContent = "Is naughty?";
    
        //Button element listener 
        buttonEl.addEventListener('click',function(){
            if(data.isGoodDog){
                pEl.textContent = " No!";
                pEl.prepend(emText);
                buttonEl.textContent = "Bad dog";
                data.isGoodDog = false;
            }else{
                pEl.textContent = " Yes!";
                pEl.prepend(emText);
                buttonEl.textContent = "Good dog";
                data.isGoodDog = true;
            }
        })

    pEl.prepend(emText);
    buttonContainer.append(pEl,buttonEl);
    container.append(bioTitle,paragraphEl);

    // const titleH2 = document.querySelector('h2');
    // titleH2.remove();
    sectionEl.append(title,image,container,buttonContainer);
    const mainEl = document.querySelector(".main");
    mainEl.append(sectionEl);
}

//Creates the list items inside the header which contain the dogs'name
function createListItem(data){
    const ulEl = document.querySelector('.dogs-list');
    const plusListElement = document.querySelector('.dogs-list__button--add');
    const liEl = document.createElement('li');
    liEl.setAttribute('class','dogs-list__button');
    liEl.textContent = data.name;

    liEl.addEventListener('click',function(){
        createCard(data);
    })

    plusListElement.addEventListener('click',function(){
        createForm();
    })
    ulEl.append(liEl);
}

//Creates the add dog form
function createForm(){
    sectionEl.innerHTML = '';
    title.textContent = 'Add a new Dog'

    const formEl = document.createElement('form');
    formEl.setAttribute('class','form');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name');
    nameLabel.textContent = `Dog's name`;

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('id','name');
    nameInput.setAttribute('name','name');

    const imageLabel = document.createElement('label');
    imageLabel.setAttribute('for','image');
    imageLabel.textContent = `Dog's picture`;

    const imageInput = document.createElement('input');
    imageInput.setAttribute('type','url');
    imageInput.setAttribute('id','image');
    imageInput.setAttribute('name','image');

    const bioLabel = document.createElement('label');
    bioLabel.setAttribute('for','bio');
    bioLabel.textContent = `Dog's bio`;

    const bioInput = document.createElement('textarea');
    bioInput.setAttribute('rows','5');
    bioInput.setAttribute('id','bio');
    bioInput.setAttribute('name','bio');

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type','submit');
    submitButton.setAttribute('id','submit');
    submitButton.setAttribute('name','submit');
    submitButton.setAttribute('value',`Let's add a dog!`);
    submitButton.setAttribute('class','form__button');

    const ulEl = document.querySelector('.dogs-list');

    formEl.addEventListener('submit',function(event){
        event.preventDefault();
        const dogName = formEl['name'].value;
        const dogImage = formEl['image'].value;
        const dogBio = formEl['bio'].value;

        const dogObj = {
            name: dogName,
            bio: dogBio,
            isGoodDog: true,
            image: dogImage
          }
          createCard(dogObj);
        
          ulEl.innerHTML='<li class="dogs-list__button dogs-list__button--add">+</li>';
            data.unshift(dogObj);
            for(const item of data){
                createListItem(item);
            }
       
    })
   
    formEl.append(nameLabel,nameInput,imageLabel,imageInput,bioLabel,bioInput,submitButton);
    sectionEl.append(title,formEl);
}

//Inserts all the list items for every dog name in the header
for(const item of data){
    createListItem(item);
}


