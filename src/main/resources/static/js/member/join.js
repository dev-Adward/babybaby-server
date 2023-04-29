/* join */

// let identificationFlag = false;
// // 아이디 정규식 이벤트 사용 및 함수
// $identificationInput.on("blur", function() {
// 	$.ajax({
// 		url: contextPath + "/user/checkIdOk.user",
// 		data: {userIdentification: $identificationInput.val()},
// 		success: function(result) {
// 			result = JSON.parse(result);
// 			/*console.log(result);*/
// 			if (result.check) {
// 				/*	alert("성공");*/
// 				$identificationWarning.text("중복된 아이디입니다.");
// 				$identificationWarning.css("display", "block");
// 				$identificationInput.css("border-color", "#f66");
// 				identificationFlag = false;
// 			} else if ($identificationInput.val() < 1) {
// 				//$identificationWarning.text("아이디를 입력해주세요.");
// 				$identificationWarning.css("display", "block");
// 				$identificationInput.css("border-color", "#f66");
// 				identificationFlag = false;
// 				// !isPhoneNum.test(mobile.value)
// 			} else if (!regExp.test($identificationInput.val())) {
// 				$identificationWarning.text("6~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
// 				$identificationWarning.css("display", "block");
// 				$identificationInput.css("border-color", "#f66");
// 				identificationFlag = false;
// 			} else {
// 				$identificationWarning.css("display", "none");
// 				$identificationInput.css("border-color", "#dde2e6");
// 				identificationFlag = true;
// 				// #dde2e6;
// 			}
// 			completeAllCheck();
// 		}
// 	})
// });

/* 아이디 이메일 */

// 아이디 변수 - 인풋
const $identificationInput = $("#identification-input");
const $identificationWarning = $(".identification-error");
// var regExp = /^[A-Za-z0-9]([-_.]?[0-9a-z]){5,20}$/;
var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let identificationFlag = false;

$identificationInput.on("blur",function(){
	console.log("zzzz")
	 if ($identificationInput.val() < 1) {
		$identificationWarning.text("이메일을 입력해주세요.");
		$identificationWarning.css("display", "block");
		$identificationInput.css("border-color", "#f66");
		identificationFlag = false;
		// !isPhoneNum.test(mobile.value)
	} else if (!emailPattern.test($identificationInput.val())) {
		$identificationWarning.text("이메일 주소를 다시 확인해주세요.");
		$identificationWarning.css("display", "block");
		$identificationInput.css("border-color", "#f66");
		identificationFlag = false;
	} else {
		$identificationWarning.css("display", "none");
		$identificationInput.css("border-color", "#dde2e6");
		identificationFlag = true;
		// #dde2e6;
	}
})




















// 비밀번호 변수



// 비밀번호 에러 변수
const $passwordInput = $("#password-input"); //비밀번호 
const $passwordWarning = $(".password-error");
let passwordFlag = false;
// 비밀번호 정규식 이벤트 사용 및 함수
$passwordInput.on("blur", function() {
	var $passwordInputValue = $passwordInput.val();
	var passwordInputValue = $passwordInput.val();
	// var num = passwordInputValue.search(/[0-9]/g);
	// var eng = passwordInputValue.search(/[a-z]/ig);
	// var spe = passwordInputValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

	var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;


	// $identificationInput.css("border-color", "#f66");
	// $identificationInput.css("border-color", "#dde2e6");
	if ($passwordInputValue.length < 8) {
		$passwordWarning.text("최소 8자입니다.");
		$passwordWarning.css("display", "block");
		$passwordInput.css("border-color", "#f66");
		passwordFlag = false;
	} else if ($passwordInputValue.length > 20) {
		$passwordWarning.text("최대 20자입니다.");
		$passwordWarning.css("display", "block");
		$passwordInput.css("border-color", "#f66");
		passwordFlag = false;
	} else if (!regExp.test($passwordInputValue)) {
		console.log("들어옴");
		$passwordWarning.text("영문,숫자,특수문자를 조합한 8자 이상");
		$passwordWarning.css("display", "block");
		$passwordInput.css("border-color", "#f66");
		passwordFlag = false;
	} else {
		$passwordWarning.css("display", "none");
		$passwordInput.css("border-color", "#dde2e6");
		passwordFlag = true;
	}
	completeAllCheck();
});

