class Message {
    constructor(content){
        this.content = content
        this.li = document.createElement('li')
        this.li.append(this.content)
    }
  
}
