class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    print(){
        console.log('ID: '+this.id+',Name: '+this.name);
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
/////////////
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
    print(){
        if(this.data!=null){
            this.data.print();
            if(this.next!=null){
                this.next.print();
            }
        }else
        console('List is Empty.....')
    }
}
/////////////
class List{
    constructor(){
        this.head=null;
    }
    add(data){
        if(this.head==null){
            this.head=new Node(data);
            console.log('Data Added As Head...!');
        }else{
            this.head.addNode(data);
        }
    }
    print(){
        if(this.head!==null){this.head.print();}
        
        else{console.log('List is Empty.....')}
        
    }
}
//////////////
//let list=new List();
let student_1=new Student(1,'Allam');
let student_2=new Student(2,'Ahmad');
let teatcher_1=new Teatcher(1,'Ramy',1000);
let list=new List();
list.print();
list.add(student_1);
list.add(student_2);
list.add(teatcher_1);
list.print();
/*let list=new Node(student_1);
list.addNode(student_2);
list.addNode(teatcher_1);
list.print();*/