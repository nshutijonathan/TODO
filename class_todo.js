
//i worked together with mirelle in the bootcamp!
//class definition
class jobsTodo{
   constructor(id,jobTitle,jobdate,done){
       this.jobTitle = jobTitle;
       this.jobdate = jobdate;
       this.done = false;
   }
//function definition within parent class 
   display(){
       return `This job of ${this.jobTitle} has been created on ${this.jobdate} is ${this.done}`

   }
//function definition within parent class 
   donejob(){
       this.done = true;
   }
}
//inheritance
class subjob extends jobsTodo{
   constructor(id,jobTitle,jobdate,done) {
       super(id,jobTitle,jobdate,done);
   }

}

let job= [];
let newjob = new subjob(1,'selecting Fellows','19/03/2019');//creating instances
job.push(newjob);
console.log(job[0].display());
job[0].donejob();
console.log(job[0].display());