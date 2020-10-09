class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    print(){
        console.log('ID: '+this.id+', Name: '+this.name);
    }
}
/////////////
class Teatcher{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    print(){
        console.log('ID: '+this.id+', Name: '+this.name+', Salary: '+this.salary);
    }
}
////////////////////////////////////////
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
    addNode(data){
        if(this.next==null){
            this.next=new Node(data);
            console.log('Data Added...!')
        }else{
            this.next.addNode(data);
        }
    }
    ///////
    print(){
        if(this.data!=null){
            this.data.print();
            if(this.next!=null){
                this.next.print();
            }
        }else
        console('List is Empty.....')
    }
    ///////
    deleteNode(data){
        if(this.next!==null){
            if(this.next.data===data){
                this.next=this.next.next;
                console.log('Success Delete Data....!');
                return true;
            }else{
              return this.next.deleteNode(data);
            }
        }
        return false;
    }
}
///////////////////////////////////////
class List{
    constructor(){
        this.head=null;
        this.count=0;
    }
    add(data){
        this.count+=1;
        if(this.head==null){
            this.head=new Node(data);
            console.log('Data Added As Head...!');
        }else{
            this.head.addNode(data);
        }
    }
    addFront(data){
        this.count+=1;
       let pointer=this.head;
        this.head=new Node(data);
        this.head.next=pointer;
        console.log('Data Added Front....!')
    }
    delete(data){
        if(this.head==null){
            console.log('List Is Empty.....Can not Deleting');
        }else if(this.head.data===data){
           this.head=this.head.next;
           this.count-=1;
           console.log('Success Delete Data....!');
        }else{
            const bool=this.head.deleteNode(data);
            if(bool===true){
                this.count--;
            }else{
                console.log('Deleting Failing...Data not Found!');
            }
        }
    }
    print(){
             console.log('.............................................');
        if(this.head!==null){
            this.head.print();  
            console.log('.............................................');
    }
        
        else{console.log('List is Empty.....')}
        
    }
}
//////////////
//let list=new List();
let student_1=new Student(1,'Allam');
let student_2=new Student(2,'Ahmad');
let teatcher_1=new Teatcher(3,'Ramy',1000);
let teatcher_2=new Teatcher(4,'Mohammed',1500);
let list=new List();
list.print();
list.add(student_1);
list.add(student_2);
list.add(teatcher_1);
list.addFront(teatcher_2);
list.print();
console.log('Number OF Node: '+list.count);
list.delete(teatcher_1);
console.log('Number OF Node: '+list.count);
list.print();

/*let list=new Node(student_1);
list.addNode(student_2);
list.addNode(teatcher_1);
list.print();*/