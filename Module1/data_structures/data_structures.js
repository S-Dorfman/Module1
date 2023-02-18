
//Node basic class
//export makes this code available in another file
export class Node {
    constructor(data){
        this.data = data;   
        this.next = null;
    }
}

//LinkedList class
export class LinkedList {
    constructor(){
        this.head = null;

    }
   
    //method to return head node
    getHeadNode(){
        return this.head;
    }

    //clear linked list
    clear(){
        this.head = null;
    }

    //walker to traverse list
    traverse(){
        let walker = this.head;   //first node in the list
        while(walker){
            console.log(walker.data);
            walker = walker.next;   //moving to the next node
        }
    }
 
    //other method options
    getLast() {
    }

    appendNodeEnd() {    
    }
}
//can implement diff types of nodes
export class TextNode {
    constructor(data) {
        this.data = data; 
        this.length = data.length;
    }

}

//element node
export class ElementNode {
    constructor(name) {
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    //function to update text content
    setTextContent(text){
      this.textContent = text; 
      this.outerHTML = this.#setOuterHtml(); 
    }

    //private method only accesible inside class
    #setOuterHtml() {
        return `<${this.elementName}>${this.textContent} </${this.elementName}>`;
    }
}