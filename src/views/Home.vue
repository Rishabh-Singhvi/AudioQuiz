<template>
  <div>
    <form id="question-form">
  <div id="start-question">
    <div class="start-question-items">
      <img src="../assets/64627.jpg" style="height:350px;width:450px">
      <h1>Hey! {{Uname}}</h1>
      <p>On clicking start we will ask you a question.Record your answer.</p>
      <div @click="start">Start Test</div>
    </div>
  </div>
</form>
  </div>
</template>

<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();


export default {
  name: 'Home',
  data(){
    return{
      Uname:'',
    }
  },
   methods:{
     start(){
       this.$router.push('/question')
     }
   },
   beforeMount(){
     let uid=localStorage.getItem('uid');
     console.log(uid)
     db.doc('users/'+uid).get().then(user=>{
       console.log(user.data())
       this.Uname=user.data().name
       console.log(this.Uname)
     })
   }
  
}
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}



/* Owl Styles */
/* .owl-stage,
.owl-stage-outer,
.owl-item {
  height: 100%;
  width: 100%;
} */

/* .owl-controls {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
} */

#question-form {
  height: 100%;
  width: 100%;
  display: block;
  font-family: helvetica neue, helvetica, arial, sans-serif;
  font-size: 18px;
  font-weight: 200;
}
.btn{
  background-color: white;
  height:50px;
  width:100px;
  border: 2px solid lightblue;
  border-radius: 4px;
  margin-top:10px;
  cursor:pointer;
}


#start-question {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: absolute;
  z-index: 2000;
  left: 0;
  text-align: center;
  transition: 0.5s ease-in-out;
  transform: translateX(0);
}
#start-question.remove {
  transform: translateY(-100%);
  opacity: 0;
}
#start-question .start-question-items h1 {
  font-size: 30px;
  margin: 0 0 20px 0;
}
#start-question .start-question-items p {
  margin: 0 0 30px 0;
}
#start-question .start-question-items p strong {
  font-weight: 900;
}
#start-question .start-question-items div {
  display: inline-block;
  padding: 20px;
  border-radius: 5px;
  background: #207bb4;
  color: white;
  box-shadow: inset 0 0 0 #08598c;
  transition: 0.25s ease-in-out;
  cursor: pointer;
}
#start-question .start-question-items div:hover {
  box-shadow: inset 200px 0 0 #08598c;
}

/* #previous-question {
  position: absolute;
  top: 20px;
  left: 0;
  text-align: center;
  z-index: 2;
  display: none;
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
}
#previous-question:hover {
  color: #207bb4;
}

#question-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: #dfdfdf;
  transform: scale(0.6);
  opacity: 0;
  transition: 0.5s 0.25s ease-in-out;
}
#question-wrapper.start {
  transform: scale(1);
  transform-origin: center center;
  opacity: 1;
}
#question-wrapper .question-question,
#question-wrapper .question-results {
  height: 100%;
  width: 100%;
  padding: 50px;
  display: flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  text-align: center;
}
#question-wrapper .question-question h2,
#question-wrapper .question-results h2 {
  width: 100%;
  padding: 20px;
  font-size: 25px;
  line-height: 20px;
}
#question-wrapper .question-question p,
#question-wrapper .question-results p {
  margin: 0 0 20px 0;
}
#question-wrapper .question-question p strong,
#question-wrapper .question-results p strong {
  font-weight: 900;
}
#question-wrapper .question-question label,
#question-wrapper .question-results label {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  box-shadow: inset 0 0 0 #207bb4;
  transition: 0.25s ease-in-out;
  cursor: pointer;
}
#question-wrapper .question-question label:hover,
#question-wrapper .question-results label:hover {
  box-shadow: inset 300px 0 0 #207bb4;
  color: white;
}
#question-wrapper .question-question input[type="radio"],
#question-wrapper .question-results input[type="radio"] {
  position: absolute;
  visibility: hidden;
}
#question-wrapper .question-question input[type="radio"]:checked + label,
#question-wrapper .question-results input[type="radio"]:checked + label {
  background: #08598c;
  color: white;
}
#question-wrapper .question-question button,
#question-wrapper .question-results button {
  padding: 20px;
  margin: 20px 10px;
  border-radius: 5px;
  background: #207bb4;
  color: white;
  box-shadow: inset 0 0 0 #08598c;
  transition: 0.25s ease-in-out;
  cursor: pointer;
  font-family: helvetica neue, helvetica, arial, sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 18px;
  border: none;
}
#question-wrapper .question-question button:hover,
#question-wrapper .question-results button:hover {
  box-shadow: inset 200px 0 0 #08598c;
}

#progress-wrapper {
  width: 960px;
  height: 8px;
  background: #f5f5f5;
  position: absolute;
  z-index: 1;
  bottom: 20px;
  left: 50%;
  margin-left: -480px;
  border-radius: 3px;
}
#progress-wrapper:hover #progress-bar:after {
  top: -38px;
  opacity: 1;
}
@media all and (max-width: 1060px) {
  #progress-wrapper {
    left: 50px;
    margin-left: 0px;
    width: calc(100% - 100px);
  }
}
#progress-wrapper #progress-bar {
  background: #28a8f8;
  height: 100%;
  width: 0%;
  transition: 0.5s ease-in-out;
  border-radius: 3px;
  position: relative;
}
#progress-wrapper #progress-bar:after {
  content: attr(data-progress) "%";
  position: absolute;
  text-align: center;
  font-size: 12px;
  line-height: 12px;
  display: inline-block;
  background: white;
  padding: 10px;
  width: 50px;
  top: -28px;
  right: -25px;
  border-radius: 5px;
  opacity: 0;
  transition: 0.25s ease-in-out;
} */

</style>
