class User {
    public id: number
    public name: string
    public email: string
    private password: string
    public phone: string
    public age: number
    public usernotes : NoteBook[]=[]

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number,userNotes:NoteBook[]=[]) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.age = age
        this.usernotes=userNotes
    }
    setAge(age: number): number | void {
    if (age < 18 || age > 60) {
        console.log("Age must be between 18 and 60")
        return;
    }

    this.age = age
    return this.age
}
    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Age: ${this.age}`)
}
}

class Admin extends User {
    adminID:number
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number,adminID:number)
    {
        super(id,name,email,password,phone,age)
        this.adminID=adminID
    }
    manageNotes(note:Note , action: string):void{
        console.log(`Admin ${this.name} performed ${action} on note ${note.title}.`)
    }
}

class Note
    {
        id: number
        title: string
        content: string
        // userId:User => reference and it should be called in the constructor but I can't call two properties of type User in one constructor
        noteAuthor:User
        constructor(id: number, title: string, content: string,noteAuthor:User) {
            this.id = id
            this.title = title
            this.content = content
            // this.userId = userId => refererence
            this.noteAuthor=noteAuthor
        }

        preview():void{
            console.log(this.content)
        }
        showAuthor():void
        {
            console.log(`${this.content} has an author called #${this.noteAuthor.id} and title ${this.title}`);
            
        }
        }

class NoteBook
{
    private notes:Note[]=[]
    constructor(initialNotes:Note[]=[]) {
        this.notes=initialNotes
    }

    addNote(note: Note): void {
        this.notes.push(note)
    }

    removeNote(id: number): void {
        this.notes = this.notes.filter(n => n.id !== id)
    }
    getNotes(): Note[] {
        return this.notes;
    }
}

class Storage<T>
{

    private items:T[]=[]
    addItem(item:T):void
    {
        this.items.push(item)
    }
    removeItem(item: T): void {
    this.items = this.items.filter((i) => i !== item);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

