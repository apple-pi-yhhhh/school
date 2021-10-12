let time;	//時間

let member;	//人数

let mass_k;	//マス-教室
let mass_s;	//マス-視聴会

let dice;	//サイコロ平均

let result;	//結果

let num;

let element = document.getElementById("time");
console.log(element.value);

/*
一人あたりが通るマスの合計 × 人数 ÷ サイコロの平均= かかる時間

time = (mass_k + mass_s) * member / dice
dice = (mass_k + mass_s) * member / time
mass_k = time * dice / member - mass_s
mass_s = time * dice / member - mass_k
member = time * dice / (mass_k + mass_s)

*/
//「num」に計算したいやつ打ち込む
switch (num){
	case "time" :
		result = (mass_k + mass_s) * member / dice
		break;
	
	case "member" :
		result = time * dice / (mass_k + mass_s)
		break;
	
	case "mass_k" :
		result = time * dice / member - mass_s
		break;
	
	case "mass_s" :
		result = time * dice / member - mass_k
		break;
	
	case "dice" :
		result = (mass_k + mass_s) * member / time
		break;
	
	default :
		document.write("<h2>予期せぬエラーが発生したお！</h2>")
}
document.write("<h2>"+result+"</h2>")
