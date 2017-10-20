export class Point{
    
     /*  private  x:number;
     private y:number;
  
      //Note:we cannot have multiple contructors in Typescript ie:only 1 contructor 
      //x?:number => ? is for declaring optional params 
      constructor(x?:number,y?:number){
          this.x=x;
          this.y=y;
      } */
  
      //OR above Code Can be re-wriiten as below code
  
      constructor(private _x?:number,private _y?:number){
  
      }
      //defining properties
      set x(value){
          if(value<0)
          throw new Error('Value cannot be less than 0.');
  
          this._x =value
      }
  
      get x(){
          return this._x;
      }
      set y(value){
         /*  if(value<0)
          throw new Error('Value cannot be less than 0.'); */
  
          this._y =value
      }
  
      get y(){
          return this._y;
      }
  
      draw(){
          console.log("x="+this._x);
          console.log("y="+this._y);
      }
  
     
  }
  