// 비밀번호 확인 변수
const $passwordCheckInput = $(".re-input-password-container");
// 비밀번호 확인 에러 변수
const $passwordCheckWarning = $(".recheck-password-error");
let passwordCheckFlag = false;
// 비밀번호 확인 정규식 이벤트 사용 및 함수
$passwordCheckInput.on("blur", function() {
	var $passwordInputValue = $passwordInput.val();
	var $passwordCheckInputValue = $passwordCheckInput.val();

	// $passwordCheckInput.css("border-color", "#f66");
	// $passwordCheckInput.css("border-color", "#dde2e6");
	if ($passwordCheckInputValue.length < 1) {
		$passwordCheckWarning.text("동일한 비밀번호를 입력해주세요.");
		$passwordCheckWarning.css("display", "block");
		$passwordCheckInput.css("border-color", "#f66");
		passwordCheckFlag = false;
	} else if ($passwordCheckInputValue == $passwordInputValue) {
		$passwordCheckWarning.css("display", "none");
		$passwordCheckInput.css("border-color", "#dde2e6");
		passwordCheckFlag = true;
	} else {
		$passwordCheckWarning.text("동일한 비밀번호를 입력해주세요.");
		$passwordCheckWarning.css("display", "block");
		$passwordCheckInput.css("border-color", "#f66");
		passwordCheckFlag = false;
	}
	completeAllCheck();
});

const $nicknameInput = $("#nickname");
const $nicknameWarning = $(".nickname-error");
let nicknameFlag = false;
// 닉네임 확인 정규식 이벤트 사용 및 함수
$nicknameInput.on("blur", function() {
	var $nicknameInputVal = $nicknameInput.val();
	var $nicknameWarningVal = $nicknameWarning.val();

	// $nicknameInput.css("border-color", "#f66");
	// $nicknameInput.css("border-color", "#dde2e6");
	if ($nicknameInputVal.length < 2) {
		$nicknameWarning.text("최소 2자입니다.");
		$nicknameWarning.css("display", "block");
		$nicknameInput.css("border-color", "#f66");
		nicknameFlag = false;
	} else if ($nicknameInputVal.length > 20) {
		$nicknameWarning.text("닉네임 최대 길이는 20자 입니다. 확인해 주세요.");
		$nicknameWarning.css("display", "block");
		$nicknameInput.css("border-color", "#f66");
		nicknameFlag = false;
	} else {
		$nicknameWarning.css("display", "none");
		$nicknameInput.css("border-color", "#dde2e6");
		nicknameFlag = true;
	}
	completeAllCheck();
});


// 이메일 변수
// const $emailInput = $("#email-input");
// 이메일 에러 변수
const $emailWarning = $(".email-error");
let emailFlag = false;
var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// 이메일 정규식 이벤트 사용 및 함수
// $emailInput.on("blur", function() {
// 	$.ajax({
// 		url: contextPath + "/user/checkEmailOk.user",
// 		data: {userEmail: $emailInput.val()},
// 		success: function(result) {
// 			result = JSON.parse(result);
// 			/*console.log(result);*/
// 			if (result.check) {
// 				$emailWarning.text("중복된 이메일입니다.");
// 				$emailWarning.css("display", "block");
// 				$emailInput.css("border-color", "#f66");
// 				emailFlag = false;
// 			} else if ($emailInput.val() < 1) {
// 				$emailWarning.text("이메일을 입력해주세요.");
// 				$emailWarning.css("display", "block");
// 				$emailInput.css("border-color", "#f66");
// 				emailFlag = false;

// 			} else if (!emailPattern.test($emailInput.val())) {
// 				$emailWarning.text("이메일 주소를 다시 확인해주세요.");
// 				$emailWarning.css("display", "block");
// 				$emailInput.css("border-color", "#f66");
// 				emailFlag = false;
// 			} else {
// 				$emailWarning.css("display", "none");
// 				$emailInput.css("border-color", "#dde2e6");
// 				emailFlag = true;
// 			}
// 			completeAllCheck();
// 			}
// })
// });
const $emailInput = $("#email-input");
/* 아이디(이메일 유효성검사) */
$identificationInput.on("blur",function(){
	var $emailInput = $identificationInput.val();	
	if (result.check) {
		$emailWarning.text("중복된 이메일입니다.");
		$emailWarning.css("display", "block");
		$emailInput.css("border-color", "#f66");
		emailFlag = false;
	} else if ($emailInput.val() < 1) {
		$emailWarning.text("이메일을 입력해주세요.");
		$emailWarning.css("display", "block");
		$emailInput.css("border-color", "#f66");
		emailFlag = false;
	
	} else if (!emailPattern.test($emailInput.val())) {
		$emailWarning.text("이메일 주소를 다시 확인해주세요.");
		$emailWarning.css("display", "block");
		$emailInput.css("border-color", "#f66");
		emailFlag = false;
	} else {
		$emailWarning.css("display", "none");
		$emailInput.css("border-color", "#dde2e6");
		emailFlag = true;
	}
})

