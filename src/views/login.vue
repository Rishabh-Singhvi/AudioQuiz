<template>
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form>
			<h1>Sign in</h1>
			<br><br><br>
			<span>Use your account</span>
			<input type="email" placeholder="Email" v-model="email"/>
			<input type="password" placeholder="Password" v-model="password" />
			
			<button @click="loginEmail">Sign In</button>
			<br>
			<h1>{{error}}</h1>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<img src="../assets/Mobile-login.jpg" style="height:250px;width:250px">
				<h1>Dont have an Account!!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" @click="signup">Sign Up</button>
			</div>
		</div>
	</div>
</div>

</template>
<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();
export default {
	data(){
		return{
			email:'',
			password:'',
			error:''
		}
	},
	methods:{
		signup(){
		   this.$router.push('/signup')
		},
        loginEmail(){
                if(this.password!=''&&this.email!=''){
                auth.signInWithEmailAndPassword(this.email,this.password).then(snap=>{
                    let user = snap.user
                    console.log(user)
                    return db.doc("users/"+user.uid).get()
                    .then(doc => {
                        if(!doc.exists){
                            return db.doc("users/"+ user.uid).set({
                                name : user.name,
                                email: user.email,
                            })
                        }
                        else {
                            console.log(doc.data())
                            localStorage.setItem('uid',doc.id)
                            localStorage.setItem('user',JSON.stringify(doc.data()))
						}
                    this.$router.push('/home')
                })
                })
                .catch(err=>{
                    this.error = err.message
                    console.log(err)
                })
                }
                else{
                    this.modals.modal2=true
                }
            }
    }
}
</script>
<style scoped>
   
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}

h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	
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

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}


.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}


</style>