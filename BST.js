class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    addLeft(data){
        this.left=data;
    }
    addRight(data){
        this.right=data;
    }
}
///////////////////////////////////////////////////////
class Tree{
    constructor(){
        this.root=null;
    }
    insertion(data){
        if(this.root==null){
            this.root=new Node(data);
            console.log('Data is Added...as Root!'+data)
        }else{
           this.insert(this.root,data);
        }
    }
    /////////////////
    insert(root,data){
        if(root.data==data){
            console.log('The Key is Alredy Exist...Please Enter Another Key!');
            
        }else if(data>root.data){
            if(root.right==null){
                root.addRight(new Node(data));
                console.log('Data is Added...!'+data)
            }else{
                this.insert(root.right,data);
            }
        }else{
            if(root.left==null){
                root.addLeft(new Node(data));
                console.log('Data is Added...!'+data)
            }else{
                this.insert(root.left,data);
            }
        }
    }
    /////////////
    search(root,data){
        if(root==null){
            return null;
        }else if(root.data==data){
            return root;
        }else if(data>root.data){
          return this.search(root.right,data);
        }else{
           return this.search(root.left,data);
        }
    }
    /////////////
    printPreOrder(root){
        if(root==null){
          //  console.log('End Tree');
            return ;
        }
        console.log(root.data);
        this.printPreOrder(root.left);
        this.printPreOrder(root.right);
    }
    /////////////
    delete(data){
        let node=this.search(this.root,data);
        if(node==null){
            console.log('Data Not Found...Delete is Failed...!');
        }else(node.left==null&&node.right==null){
            
        }
    }
}

//////////////////////////// Testing /////////////////////////////
let tree=new Tree();
console.log('Root: '+tree.root);//null
tree.insertion(5);
tree.insertion(10);
tree.insertion(15);
tree.insertion(2);
tree.insertion(30);
tree.insertion(12);
tree.insertion(14);
tree.insertion(22);
console.log('Root: '+tree.root.data);//5
tree.printPreOrder(tree.root);//5,2,10,15,12,14,30,22
//console.log('Search by data Is: '+tree.search(tree.root,30).data);//30
console.log(tree.search(tree.root,555));
tree.delete(55);
////////////////////////////////////////////////////////////////