const $nameInput = $("#name-input");
const $nameWarning = $(".name-error");
let nameFlag = false;
// 이름 정규식 이벤트 사용 및 함수
$nameInput.on("blur", function() {
	const $nameInputValue = $nameInput.val();
	const nameInputValue = $nameInput.val();
	var name = nameInputValue.search(/^[가-힣a-zA-Z]{2,20}$/);

	// $nameInput.css("border-color", "#f66");
	// $nameInput.css("border-color", "#dde2e6");
	if ($nameInputValue.length < 1) {
		$nameWarning.text("이름을 입력해주세요.");
		$nameWarning.css("display", "block");
		$nameInput.css("border-color", "#f66");
		nameFlag = false;
	} else if ($nameInputValue.length < 2) {
		$nameWarning.text("최소 2자입니다.");
		$nameWarning.css("display", "block");
		$nameInput.css("border-color", "#f66");
		nameFlag = false;
	} else if (nameInputValue.search(/\s/) != -1) {
		$nameWarning.text("다시 확인해주세요.");
		$nameWarning.css("display", "block");
		$nameInput.css("border-color", "#f66");
		nameFlag = false;
	} else if (name < 0) {
		$nameWarning.text("다시 확인해주세요.");
		$nameWarning.css("display", "block");
		$nameInput.css("border-color", "#f66");
		nameFlag = false;
	} else {
		$nameWarning.css("display", "none");
		$nameInput.css("border-color", "#dde2e6");
		nameFlag = true;
	}
	completeAllCheck();
});


//핸드폰 변수
const $phoneInput = $('#input-phone-number');
//핸드폰 에러 변수
const $phoneWarning = $('.phone-error');
let phoneFlag = false;
// 핸드폰 정규식 이벤트 함수 사용
$phoneInput.on("blur", function() {
	var isPhoneNum = /([01]{2,})([01679]{1,})([0-9]{3,4})([0-9]{4})/;
	var $phoneInputVal = $phoneInput.val();
	var phoneInputVal = $phoneInput.val();


	// $phoneInput.css("border-color", "#f66");
	// $phoneInput.css("border-color", "#dde2e6");
	if ($phoneInputVal.length < 1) {
		$phoneWarning.text("핸드폰 번호를 입력해주세요.");
		$phoneWarning.css("display", "block");
		$phoneInput.css("border-color", "#f66");
		phoneFlag = false;
	} else if (!isPhoneNum.test($phoneInputVal)) {
		$phoneWarning.text("잘못된 형식입니다. 다시 입력해주세요.");
		$phoneWarning.css("display", "block");
		$phoneInput.css("border-color", "#f66");
		phoneFlag = false;
	} else {
		$phoneWarning.css("display", "none");
		$phoneInput.css("border-color", "#dde2e6");
		phoneFlag = true;
	}

	completeAllCheck();
});



const $checkBox = $("#termscheckbox");
const $checkBoxImage = $("#check-box");
let check = false; // 전체동의 미체크 상태

$checkBox.on("click", function() {
	console.log("체크박스 들어옴.")
	if (!check) {
		console.log("true 체크박스 들어옴.")
		// document.querySelector("#check-box").style.background = "black";
		// $("#check-box").css("display", "block");
		$checkBoxImage.css("display", "block");
		check = true;
		completeAllCheck();
		return false;
	} else {
		console.log("false 체크박스 들어옴.")
		// document.querySelector("#check-box").style.display = "none";
		$checkBoxImage.css("display", "none");
		check = false;
		completeAllCheck();
		return false;
	}
});


// const $completeButton = $(".signup-submit-button");
// /* 모든 정규식 완료 및 전체 동의 체크 시 버튼 활성화 */
// function completeAllCheck() {

// 	// let identificationFlag = false; // 아이디
// 	// let passwordFlag = false; // 비밀번호
// 	// let passwordCheckFlag = false; // 비밀번호 확인
// 	// let nicknameFlag = false; // 닉네임
// 	// let emailFlag = false; // 이메일
// 	// let nameFlag = false; // 이름
// 	// let phoneCheck = false; // 핸드폰

