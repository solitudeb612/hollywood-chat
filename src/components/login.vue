<template>
	<div class="container">
		<Navigation />
		<div class="box">
			<div class="transtion-box">
				<div class="login-box">
					<h1>欢迎回来</h1>
					<section>
						<label for="email">邮箱</label>
						<input v-model="email" type="text" id="email1" />
					</section>
					<section>
						<label for="password">密码</label>
						<input v-model="password" type="password" id="password1" />
						<span id="forgetPassword">忘记密码?</span>
					</section>
					<button type="button" v-on:click="ClickLogin">登录</button>
					<!-- <button type="button" class="other">
						使用<span style="font-weight: 900; color: #455a81">二维码</span>扫码登录
					</button> -->
				</div>
				<div class="reg-box" style="display: none">
					<h1>立即注册</h1>
					<section>
						<label for="username">用户名</label>
						<input v-model="username" type="text" id="username" />
					</section>
					<section>
						<label for="email">邮箱</label>
						<input v-model="email" type="text" id="email2" />
					</section>
					<section>
						<label for="password">密码</label>
						<input v-model="password" type="password" id="password2" />
					</section>
					<section>
						<label for="authCode">验证码</label>
						<input v-model="code" type="text" id="authCode" />
					</section>
					<div class="login-btn">
						<button type="button" v-on:click="ClickGetCode">获取验证码</button>
						<button type="button" v-on:click="ClickRegist">注册</button>
					</div>

				</div>
			</div>
			<div class="transferToReg">
				<h1 class="title">还未注册？</h1>
				<span class="subTitle">立即注册，发现大量机会！</span>
				<button type="button" id="transfetBtn">注册</button>
			</div>
		</div>
		<div class="check-container" v-show="isShowCheck">
			<div
				style="background-color: aliceblue; width: 420px;height: 420px; display: flex; align-items: center; justify-content: center;">
				<div>
					<span class="check-text">进行验证</span>
					<div class="check">
						<div class="check-child"></div>
					</div>
					<div class="drag">
						<div class="drag-tips">
							<span>按住左边按钮向右拖动完成上方图像验证</span>
						</div>
						<div class="drag-child"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from './Navigation.vue'
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import CryptoJS from 'crypto-js';
import { ElMessage } from 'element-plus'
// import constant from "./constant";

