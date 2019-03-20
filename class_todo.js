//i worked together with mirelle in the bootcamp!
class jobsTodo{
   constructor(id,jobTitle,jobdate,done){
       this.jobTitle = jobTitle;
       this.jobdate = jobdate;
       this.done = false;
   }

   display(){
       return `This job of ${this.jobTitle} has been created on ${this.jobdate} is ${this.done}`

   }

   donejob(){
       this.done = true;
   }
}

class subjob extends jobsTodo{
   constructor(id,jobTitle,jobdate,done) {
       super(id,jobTitle,jobdate,done);
   }

}

let job= [];
let newjob = new subjob(1,'selecting Fellows','19/03/2019');
job.push(newjob);
console.log(job[0].display());
job[0].donejob();
console.log(job[0].display());