// 	if (identificationFlag && passwordFlag && passwordCheckFlag && nicknameFlag  && nameFlag && phoneFlag) {
// 		console.log("완료");
// 		$completeButton.css("pointer-events", "auto");
// 		$completeButton.css("cursor", "pointer");
// 		// $completeButton.css("border-color", "#00c4c4");
// 		// $completeButton.css("background-color", "#00c4c4");
// 		$completeButton.css("opacity", "0.8");  // 활성화 opacity: 0.8;
// 		$completeButton.css("color", "#fff");
// 	} else {
// 		console.log("하나라도 실패 시 들어옴.")
// 		$completeButton.css("pointer-events", "none");
// 		$completeButton.css("cursor", "default");
// 		// $completeButton.css("border-color", "#00c4c4");
// 		// $completeButton.css("background-color", "#00c4c4");
// 		$completeButton.css("opacity", "0.45");  //  비활성화 opacity: 0.45;
// 		$completeButton.css("color", "#fff");
// 	}
// }

function send() {
	if(identificationFlag && passwordFlag && passwordCheckFlag && nicknameFlag  && nameFlag && phoneFlag){
		document.joinForm.submit();
	}else if(identificationFlag == false){
		$identificationInput.focus();
	}else if(passwordFlag == false){
		$passwordInput.focus();
	}else if(passwordCheckFlag == false){
		$passwordCheckInput.focus();
	}else if(nicknameFlag == false){
		$nicknameInput.focus();
	}else if(nameFlag == false){
		$nameInput.focus();
	}else if(phoneFlag == false){
		$phoneInput.focus();
	}
}

$(".Button_TextField_icon").on("click",function(){
		const type = $passwordInput.attr("type") === "password" ? "text" : "password";
		$passwordInput.attr("type", type);
		const $path = $(".Button_TextField_icon path");
		const d = $path.attr("d") === "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z" ? "M42.48 3.864l2.04 2.04-6.324 6.324-.864.852-.864.876-4.68 4.668-3.072 3.084-7.2 7.2-3.084 3.072-3.804 3.816-.912.912-.912.9-7.02 7.032-2.04-2.04 6.408-6.444a23.868 23.868 0 0 1-9.6-11.652l-.168-.432.156-.42A24.816 24.816 0 0 1 23.868 7.968c4.08.008 8.101.978 11.736 2.832l6.876-6.936zm-1.788 10.308a22.296 22.296 0 0 1 6.516 9.516l.072.444-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6a25.676 25.676 0 0 1-7.872-1.2l5.532-5.532a9.06 9.06 0 0 0 2.4.312 9.6 9.6 0 0 0 9.6-9.6 9.06 9.06 0 0 0-.312-2.4zm-10.776 2.4a9.6 9.6 0 0 0-15.6 7.536l-.048-.036A9.6 9.6 0 0 0 16.332 30l3.12-2.964a5.316 5.316 0 0 1-.876-2.928 5.412 5.412 0 0 1 5.4-5.4c1.04 0 2.059.304 2.928.876z" : "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z";
		$path.attr("d", d);
})

$(".Button_TextField_icon1").on("click",function(){
	const type = $passwordCheckInput.attr("type") === "password" ? "text" : "password";
	$passwordCheckInput.attr("type", type);
	const $path = $(".Button_TextField_icon1 path");
	const d = $path.attr("d") === "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z" ? "M42.48 3.864l2.04 2.04-6.324 6.324-.864.852-.864.876-4.68 4.668-3.072 3.084-7.2 7.2-3.084 3.072-3.804 3.816-.912.912-.912.9-7.02 7.032-2.04-2.04 6.408-6.444a23.868 23.868 0 0 1-9.6-11.652l-.168-.432.156-.42A24.816 24.816 0 0 1 23.868 7.968c4.08.008 8.101.978 11.736 2.832l6.876-6.936zm-1.788 10.308a22.296 22.296 0 0 1 6.516 9.516l.072.444-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6a25.676 25.676 0 0 1-7.872-1.2l5.532-5.532a9.06 9.06 0 0 0 2.4.312 9.6 9.6 0 0 0 9.6-9.6 9.06 9.06 0 0 0-.312-2.4zm-10.776 2.4a9.6 9.6 0 0 0-15.6 7.536l-.048-.036A9.6 9.6 0 0 0 16.332 30l3.12-2.964a5.316 5.316 0 0 1-.876-2.928 5.412 5.412 0 0 1 5.4-5.4c1.04 0 2.059.304 2.928.876z" : "M23.589 7.895l.411.001c10.56 0 20.16 6.504 23.34 15.78l.132.432-.144.396c-3.216 9.168-12.816 15.6-23.328 15.6A24.84 24.84 0 0 1 .684 24.492l-.168-.432.156-.42A24.804 24.804 0 0 1 24 7.896zM24 14.46a9.6 9.6 0 1 0 0 19.2 9.6 9.6 0 0 0 0-19.2zm0 4.14a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8z";
	$path.attr("d", d);
})