export default {
	components: {
		Navigation
	},
	data() {
		return {
			account: "",
			password: "",
			username: "",
			email: "",
			code: "",
			flag: 2,
			drag: null,
			check: null,
			isShowCheck: false,
			isSuccessExecuted: false,
		}
	},
	computed: {

	},
	watch: {},
	created() {

	},
	methods: {
		/*-------滑动验证------------*/
		// 通过校验回调
		success() {
			if (this.isSuccessExecuted) {
				return; // 如果已经执行过成功操作，则不再执行
			}
			ElMessage({
				message: '恭喜，人机验证通过！',
				type: 'success',
			})
			this.isSuccessExecuted = true;

			setTimeout(() => {
				this.isShowCheck = false;
			}, 300);
			console.log('通过校验');
		},
		// 声明鼠标按下事件
		dragMouseDown(event) {
			// 添加鼠标移动事件
			document.addEventListener('mousemove', this.dragMouseMove)
			// console.log('鼠标按下', event)
		},
		// 监听鼠标移动事件
		dragMouseMove(event) {
			// 获取当前 x 轴坐标
			const { pageX } = event
			if (pageX < 556 || pageX > 910) {
				return
			}
			// console.log(event)
			// 修改可移动盒子的 x 轴坐标
			this.drag.style.transform = `translateX(${pageX - 556}px)`
			// 修改被校验区域坐标
			this.check.style.transform = `translateX(${pageX - 556}px)`
			if (pageX >= 828 && pageX <= 837) {
				// 执行回调
				this.success()
			}
		},
		// 结束鼠标监听事件
		dragMouseUP(event) {
			// 移除鼠标移动事件
			document.removeEventListener('mousemove', this.dragMouseMove)

			// 获取当前 x 轴坐标
			const { pageX } = event

			if (pageX < 828 || pageX > 837) {
				// 修改可移动盒子的 x 轴坐标
				this.drag.style.animation = 'move 0.5s ease-in-out'
				// 修改被校验区域坐标
				this.check.style.animation = 'move 0.5s ease-in-out'

				// 动画结束监听回调
				const animationEnd = () => {
					// 修改可移动盒子的 x 轴坐标
					this.drag.style.transform = `translateX(${0}px)`
					// 修改被校验区域坐标
					this.check.style.transform = `translateX(${0}px)`

					// 清除动画属性
					this.drag.style.animation = ''
					this.check.style.animation = ''
					// 移出动画结束监听
					document.removeEventListener("animationend", animationEnd)
				}
				// 添加动画结束监听
				document.addEventListener("animationend", animationEnd)
			}

		},
		// checkContainer() {
		// 	this.isShowCheck = !this.isShowCheck
		// },
		/*---------------------------*/
		encrypt(plaintText) {
			let options = {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			};
			let key = CryptoJS.enc.Utf8.parse("zhajinhuadanzida");
			let encryptedData = CryptoJS.AES.encrypt(plaintText, key, options);
			return encryptedData.toString().replace(/\//g, "_").replace(/\%2B/g, "-");
		},
		handleTransfer() {
			let transfer = document.getElementById('transfetBtn');
			let transforget = document.getElementById('forgetPassword');
			transfer.addEventListener('click', () => {
				let login = document.querySelector('.login-box');
				let reg = document.querySelector('.reg-box');
				let total = document.querySelector('.transtion-box');
				let target = document.querySelector('.transferToReg');
				let title = document.querySelector('.title');
				let subTitle = document.querySelector('.subTitle');

				if (transfer.innerText === '注册') {
					target.style.left = 0;
					total.style.left = '260px';
					transfer.innerText = '登录';
					title.innerText = '已有帐号？';
					subTitle.innerText = '有帐号就登录吧，好久不见了！';
					setTimeout(() => {
						login.style.display = 'none';
						reg.style.display = 'flex';
					}, 300);
				} else {
					target.style.left = '640px';
					total.style.left = 0;
					transfer.innerText = '注册';
					title.innerText = '还未注册？';
					subTitle.innerText = '立即注册，发现大量机会！';
					setTimeout(() => {
						login.style.display = 'flex';
						reg.style.display = 'none';
					}, 300);
				}
			});
			transforget.addEventListener('click', () => {
				let login = document.querySelector('.login-box');
				let reg = document.querySelector('.reg-box');
				let total = document.querySelector('.transtion-box');
				let target = document.querySelector('.transferToReg');
				let title = document.querySelector('.title');
				let subTitle = document.querySelector('.subTitle');
				target.style.left = 0;
				total.style.left = '260px';
				transfer.innerText = '登录';
				title.innerText = '已有帐号？';
				subTitle.innerText = '有帐号就登录吧，好久不见了！';
				setTimeout(() => {
					login.style.display = 'none';
					reg.style.display = 'flex';
				}, 300);

			});
		},
		async ClickLogin() {
			let account = this.email;
			let password = this.encrypt(this.password.trim());
			let isAdmin = false;

			this.$http.post('http://8.130.77.84:8088/user/login?' +
				'account=' + account +
				'&password=' + password +
				'&isAdmin=' + isAdmin
			)
				.then(response => {
					console.log('登录成功', response);
					if (response.data.code === 200) {
						ElNotification({
							title: '提示',
							message: h('i', { style: 'color: teal' }, '登陆成功~'),
						})
						this.$router.push({ path: '/' });
					} else {
						ElNotification({
							title: '提示',
							message: h('i', { style: 'color: teal' }, '账号或密码错误哦~'),
						})
					}
				})
				.catch(error => {
					console.error('登录失败:', error);
					// 在这里处理登录失败后的逻辑
					ElNotification({
						title: '提示',
						message: h('i', { style: 'color: teal' }, '登录失败，网络故障~'),
					})
				});
		},
		async ClickGetCode() {
			let place = this.email;
			let flag = this.flag;
			this.isShowCheck = true;
			this.isSuccessExecuted = false,
				console.log("email:", place);
			this.$http.get('http://8.130.77.84:8088/user/getCodeForForgetPassword?' +
				'place=' + place +
				'&flag=' + flag
			).then(response => {
				console.log('登录成功', response);
				// 在这里处理登录成功后的逻辑
				// this.$router.push({path: '/'});
			})
				.catch(error => {
					console.error('登录失败:', error);
					// 在这里处理登录失败后的逻辑
				}
			);
		},
		async ClickRegist() {
			let username = this.username;
			let email = this.email;
			let password = this.encrypt(this.password.trim());
			let code = this.code;
			this.$http.post('http://8.130.77.84:8088/user/regist', {
				id: 90,
				username: username,
				email: email,
				password: password,
				gender: 97,
				avatar: 'http://dummyimage.com/100x100',
				introduction: null,
				subscribe: 'nisi ut aliquip esse Duis',
				createTime: '2023-04-23 02:20:47',
				updateTime: '2010-12-11 18:11:06',
				updateBy: 'fugiat sed exercitation voluptate ad',
				isBoss: false,
				accessToken: null,
				code: code
			}).then(response => {
				console.log('注册成功', response);
				// 在这里处理登录成功后的逻辑
				if (response.data.code === 200) {
					ElNotification({
						title: '提示',
						message: h('i', { style: 'color: teal' }, '注册成功~'),
					})
					// this.$router.push({ path: '/' });
				} else {
					ElNotification({
						title: '提示',
						message: h('i', { style: 'color: teal' }, '验证码错误哦~'),
					})
				}
				// this.$router.push({path: '/'});
			})
				.catch(error => {
					console.error('登录失败:', error);
					// 在这里处理登录失败后的逻辑
				}
				);
		}
	},

	mounted() {
		this.handleTransfer();
		// 获取元素实例
		this.drag = document.querySelector('.drag-child'),
			// 图形被校验区域
			this.check = document.querySelector('.check-child')
		// 添加鼠标按下事件
		document.addEventListener('mousedown', this.dragMouseDown)
		// 添加鼠标弹起事件
		document.addEventListener('mouseup', this.dragMouseUP)
	},
}
</script>

<style lang="scss" scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	width: 100%;
	height: 100%;
}

