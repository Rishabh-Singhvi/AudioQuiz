<template>
  <div>
    <div >
    <form class="question-form">
    <div id="start-question">
    <div class="start-question-items">
     
      <h1 style="color:green">Question No 1</h1>
      <p>What is the antonym of ancient?</p>
      <div> <audio-recorder class="audio" style="background-color:#00d4ff"
    upload-url="YOUR_API_URL"
    :attempts="1"
    :time="2"
    :headers="headers"
    :before-recording="callback"
    :pause-recording="callback"
    :after-recording="callback"
    :select-record="callback"
    :before-upload="callback"
    :successful-upload="callback"
    :failed-upload="callback"/></div>
    </div>
  </div>
  
</form>
  </div>
  </div>
</template>

<script>
 import AudioRecorder from 'vue-audio-recorder'
 import Vue from 'vue'
 Vue.use(AudioRecorder)
export default {
  methods: {
    components: {AudioRecorder},
      callback (data) {
        console.debug(data)
      }
    }
}
</script>
<style scoped>

.question-form {
  display: block;
  font-family: helvetica neue, helvetica, arial, sans-serif;
  font-size: 18px;
  font-weight: 200;
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
}
#start-question.remove {
  transform: translateY(-100%);
  opacity: 0;
}
#start-question .start-question-items h1 {
  font-size: 30px;
  margin: 0 0 20px 60px;
}
#start-question .start-question-items p {
  margin: 0 0 30px 50px;
}
#start-question .start-question-items p strong {
  font-weight: 900;
}
#start-question .start-question-items div {
  display: inline-block;

}

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');


.audio{
  top:10px;
  bottom:10px;
  margin-left:30px;
   height: 53%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  
  z-index: 2000;
  left: 0;
  text-align: center;
  transition: 0.5s ease-in-out;
  transform: translateX(0);

}
</style>
