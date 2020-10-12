let myFullName = "Ted Trabucco"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
    const myHeading = document.querySelector(".header");
    myHeading.innerText = `${myFullName}\'s Lab 4`;
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name

    const paragraphs = document.querySelector(".content");
    const p1 = document.createElement("p");
    p1.className = "content1";
    const p2 = document.createElement("p");
    p2.className = "content2";

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
    p1.innerText = `my name has ${myFullName.length} characters`;
    paragraphs.appendChild(p1);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
    p2.innerText = `the third character in my name is ${myFullName[2]}`;
    paragraphs.appendChild(p2);
// 6 Add a new line to your second paragraph
    p2.innerText += "\n";

// 7 Return the final three characters of your last name to that new line
    
    p2.innerText += myFullName.slice(-3);
// 8 Substring your first and last name into two separate variables
    firstName = myFullName.slice(0,3);
    lastName = myFullName.slice(4);
// 9 Add the total length of your first and last names together
    totalLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
    myHeading.innerText += " "+totalLength;