.container {
	// width: 100%;
	height: 100vh;
	background-color: #ededed;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: -10px 0px 0px 0px;
	background: url("../assets/source/bcg2.png") no-repeat;
	background-size: 100% 100%;
	background-attachment: fixed;
}

.container .box {
	width: 900px;
	height: 550px;
	background: rgb(255, 255, 255);
	border-radius: 4px;
	position: relative;
	// background-color: ;

}

.container .box .transtion-box {
	position: absolute;
	left: 0;
	transition: 0.5s all ease-in-out;
}

.container .box .transtion-box .login-box,
.reg-box {
	width: 640px;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 50px 30px;
}

.container .box .transtion-box h1 {
	margin-bottom: 35px;
}

.container .box .transtion-box section {
	display: flex;
	flex-flow: inherit;
	align-items: inherit;
	width: 100%;
	margin-bottom: 30px;
}

.container .box .transtion-box section label {
	font-size: 14px;
	color: #909399;
	text-transform: uppercase;
	margin-bottom: 8px;
}

.container .box .transtion-box section input {
	width: 50%;
	outline: 0;
	border: none;
	font-size: 18px;
	color: tomato;
	text-align: center;
	padding: 4px 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.container .box .transtion-box section span {
	color: rgb(80, 80, 77);
	font-size: 15px;
	cursor: pointer;
	margin-top: 18px;
}

.container .box .transtion-box button {
	width: 140px;
	// padding-right: 100px;
	margin-right: 10px;
	padding: 6px 0;
	text-align: center;
	border: 3px solid #d4af7a;
	border-radius: 20px;
	background: #d4af7a;
	color: #fff;
	font-size: 14px;
	letter-spacing: 6px;
	text-indent: 6px;
	margin-bottom: 15px;
	cursor: pointer;
}

// .container .box .transtion-box .other {
// 	border: 3px solid #d3dae9;
// 	background: #fff;
// 	color: rgb(124, 145, 184);
// 	font-weight: 600;
// }

.container .box .transferToReg {
	width: 260px;
	height: 100%;
	background: linear-gradient(to bottom right,
			#0e92eb 0%,
			#5f90ec 50%,
			#b08fe5 100%);
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	position: absolute;
	left: 640px;
	top: 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 50px 0;
	color: white;
	transition: all 1s ease-in-out;
}

.container .box .transferToReg .title {
	margin-bottom: 10px;
	transition: all 0.3s ease-in-out;
}

.container .box .transferToReg button {
	margin-top: 260px;
	width: 50%;
	padding: 8px 0;
	border-radius: 14px;
	letter-spacing: 10px;
	text-indent: 10px;
	font-size: 18px;
	color: #fff;
	border: 3px solid #fff;
	background: transparent;
	font-weight: 700;
	cursor: pointer;
}

.container .box .transferToReg button:hover {
	border: 3px solid #206dfc;
}

.login-btn {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}


/*--------------------*/
/* 图形拼图验证码 */
.check-container {
	margin: -10px 0px 0px 0px;
	width: 100%;
	height: 102vh;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
}

.check-text {
	// width: 100%;
	width: 60vw;
	margin-left: 10vw;
	// display: flex;
	// justify-content: center;

	// text-align: center;
}

.check {
	width: 400px;
	height: 300px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-image: url(https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500);
	position: relative;
}

.check::before {
	content: '';
	width: 50px;
	height: 50px;
	background: rgba(0, 0, 0, 0.5);
	border: 1px solid #fff;
	position: absolute;
	top: 100px;
	left: 280px;
}

.check-child {
	content: '';
	width: 50px;
	height: 50px;
	border: 1px solid #fff;
	background-image: inherit;
	background-repeat: inherit;
	background-size: 400px 300px;
	background-position: -280px -100px;
	position: absolute;
	top: 100px;
	left: 0;
}

/* 拖动条 */
.drag {
	width: 400px;
	height: 50px;
	background-color: #e3e3e3;
	margin-top: 10px;
	position: relative;
}

/* 可拖动的盒子 */
.drag-child {
	width: 50px;
	height: 50px;
	background-color: rgb(114, 114, 114);
	z-index: 10;
	position: absolute;
	top: 0;
	left: 0;
}

/* 提示文字说明 */
.drag-tips {
	display: flex;
	align-items: center;
	justify-content: end;
	width: 95%;
	height: 100%;
	margin: 0 auto;
	font-size: 12px;
	color: #8a8a8a;
	user-select: none;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;

}

@keyframes move {
	to {
		transform: translateX(0);
	}
}

// .btn{
// 	width: 100px;
// 	height: 30px;
// 	background-color: #f5f4f2;
// 	font-size: 10px;
// }</style>